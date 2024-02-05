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


export const CustomerDashboard = () => {
  const { instance, inProgress } = useMsal();
  const allSessionStorageItems = { ...sessionStorage };
  const [accessToken, setAccessToken] = useState()
  const [accessTokenStatus, setAccessTokenStatus] = useState(false)
  const [userRiskPolicy, setUserRiskPolicy] = useState()
  // Log or use the items
  // console.log(allSessionStorageItems,"allSessionStorageItems");

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
          const token = await instance.acquireTokenSilent(silentRequest);
          setAccessToken(token.accessToken);
          console.log(token.accessToken, "ikkkkkkkk")
          setAccessTokenStatus(true)
          const payload = {
            token: token.accessToken
          }
          try {
            const data = await axios.post(`${API_BASE_URL}/user/token"`, payload)
            console.log(data?.data.data[0])
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
      <AuthenticatedTemplate>
        <Sidebar />
        <main>
          <Header />
          <div class="content-page">
            <Section />

            <h2 class="mb-4">Risk dashboard</h2>
            <section>
              <div class="score-main">
                <div class="bg-white border-radius-30 score first-score" style={styles}>
                  <div class="score-number">
                    <figure><img src={SubImg} alt="" /></figure>
                    <h5>Identity Score</h5>
                    <span class="percentage-num">{userRiskPolicy?.scoreInPercentage || 81}<sub>%</sub></span>
                    <div class="readmore text-center mt-4"><a href="#">Learn more <i class="fa-solid fa-chevron-right"></i></a></div>
                  </div>
                </div>
                <div class="second-score">
                  <div class="bg-white border-radius-30 score">
                    <div class="score-number">
                      <h5>Active users</h5>
                      <div class="con">
                        <div class="percentage-num">{userRiskPolicy?.total || 7}</div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white border-radius-30 score">
                    <div class="score-number">
                      <h5>Open findings</h5>
                      <div class="con">
                        <div class="percentage-num">5</div>
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
              {/* <div className="container">
                <div className="bg-white border-radius-15 open-risk">
                  <h2 className="text-primary">Open Risks</h2>
                  <p>Click to see a detailed explanation. </p>
                  <div className="mt-4">
                    <ul className="list-unstyled risk">
                      <li>Ensure user consent to apps accessing company data on their behalf is not allowed</li>
                      <li>Ensure the 'Password expiration policy' is set to 'Set passwords to never expire (recommended)'</li>
                      <li>Enable Conditional Access policies to block legacy authentication</li>
                      <li>Ensure multifactor authentication is enabled for all users</li>
                      <li>Ensure multifactor authentication is enabled for all users in administrative roles</li>
                      <li>Enable Azure AD Identity Protection sign-in risk policies</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div class="update-date"><span>Last updated - 15/01/2024, 11:00:00</span></div>
            </section>
          </div>
        </main>
        <footer></footer>
      </AuthenticatedTemplate>
    </>
  );
};

export default CustomerDashboard;
