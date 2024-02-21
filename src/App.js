import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./Style.css";
import LoginButton from "./components/Button/LoginButton";
import CustomerDashboard from "./pages/Customer_dashboard";
import AdminDashBoard from "./pages/Admin_dashboard";
import { ViewCustomer } from "./pages/Admin_dashboard/view_customer";

import {
    AuthenticatedAdminRoute,
    AuthenticatedRoute,
} from "./HOC/priveteRoures";
import Insurance from "./pages/Insurance";
import MicrosoftLoing from "./pages/Customer_dashboard/azrueLogin";
// import { MsalProvider } from "@azure/msal-react"; 
import SecurityHealth from "./pages/Security_health";
import Assetlandscape from "./pages/Asset_landscape";
import Logout from "./pages/Logout/Index";
import Help from "./pages/Help";
import { LoderPage } from "./pages/Customer_dashboard/loder.page";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "./lib/constant";
import { ToastContainer } from "react-toastify";


function App() {
    return (
        <React.Fragment>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<LoginButton />} />
                <Route
                    path="/fetching-customer"
                    element={<LoderPage />}
                />
                <Route element={<AuthenticatedRoute />}>
                    <Route
                        path="/microsoft-login"
                        element={<MicrosoftLoing />}
                    />
                    <Route
                        path="/customer-dashboard"
                        element={<CustomerDashboard />}
                    />

                    <Route
                        path="/security-health"
                        element={<SecurityHealth />}
                    />
                    <Route
                        path="/asset-landscape"
                        element={<Assetlandscape />}
                    />
                    <Route path="/insurance" element={<Insurance />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
                <Route element={<AuthenticatedAdminRoute />}>
                    <Route
                        path="/admin-dashboard"
                        element={<AdminDashBoard />}
                    />
                    <Route
                        path="/onboarding-customer"
                        element={<AdminDashBoard />}
                    />
                    <Route
                        path="/view-customer"
                        element={<ViewCustomer />}
                    />
                </Route>
            </Routes>
            {/* </MsalProvider> */}
        </React.Fragment>
    );
}

export default App;
