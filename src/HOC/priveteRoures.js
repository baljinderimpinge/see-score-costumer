import React from "react";
import { Navigate, Outlet } from "react-router-dom";

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
    return ;
};
