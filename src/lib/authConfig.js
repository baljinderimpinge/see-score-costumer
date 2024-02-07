import { LogLevel } from "@azure/msal-browser";
import { AUTHORITY, MICROSOFT_CLIENT_ID, REDIRECT_URL } from "./constant";
export const msalConfig = {
    auth: {
        clientId: MICROSOFT_CLIENT_ID,
        authority: 'https://login.microsoftonline.com/common',
        redirectUri: REDIRECT_URL,

    },
    cache: {
        cacheLocation: "localStorage",
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
    scopes: ["User.Read", "SecurityEvents.ReadWrite.All",
        "SecurityEvents.Read.All", "Directory.Read.All", "Directory.ReadWrite.All",
        "DirectoryRecommendations.Read.All", "DirectoryRecommendations.ReadWrite.All"]
};