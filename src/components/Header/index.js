import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Images from "../../assets/images/chain.svg"
import RiskImage from '../../assets/images/riska-logo.svg';
import userImage from '../../assets/images/user.svg';
import lockImage from '../../assets/images/lock.svg';
import outImage from '../../assets/images/out.svg';


import MainImg from "../../assets/images/new/guardian.svg"
import UserImg from "../../assets/images/new/user.svg"
import LockImg from "../../assets/images/new/lock.svg"
import OutImg from "../../assets/images/new/out.svg"
import UserImgIcon from "../../assets/images/new/user-icon.svg"


import { useAuth0 } from '@auth0/auth0-react';
import { useMsal } from '@azure/msal-react';

const Header = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const [name, setName] = useState(localStorage.getItem("username"))
  const { instance } = useMsal();

  // useEffect(() => {
  //   const currentAccount = instance.getActiveAccount()
  //   if (currentAccount) {
  //     console.log(currentAccount.name, "kkkkkkkkkkkkkkkkkk")
  //     setName(currentAccount.name)
  //   }else if (user) {
  //     setName(user.name);
  //   }

  // }, [instance, user])
  // useEffect(() => {
  //   if (user) {
  //     setName(user.name);
  //   }
  // }, [user]);
  return (
    <>
      <header>
        <div className="top-name">
          <img src={MainImg} alt="" /> Guardian
        </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle d-none d-xl-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> {name}</button>
          <div className="d-block d-xl-none" data-bs-toggle="dropdown" aria-expanded="false"><img src={UserImgIcon} alt="" /></div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#"><img src={UserImg} alt="" /> Account</a></li>
            <li><a className="dropdown-item" href="#"><img src={LockImg} alt="" /> Change Password</a></li>
            <li onClick={() => {
              logout({ returnTo: window.location.origin });
              localStorage.clear("token");
            }}> <a className="dropdown-item" href="#"><img src={OutImg} alt="" /> Logout</a></li>
          </ul>
        </div>
       
      </header>
    </>

  )
}

export default Header