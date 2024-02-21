import React, { useState } from 'react'
import MainImg from "../../assets/images/new/guardian.svg"
import UserImg from "../../assets/images/new/user.svg"
import LockImg from "../../assets/images/new/lock.svg"
import OutImg from "../../assets/images/new/out.svg"
import UserImgIcon from "../../assets/images/new/user-icon.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth0 } from '@auth0/auth0-react';
import { API_BASE_URL } from '../../lib/constant'
import axios from 'axios'

const Header = () => {
  const { logout } = useAuth0();
  const [name, setName] = useState(localStorage.getItem("username"))
  const show = () => {
    toast.success("An email has been sent to reset your password, please check!", {
      position: toast.POSITION.TOP_RIGHT,
  });
};
  const changePasswordFun = async () => {
    let useremail = localStorage.getItem("authemail");
    try {
      const payload = {
          email: useremail,
      };
      const response = await axios.post(
          `${API_BASE_URL}/user/changepassword`,
          payload
      );
      console.log(response.data); 
  } catch (error) {
      console.error('Error occurred:', error);
  }
};
const handleClick = () => {
  console.log("-=-=-=-=-")
  changePasswordFun();
  toast.success("An email has been sent to reset your password, please check!", {
    position: toast.POSITION.TOP_RIGHT,
});
  // show();
};
  return (
    <>
    <ToastContainer/>
      <header>
        <div className="top-name">
          <img src={MainImg} alt="" /> Guardian
        </div>
        <div className="dropdown">
          <button className="btn dropdown-toggle d-none d-xl-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> {name}</button>
          <div className="d-block d-xl-none" data-bs-toggle="dropdown" aria-expanded="false"><img src={UserImgIcon} alt="" /></div>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#" ><img src={UserImg} alt="" /> Account</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleClick}><img src={LockImg} alt="" /> Change Password</a></li>
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