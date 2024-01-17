import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Section = () => {
    const { instance } = useMsal();
    const [homeId,setHomeId]=useState("")
    const [currentAcc, setCurrentAc]=useState("")
    //const  currentAccount = instance.getActiveAccount()
    useEffect(() => {
      const currentAccount = instance.getActiveAccount()
      if (currentAccount) {
        console.log(currentAccount.homeAccountId,"--------")
        setHomeId(currentAccount.homeAccountId)
        //console.log(currentAccount.name, "kkkkkkkkkkkkkkkkkk")
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
    }
  return (
  <>
      <h1>Welcome to Guardian</h1>
      <div className="addition">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Insurance">Insurance</Link>
        <Link to="/Insurance">Alerts</Link>
        <Link to="/Insurance">Help</Link>
        {homeId?<Link onClick={() => signOutClickHandler(instance)}>Logout</Link>:null} 
      </div>
      </>
  )
}

export default Section