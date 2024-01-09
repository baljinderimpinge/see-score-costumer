import React from 'react'
import { Link } from 'react-router-dom';
import Images from "../../assets/images/chain.svg"
import RiskImage from '../../assets/images/riska-logo.svg';  
import userImage from '../../assets/images/user.svg';  
import lockImage from '../../assets/images/lock.svg'; 
import outImage from '../../assets/images/out.svg'; 
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        <>
          <header>
        <div className="chain"> <img src={Images} /></div>
        <nav className="navbar-expand-lg">
          <div className="container-fluid"><a href="#"><img src={RiskImage} /></a></div>
        </nav>
        <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> Brenton Baker </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#"><img src={userImage} /> Account</a></li>
            <li><a className="dropdown-item" href="#"><img src={lockImage} /> Change Password</a></li>
            <li onClick={() => {
              logout({ returnTo: window.location.origin });
              localStorage.clear("token");
            }}>
              <a className="dropdown-item" href="#"><img src={outImage} /> Logout</a></li>
          </ul>
        </div>
      </header>
      <section className="ptb-110">
            <div className="container">
                <h1>Welcome to Guardian</h1>
                <div className="addition">
                    <Link activeClassName="active" to="/Dashboard">Dashboard</Link>
                    <Link to="/Insurance">Insurance</Link>
                    <Link to="/Insurance">Alerts</Link>
                    <Link to="/Insurance">Help</Link>
                </div>
            </div>
        </section >
        </>
      
    )
}

export default Header