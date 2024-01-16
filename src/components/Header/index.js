import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Images from "../../assets/images/chain.svg"
import RiskImage from '../../assets/images/riska-logo.svg';
import userImage from '../../assets/images/user.svg';
import lockImage from '../../assets/images/lock.svg';
import outImage from '../../assets/images/out.svg';
import { useAuth0 } from '@auth0/auth0-react';
import { useMsal } from '@azure/msal-react';

const Header = () => {
  const { logout, isAuthenticated } = useAuth0();
  const [name, setName] = useState('')
  const { instance } = useMsal();

  useEffect(() => {
    const currentAccount = instance.getActiveAccount()
    if (currentAccount) {
      console.log(currentAccount.name, "kkkkkkkkkkkkkkkkkk")
      setName(currentAccount.name)
    }

  }, [instance])
  return (
    <>
      <header>
        <div className="chain"> <img src={Images} /></div>
        <nav className="navbar-expand-lg">
          <div className="container-fluid"><a href="#"><img src={RiskImage} /></a></div>
        </nav>
        <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> {name || 'Tanant'} </button>
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
    </>

  )
}

export default Header