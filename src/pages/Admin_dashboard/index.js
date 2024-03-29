import React from "react";
import Axios from 'axios';
import Sidebar from "../../components/Sidebar/Sidebar";
// import "./login";
import { useState, useEffect } from "react";
// import './login.css';
import { useNavigate } from "react-router-dom";
import Images from "../../assets/images/chain.svg"
import RiskImage from '../../assets/images/riska-logo.svg';
import userImage from '../../assets/images/user.svg';
import { API_BASE_URL } from '../../lib/constant';
import lockImage from '../../assets/images/lock.svg';
import outImage from '../../assets/images/out.svg';
import { useAuth0 } from "@auth0/auth0-react";
import HeadImg from "../../assets/images/new/guardian.svg";

function AdminDashBoard() {
  const navigate = useNavigate();
  const { logout, isAuthenticated, user } = useAuth0();

  const handleCustomersClick = () => {
    navigate("/user");
  };


  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [name, setName] = useState('')

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const handleSubmit = async () => {
    try {
      const response = await Axios.post(`${API_BASE_URL}/admin/authCustomer`, {
        businessName,
        businessAddress,
        website,
        industry,
        contactName,
        contactNumber,
        contactEmail,
      });

      if (response.status == 200) {
        setBusinessName("")
        setBusinessAddress("")
        setWebsite("")
        setIndustry("")
        setContactName("")
        setContactNumber("")
        setContactEmail("")
      }
    } catch (error) {
      console.error('API Error:', error);
    }
  };
  var isAdmin = "Yes";

  return (
    <>
      <Sidebar admin={isAdmin} />
      <main>
        <header>
          <div class="top-name">
            <img src={HeadImg} alt="" /> Guardian Admin Portal
          </div>
          <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> {name || 'admin'} </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#"><img src={userImage} /> Account</a></li>
              <li><a className="dropdown-item" href="#"><img src={lockImage} /> Change Password</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => {
                logout({ returnTo: window.location.origin });
                localStorage.clear("token");
              }} ><img src={outImage} /> Logout</a></li>
            </ul>
          </div>
        </header>
        <div className="content-page">
          <section>
            {/* <h1>Welcome to Guardian <br /> Admin Portal</h1>
            <div className="addition">
              <a href="#">Onboarding</a>
              <a href="#" onClick={handleCustomersClick}>Customers</a>
              <a href="#">Alerts</a>
            </div> */}
            <h2 className="mt-5">Customer onboarding</h2>
            <div className="bg-white border-radius-15 information">
              <h5 className="text-primary">Company information</h5>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Business Name</label>
                <div class="col-md-9">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  /></div></div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Business Address</label>
                <div class="col-md-9">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                  /></div></div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Website</label>
                <div class="col-md-9">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  /></div></div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Industry</label>
                <div class="col-md-9">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div></div>
            </div>
            <div className="bg-white border-radius-15 information">
              <h5 className="text-primary">Contact information</h5>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Contact Name</label>
                <div class="col-md-10">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  /></div></div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Contact Number</label>
                <div class="col-md-10">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  /></div></div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Contact Email</label>
                <div class="col-md-10">
                  <input
                    type="text" className="form-control"
                    placeholder=""
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  /></div></div>
            </div>
            <div className="submit-btn">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default AdminDashBoard;
