import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import { loginRequest, msalConfig } from '../../lib/authConfig';
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalInstance } from './msalSetup';
import { useEffect } from "react";


const MicrosoftLogin = () => {

    const { instance } = useMsal();

    useEffect(()=>{
        const currentAccount = instance.getActiveAccount()
        if(currentAccount){
            console.log(currentAccount.name,"kkkkkkkkkkkkkkkkkk")
        }
   
    },[instance])
    const handleRedirect = () => {
        try {
            instance.loginRedirect(loginRequest);
        } catch (error) {
            console.error("Error during login redirect:", error);
        }
    };
    return (
        <>
        <AuthenticatedTemplate>
        <section class="ptb-110">
      <div class="container">
        <h1>Welcome to Guardian</h1>
        <div class="addition"><a href="#">Dashboard</a><a href="#">Insurance</a><a href="#">Alerts</a><a href="#">Help</a><a href="#">Logout <img src="images/out.svg" alt=""/></a></div>
        <h2 class="mt-5">Let’s connect to your Identity Provider</h2>
        <p class="fw-normal">Click your identity provider below to get started. You’ll need to be a Global Administrator to connect to the platform.</p>
        
        <div class="row mt-4 gy-4">
            <div class="col-md-4">
                <div class="bg-white p-5 border-radius-15 text-center">
                  <figure><img src="images/logo1.svg" alt=""/></figure>
                  <h5>Microsoft Azure</h5>
                </div>
            </div>
            <div class="col-md-4">
              <div class="bg-white p-5 border-radius-15 text-center">
                <figure><img src="images/logo1.svg" alt=""/></figure>
                <h5>Microsoft Azure</h5>
              </div>
          </div>
          <div class="col-md-4">
            <div class="bg-white p-5 border-radius-15 text-center">
              <figure><img src="images/logo1.svg" alt=""/></figure>
              <h5>Microsoft Azure</h5>
            </div>
        </div>
        </div>
      
      </div>
    </section>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>
            Sign In
        </button>
        </UnauthenticatedTemplate>
 
        </>

    );
};

export default MicrosoftLogin;

