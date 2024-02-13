import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { json, useParams } from 'react-router-dom';
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
import { useNavigate } from 'react-router-dom';

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

export const MicrosoftLogin = () => {
  const { instance, inProgress, accounts } = useMsal();
  const navigate = useNavigate();

  const allSessionStorageItems = { ...sessionStorage };
  const [accessToken, setAccessToken] = useState()
  const [accessTokenStatus, setAccessTokenStatus] = useState(false)
  const [userRiskPolicy, setUserRiskPolicy] = useState()
  const [findingCount, setFindingCount] = useState()
  const [tokenHandle, setTokenHandle] = useState(false)
  // Log or use the items
  // console.log(allSessionStorageItems,"allSessionStorageItems");
  //   const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims } = useAuth0();
  // console.log(isAuthenticated,user)
  const styles = {
    background: `url(${IdImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
  };





  // const regexPattern = /refreshtoken/i;
  // const isRefreshTokenPresent = regexPattern.test();

  // const foundKey = Object.keys(data).find(key => regexPattern.test(key));
  // console.log(data[foundKey])
  // if(foundKey){
  //   const refreshStr= data[foundKey]
  //   const refreshObj = JSON.parse(refreshStr)
  //   console.log(refreshObj.secret)
  const account = instance.getAllAccounts()

  // }
  // console.log(foundKey,"foundKey")
  //  if(account.length>=1){
  useEffect(() => {
    const fetchData = async () => {
      try {
        const account = instance.getAllAccounts()
        // instance.setActiveAccount(account[0].username);

        // const data = await handleResponse()


        if (accounts.length > 0) {
          instance.setActiveAccount(account[0].username);
          const request = {
            scopes: loginRequest.scopes,
            account: accounts[0]
          };
          instance.acquireTokenSilent(request).then(response => {
            const account = instance.getTokenCache()
            const data = account?.storage?.browserStorage?.windowStorage
            const regexPattern = /refreshtoken/i;
            const foundKey = Object.keys(data).find(key => regexPattern.test(key));
            console.log(data[foundKey])
            if (foundKey) {
              const refreshStr = data[foundKey]
              const refreshObj = JSON.parse(refreshStr)
              console.log(refreshObj.secret)
              console.log(response, "extExpiresOn")
              const expiresDiff = response?.extExpiresOn.getTime()-response?.expiresOn.getTime()
              const payload1 = {
                email: response?.account?.username,
                token: response?.accessToken,
                userId: localStorage.getItem("userId"),
                expires_in: expiresDiff/1000,
                refresh_token: response?.tenantId,

              }
              console.log(payload1,"payload")
              setAccessToken(response.accessToken);

              axios.post(`${API_BASE_URL}/user/addToken`, payload1)

                .then((response) => {
                  console.log(payload1.email,"emial  lllllllllllllll")
                  localStorage.setItem("email",payload1.email)

                  localStorage.setItem("azureToken", response?.data?.data?.token)
                  navigate('/customer-dashboard');
                }).catch((error) => {
                  console.log(error)
                })

            }
          }).catch(error => {
            if (error instanceof InteractionRequiredAuthError) {
              instance.acquireTokenPopup(request).then(response => {
                // setAccessToken(response.accessToken);

              });
            }
          });
        } else {
          console.log("no accout foud")
        }

      } catch (error) {
        setTokenHandle(true)
        console.error('Token acquisition error:', error);
      }
    };

    fetchData();
  }, [account, instance])





  const handleRedirect = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Error during login redirect:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <div className="content-page">
          <Section />
          <section>
            <h2>Get started</h2>
            <p className="fw-semibold">Select your identity provider below to get started</p>
            <div className="row mt-4 gy-4">
              <div className="col-md-4">
                <div className="bg-white p-5 border-radius-15 text-center">
                  <figure><img onClick={handleRedirect} src={images} alt="" /></figure>
                  <h5 onClick={handleRedirect} >Microsoft Azure</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* <AuthenticatedTemplate>  <>
        <Sidebar />

        <main>
          <Header />
          <div className="content-page">
            <Section />

            <h2 className="mb-4">Risk dashboard</h2>
            {true ? <>
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
              <> <FullPageLoader><ClipLoader size={50} color={'#000'} /></FullPageLoader>
                <ToastContainer /> </>

            }
          </div>
        </main>

      </>

        <footer></footer>

      </AuthenticatedTemplate> */}
    </>
  );
};

export default MicrosoftLogin;
