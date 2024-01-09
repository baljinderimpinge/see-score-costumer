import React from 'react';
import './style.css';
// import Images from './images/chain.svg';  // Import specific image file(s) if needed
import Images from "./images/chain.svg"
import RiskImage  from './images/riska-logo.svg';  // Import specific image file(s) if needed
import  userImage from './images/user.svg';  // Import specific image file(s) if needed
import lockImage from './images/lock.svg';  // Import specific image file(s) if needed
import outImage from './images/out.svg';  // Import specific image file(s) if needed

export const Dashboard = () => {
  return (
    <div>
      
        <header>
          <div className="chain"> <img src={Images}/></div>
          <nav className="navbar-expand-lg">
            <div className="container-fluid"><a href="#"><img src={RiskImage}/></a></div>
          </nav>
          <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> Brenton Baker </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><a className="dropdown-item" href="#"><img src={userImage}/> Account</a></li>
              <li><a className="dropdown-item" href="#"><img src={lockImage}/> Change Password</a></li>
              <li><a className="dropdown-item" href="#"><img src={outImage}/> Logout</a></li>
            </ul>
          </div>
        </header>
        <section className="ptb-110">
          <div className="container">
            <h1>Welcome to Guardian</h1>
            <div className="addition">
              <a href="#">Dashboard</a>
              <a href="#">Insurance</a>
              <a href="#">Alerts</a>
              <a href="#">Help</a>
              {/* <a href="#">Logout <img src="./images/out.svg" alt="" /></a> */}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="score-main">
              <div className="bg-primary border-radius-30 score first-score">
                <div className="score-number">
                  {/* <figure><img src="./images/subtract.svg" alt="" /></figure> */}
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
                    <h5 className="mb-md-0">Another <br className="d-none d-md-block"/> metric</h5>
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
