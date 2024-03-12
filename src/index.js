import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { API_BASE_URL, clientId, domin } from './lib/constant';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
// import { msalConfig } from './lib/authConfig';
// import { PublicClientApplication } from '@azure/msal-browser';
// const maslInstance = new PublicClientApplication(msalConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
const userId = localStorage.getItem("userId")


let token =  localStorage.getItem("jwttoken")
                const headers = {
                    'Authorization': `Bearer ${token}`
                }; 
var getAzureToken = async () => {
    const data = await axios.get(
        `${API_BASE_URL}/user/get-azure-token`,
        { headers: headers }
    );
    console.log("herer11111")
    if (data.data.status === 200) {
        localStorage.setItem(
            "azureToken",
            data.data.data.token
        );
        localStorage.setItem("email", data.data.data.email);
        // navigate("/customer-dashboard");
    } else {
        // navigate("/microsoft-login");
    }

}
if (localStorage.getItem("userId")) {
    getAzureToken()
}
// useEffect(() => {
   
// }, [])

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