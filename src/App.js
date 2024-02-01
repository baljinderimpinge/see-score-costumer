import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Style.css"
// import './pages//style.css'
import LoginButton from './components/Button/LoginButton';
import LogoutButton from './components/Button/LogoutButton';
import CustomerDashboard from './pages/Custumer_dashboard';
import AdminDashBoard from './pages/Admin_dashboard';

import { AuthenticatedRoute, MicrosoftAuthenticatedRoute } from './HOC/priveteRoures';  // Correct the import path
import Insurance from './pages/Insurance';
import MicrosoftLoing from './pages/Login/microsoftLoing';
import { AuthenticatedTemple, EventType } from "@azure/msal-browser"
import { MsalProvider } from '@azure/msal-react';
import SecurityHealth from './pages/Security_health';
import Assetlandscape from './pages/Asset_landscape';
import Sidebar from './components/CompanyName/CompanyName';
import Logout from './pages/Logout/Index';
import Help from './pages/Help';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { API_BASE_URL } from "./lib/constant";
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";


function App({ maslInstance }) {

  const { isLoading, isAuthenticated, getIdTokenClaims, error, user, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  const fetchAndLogTokens = async () => {
    if (!isAuthenticated) {
      console.log("User is not authenticated");
      return;
    }
    try {
      const idToken = await getIdTokenClaims();
      if (idToken.__raw) {
        let payload = {
          token: idToken.__raw
        }
        const resuilt = await axios.post(`${API_BASE_URL}/user/login`, payload)
      }
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };
  fetchAndLogTokens();

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }


  return (
    <React.Fragment>
      <MsalProvider instance={maslInstance}>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<LoginButton />} />
            <Route element={<AuthenticatedRoute />}>
              <Route path="/custumer-dashboard" element={<CustomerDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashBoard />} />
              <Route path="/security-health" element={<SecurityHealth />} />
              <Route path="/asset-landscape" element={<Assetlandscape />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/help" element={<Help />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MsalProvider>
    </React.Fragment>
  );
}

export default App;