import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from '../../lib/authConfig';
import { loginRequest } from '../../lib/authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
    msalInstance.setActiveAccount(msalInstance.getAccountByUsername(msalInstance.getAllAccounts()[0].username));
}

msalInstance.addEventCallback((event) => {
    switch (event.eventType) {
        case EventType.LOGIN_SUCCESS:
            console.log('Logged in account:', event.payload.account);
            break;
        case EventType.LOGIN_FAILURE:
            console.log('Login failed:', event.error);
            break;
        default:
            break;
    }
});

export { msalInstance, loginRequest };
