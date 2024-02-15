import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { clientId, domin } from './lib/constant';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Auth0Provider
            domain={domin}
            clientId={clientId}
            redirectUri={window.location.origin}>
            <BrowserRouter>

                <App />
            </BrowserRouter>

        </Auth0Provider>
    </React.StrictMode>,

);