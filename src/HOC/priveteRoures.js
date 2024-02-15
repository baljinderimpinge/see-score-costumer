import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

export const AuthenticatedRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/" />;
};

export const AuthenticatedAdminRoute = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    return token && role == "Admin" ? <Outlet /> : <Navigate to="/" />;
};

export const MicrosoftAuthenticatedRoute = () => {
    const isAuthenticated = useIsAuthenticated();
    return isAuthenticated ? <Outlet /> : <Navigate to="/customer-dashboard" />;
};
