import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { clientId, domin } from './lib/constant';
import { msalConfig } from './lib/authConfig';
import { PublicClientApplication } from '@azure/msal-browser';
const maslInstance = new PublicClientApplication(msalConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domin}
            clientId={clientId}
            redirectUri={window.location.origin}>
            <App maslInstance={maslInstance} />
        </Auth0Provider>
    </React.StrictMode>,

);


















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { clientId, domin } from './lib/constant';
// import { msalConfig } from './lib/authConfig';
// import {PublicClientApplication,EventType} from "@azure/msal-browser"

// const maslInstance = new PublicClientApplication(msalConfig)
// if(!maslInstance.getActiveAccount() && maslInstance.getAllAccounts().length>0){
//     maslInstance.setActiveAccount(maslInstance.getAccount(0))
// }
// maslInstance.addEventCallback((event)=>{
//     console.log('currentAccount',"currentAccount")

//     if(event.eventType === EventType.LOGIN_SUCCESS && event.payload.account){
//         const account= event.payload.account
//         console.log(account,"accoutn")
//     }
// })
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Auth0Provider
//         domain={domin}
//         clientId={clientId}
//         redirectUri={window.location.origin}>
//         <App Instance={maslInstance}/>
//     </Auth0Provider>
// );