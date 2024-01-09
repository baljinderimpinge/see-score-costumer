import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticatedRoute = () => {
  // const { isAuthenticated } = useAuth0();
  // console.log(isAuthenticated)
  const token = localStorage.getItem("token")
  return token ? <Outlet /> : <Navigate to="/login" />;
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  // return <Route {...rest} element={element} />;
};

export default AuthenticatedRoute;
