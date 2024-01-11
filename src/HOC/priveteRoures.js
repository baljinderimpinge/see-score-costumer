import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
// import { useMsal } from "@azure/msal-react";

export const AuthenticatedRoute = () => {
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/loing" />
};

export const MicrosoftAuthenticatedRoute = () => {
  const { instance } = useMsal();
  const currentAccount = instance.getActiveAccount();
  console.log(currentAccount,"currentAccount")
  
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated, "isAuthenticated")
  return isAuthenticated == false ? <Outlet /> : <Navigate to="/microsoftLoing" />
};

