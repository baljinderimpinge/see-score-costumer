import { useMsal } from '@azure/msal-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Section = () => {
    const { instance } = useMsal();
     
    const signOutClickHandler = (instance) => {
      const logoutRequest = {
        account: instance.getAccountByHomeId("00000000-0000-0000-5932-13dd5f756a29.9188040d-6c67-4c5b-b112-36a304b66dad"),
        mainWindowRedirectUri: "http://localhost:4001/custumer-dashboard",
        postLogoutRedirectUri: "http://localhost:4001/custumer-dashboard"
      }
      instance.logoutPopup(logoutRequest);
    }
  return (
  <>
      <h1>Welcome to Guardian</h1>
      <div className="addition">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Insurance">Insurance</Link>
        <Link to="/Insurance">Alerts</Link>
        <Link to="/Insurance">Help</Link>
        <Link onClick={() => signOutClickHandler(instance)}>Logout</Link>
      </div>
      </>
  )
}

export default Section