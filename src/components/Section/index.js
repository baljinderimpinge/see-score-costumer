import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import BagImg from "../../assets/images/new/bag-suite.svg"

const Section = () => {
  const { instance } = useMsal();
  const [homeId, setHomeId] = useState("")
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
  let companyname = localStorage.getItem("companyName");
  return (
    <>
      <section class="ptb-85">
        <h1 class="icon-heading"><img src={BagImg} />{companyname}</h1>
      </section>
      <AuthenticatedTemplate>
        {<Link onClick={() => signOutClickHandler(instance)}>Logout</Link>}
      </AuthenticatedTemplate>
    </>
  )
}

export default Section