import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Style.css"
// import './pages//style.css'
import LoginButton from './components/Button/LoginButton';
import LogoutButton from './components/Button/LogoutButton';
import CustomerDashboard from './pages/Custumer_dashboard';
import AdminDashBoard from './pages/Admin_dashboard';
import {ViewCustomer} from './pages/Admin_dashboard/view_customer';

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
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal,  } from "@azure/msal-react";

function App({ maslInstance }) {


  return (
    <React.Fragment>
      <MsalProvider instance={maslInstance}>
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<LoginButton />} />


            {/* <Route element={<AuthenticatedRoute />}> */}
            <Route path="/custumer-dashboard" element={<CustomerDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />
            <Route path="/view-customer" element={< ViewCustomer />} />

            <Route path="/security-health" element={<SecurityHealth />} />
            <Route path="/asset-landscape" element={<Assetlandscape />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/help" element={<Help />} />
            <Route path="/logout" element={<Logout />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </MsalProvider>
    </React.Fragment>
  );
}

export default App;





 {/* <Route element={<AuthenticatedRoute />}> */}
            {/* <Route path="/microsoftLoing" element={<MicrosoftLoing/>} /> */}
            {/* <Route element={<MicrosoftAuthenticatedRoute/>}>
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />
            <Route path="/custumer-dashboard" element={<CustomerDashboard />} />
            <Route path="/Insurance" element={<Insurance />} />
            </Route> */}
            {/* </Route> */}
            {/* </Route> */}