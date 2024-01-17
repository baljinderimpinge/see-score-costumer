import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";

const Section = () => {
    const { instance } = useMsal();
    const [homeId,setHomeId]=useState("")
    useEffect(() => {
      
      const currentAccount = instance.getActiveAccount()
      if (currentAccount) {
        setHomeId(currentAccount.homeAccountId)
      }
  
    }, [instance])
    // const  [session, setSession] = useState(sessionStorage.getItem())
    const signOutClickHandler = (instance) => {
      const logoutRequest = {
        account: instance.getAccountByHomeId(homeId),
        mainWindowRedirectUri: "https://seescore.urtestsite.com/custumer-dashboard",
        postLogoutRedirectUri: "https://seescore.urtestsite.com/custumer-dashboard"
      }
      instance.logoutPopup(logoutRequest);
      localStorage.removeItem('isLogind')
    }
  return (
  <>
      <h1>Welcome to Guardian</h1>
      <div className="addition">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Insurance">Insurance</Link>
        <Link to="/Insurance">Alerts</Link>
        <Link to="/Insurance">Help</Link>
        <AuthenticatedTemplate>
        {<Link onClick={() => signOutClickHandler(instance)}>Logout</Link>} 
        </AuthenticatedTemplate>
       
      </div>
      </>
  )
}

export default Section