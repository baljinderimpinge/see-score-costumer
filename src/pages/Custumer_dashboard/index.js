import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import images from "../../assets/images/logo1.svg"
import axios from 'axios';
import { API_BASE_URL } from '../../lib/constant';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import { loginRequest } from '../Login/msalSetup';
import Section from '../../components/Section';

export const CustomerDashboard = () => {


  const { instance } = useMsal();

  useEffect(() => {
    const currentAccount = instance.getActiveAccount()
    if (currentAccount) {
      console.log(currentAccount.name, "kkkkkkkkkkkkkkkkkk")
    }

  }, [instance])
  const handleRedirect = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Error during login redirect:", error);
    }
  };
  return (
    <div>

      <UnauthenticatedTemplate>
      <Header/>    
        <section class="ptb-110">
          <div class="container">
          <Section/>
            <h2 class="mt-5">Let’s connect to your Identity Provider</h2>
            <p class="fw-normal">Click your identity provider below to get started. You’ll need to be a Global Administrator to connect to the platform.</p>
            <div class="row mt-4 gy-4">
              <div class="col-md-4">
                <div class="bg-white p-5 border-radius-15 text-center">
                  <figure><img src={images} alt="rr" /></figure>
                  <h5 onClick={handleRedirect} >Microsoft Azure</h5>
                </div>
              </div>  
            </div>
          </div>
        </section>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
      <Header/>
      <Section/>
        <section>
          <div className="container">
            <div className="score-main">
              <div className="bg-primary border-radius-30 score first-score">
                <div className="score-number">
                  <h5>Your Identity Score</h5><span className="percentage-num">81<sub>%</sub></span>
                </div>
                <div className="divider"></div>
                <div className="score-number">
                  <h5>Benchmark</h5>
                  <div className="con">
                    <div className="percentage-num">67<sub>%</sub></div>
                    <div className="readmore text-center mt-4"><a href="#">Discover more <i className="fa-solid fa-chevron-right"></i></a></div>
                  </div>
                </div>
              </div>
              <div className="second-score">
                <div className="bg-white border-radius-30 score">
                  <div className="score-number">
                    <h5>Other metric</h5>
                    <div className="con">
                      <div className="percentage-num">32<sub>%</sub></div>
                      <div className="readmore text-center mt-4"><a href="#">Discover more <i className="fa-solid fa-chevron-right"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-radius-30 score">
                  <div className="score-number">
                    <h5>Current alerts</h5>
                    <div className="con">
                      <div className="percentage-num">45</div>
                      <div className="readmore text-center mt-4"><a href="#">Discover more <i className="fa-solid fa-chevron-right"></i></a></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-radius-30 score last">
                  <div className="score-number">
                    <h5 className="mb-md-0">Another <br className="d-none d-md-block" /> metric</h5>
                    <div className="con">
                      <div className="percentage-num">93</div>
                      <div className="readmore text-center mt-4"><a href="#">Discover more <i className="fa-solid fa-chevron-right"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
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
          </div>
        </section>
        <footer></footer>
      </AuthenticatedTemplate>
      </div>
  );
};

export default CustomerDashboard;
