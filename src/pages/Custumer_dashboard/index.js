import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import images from "../../assets/images/logo1.svg"
import axios from 'axios';
import { API_BASE_URL } from '../../lib/constant';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import { loginRequest } from '../Login/msalSetup';
import Section from '../../components/Section';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubImg from "../../assets/images/new/subtract.svg"
import IdImg from "../../assets/images/new/identity-shape.svg"
import ChartImg from "../../assets/images/new/chart.jpg"
import { CacheLookupPolicy } from '@azure/msal-browser';
import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";

const FullPageLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  z-index: 1000;
`;

export const CustomerDashboard = () => {
  const { instance, inProgress } = useMsal();
  const allSessionStorageItems = { ...sessionStorage };
  const [accessToken, setAccessToken] = useState()
  const [accessTokenStatus, setAccessTokenStatus] = useState(false)
  const [userRiskPolicy, setUserRiskPolicy] = useState()
  const [ findingCount, setFindingCount]=useState()
  // Log or use the items
  // console.log(allSessionStorageItems,"allSessionStorageItems");
//   const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims } = useAuth0();
// console.log(isAuthenticated,user)
  const styles = {
    background: `url(${IdImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
  };


  const account = instance.getAllAccounts()
  // console.log(account,inProgress,instance, "accountaccount")
  var username = "vishal@impingesolutionssgmail.onmicrosoft.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // You may want to check if inProgress is false before making the token request
        if (!accessTokenStatus) {
          const silentRequest = { cacheLookupPolicy: CacheLookupPolicy.Default };
          console.log(silentRequest,"lllllll")
          const token = await instance.acquireTokenSilent(silentRequest);
          setAccessToken(token.accessToken);
          console.log(token, "ikkkkkkkk")
          setAccessTokenStatus(true)
          const payload = {
            email: token?.account?.username
          }
          const payload1 = {
            email:token?.account?.username,
            token: token?.accessToken
          }
          try {
            const result = await axios.post(`${API_BASE_URL}/user/addToken`, payload1)
            console.log(result?.data?.data?.email,"resultkljjjjjjjj")
            const payload = {
              email: result?.data?.data?.email
            }
            localStorage.setItem("email",result?.data?.data?.email)
            const data = await axios.post(`${API_BASE_URL}/user/getScoreData`, payload)
            console.log(data?.data.findingCount)
            setFindingCount(data?.data?.findingCount)
            setUserRiskPolicy(data?.data?.data[0])  
          } catch (error) {
            console.log(error, "error")
          }
        }
      } catch (error) {
        console.error('Token acquisition error:', error);
      }
    };

    fetchData();
  }, [instance, account, inProgress]);

  // useEffect(()=>{
  //   getToken()
  // },[instance,account,inProgress])
  // const getToken  =async ()=>{
  //   var silentRequest = {
  //     cacheLookupPolicy: CacheLookupPolicy.Default
  //   }

  //   const token = await instance.acquireTokenSilent(silentRequest)
  //   console.log(token.accessToken)
  //   setAccessToken(token.accessToken)
  // }

  const handleRedirect = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Error during login redirect:", error);
    }
  };

  return (
    <>
      <UnauthenticatedTemplate>
        <Sidebar />
        <main>
          <Header />
          <div class="content-page">
            <Section />
            <section>

              <h2>Get started</h2>
              <p class="fw-semibold">Select your identity provider below to get started</p>

              <div class="row mt-4 gy-4">
                <div class="col-md-4">
                  <div class="bg-white p-5 border-radius-15 text-center">
                    <figure><img onClick={handleRedirect} src={images} alt="" /></figure>
                    <h5 onClick={handleRedirect} >Microsoft Azure</h5>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>  <>
        <Sidebar />
        
        <main>
          <Header />
          <div class="content-page">
            <Section />

            <h2 class="mb-4">Risk dashboard</h2>
            {userRiskPolicy?<>
            <section>
              <div class="score-main">
                <div class="bg-white border-radius-30 score first-score" style={styles}>
                  <div class="score-number">
                    <figure><img src={SubImg} alt="" /></figure>
                    <h5>Identity Score</h5>
                    <span class="percentage-num">{userRiskPolicy?.scoreInPercentage || 0}<sub>%</sub></span>
                    <div class="readmore text-center mt-4"><a href="#">Learn more <i class="fa-solid fa-chevron-right"></i></a></div>
                  </div>
                </div>
                <div class="second-score">
                  <div class="bg-white border-radius-30 score">
                    <div class="score-number">
                      <h5>Active users</h5>
                      <div class="con">
                        <div class="percentage-num">{userRiskPolicy?.total || 0}</div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white border-radius-30 score">
                    <div class="score-number">
                      <h5>Open findings</h5>
                      <div class="con">
                        <div class="percentage-num">{findingCount}</div>
                        <div class="readmore text-center mt-4"><a href="#">View security health <i class="fa-solid fa-chevron-right"></i></a></div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white border-radius-30 score last">
                    <div class="score-number text-start">
                      <h5>Identity score trend</h5>
                      <img src={ChartImg} alt="" class="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>

              <div class="update-date"><span>Last updated - 15/01/2024, 11:00:00</span></div>
            </section>
            </>
            :
         <> <FullPageLoader><ClipLoader size={50} color={'#000'} loading={true} /></FullPageLoader>
          <ToastContainer /> </>
       
             }
          </div>
        </main>
        
        </>
        
        <footer></footer>
       
      </AuthenticatedTemplate>
    </>
  );
};

export default CustomerDashboard;
