import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { clientId, domin } from './lib/constant';
import { msalConfig } from './lib/authConfig';

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain={domin}
        clientId={clientId}
        redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
);