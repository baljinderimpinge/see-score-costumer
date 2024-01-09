import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../lib/constant';

export const Dashboard = () => {
  const { tenatId } = useParams();

  useEffect(()=>{
    getSecureScrore()
  })
  const getSecureScrore = async()=>{
    try {
      const payload = {
        tenatId
      }
      const res =await axios.post(`${API_BASE_URL}/user/tenantid`,payload)
      console.log(res)
    } catch (error) {
      
    }
   
  } 
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Dashboard;
