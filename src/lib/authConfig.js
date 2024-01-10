import { LogLevel } from "@azure/msal-browser";
export const msalConfig = {
    auth: {
        clientId: "cbaa1b09-522a-4a11-9aa3-7c04c0cc3498",
        authority: "https://login.microsoftonline.com/manpreetsinghimpingegmail.onmicrosoft.com",
        redirectUri: "http://localhost:4001",
    },
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false, 
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};