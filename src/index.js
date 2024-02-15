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