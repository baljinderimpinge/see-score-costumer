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
// import { CacheLookupPolicy } from '@azure/msal-browser';
import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

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
  const { instance, inProgress, accounts } = useMsal();

  const allSessionStorageItems = { ...sessionStorage };
  const [accessToken, setAccessToken] = useState()
  const [accessTokenStatus, setAccessTokenStatus] = useState(false)
  const [userRiskPolicy, setUserRiskPolicy] = useState()
  const [findingCount, setFindingCount] = useState()
  const [azureToken, setAzureToken] = useState(localStorage.getItem("azureToken"))
  const [loder,setLoder] =useState(false)
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
  // console.log(account, "kkkkkkkkk", inProgress, "llllllllll", instance, "accountaccount")


useEffect(()=>{
  getScoreData()
},[azureToken])

  const getScoreData = async()=>{
    const payload = {
      token: azureToken
    }
    try {
      const data = await axios.post(`${API_BASE_URL}/user/getScoreData`, payload)
      console.log(data.data,"llllllllllllllll")
      setUserRiskPolicy(data?.data?.data[0])
      setFindingCount(data?.data?.findingCount)
      setLoder(true)
      setAccessTokenStatus(true)

    } catch (error) {
      console.log(error.response.data.status
        ,"error")

        if(error.response.data.status == 200){
          setLoder(true)
          setAccessTokenStatus(false)
        }
    }

  }


  const handleRedirect = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Error during login redirect:", error);
    }
  };

  return (
    <>
     <>
        <Sidebar />
        <main>
          <Header />
          <div className="content-page">
            <Section />

            <h2 className="mb-4">Risk dashboard</h2>
            {loder ?  <> 
            {accessTokenStatus ? <>
              <section>
                <div className="score-main">
                  <div className="bg-white border-radius-30 score first-score" style={styles}>
                    <div className="score-number">
                      <figure><img src={SubImg} alt="" /></figure>
                      <h5>Identity Score</h5>
                      <span className="percentage-num">{userRiskPolicy?.scoreInPercentage || 0}<sub>%</sub></span>
                      <div className="readmore text-center mt-4"><a href="#">Learn more <i className="fa-solid fa-chevron-right"></i></a></div>
                    </div>
                  </div>
                  <div className="second-score">
                    <div className="bg-white border-radius-30 score">
                      <div className="score-number">
                        <h5>Active users</h5>
                        <div className="con">
                          <div className="percentage-num">{userRiskPolicy?.total || 0}</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-radius-30 score">
                      <div className="score-number">
                        <h5>Open findings</h5>
                        <div className="con">
                          <div className="percentage-num">{findingCount || 0}</div>
                          <div className="readmore text-center mt-4"><a href="#">View security health <i className="fa-solid fa-chevron-right"></i></a></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-radius-30 score last">
                      <div className="score-number text-start">
                        <h5>Identity score trend</h5>
                        <img src={ChartImg} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>

                <div className="update-date"><span>Last updated - 15/01/2024, 11:00:00</span></div>
              </section>
            </>
              :
              
<p>Your account is not authorized!</p> 
            }

        </>:<> <FullPageLoader><ClipLoader size={50} color={'#000'} /></FullPageLoader>
                <ToastContainer /> </>}
          </div>
        </main>

      </>
        <footer></footer>
    </>
  );
};

export default CustomerDashboard;
