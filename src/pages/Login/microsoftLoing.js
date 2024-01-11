import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
import { loginRequest,msalConfig } from '../../lib/authConfig';
import { useNavigate } from 'react-router-dom';
import Dashboard from "../Dashboard";
import { useEffect } from "react";
  import {PublicClientApplication,EventType} from "@azure/msal-browser"

 const WrapedView = () => {
    console.log("hello")
    const { instance,accounts,inProgress } = useMsal();
    const navigate = useNavigate();
    const activeAccount = instance.getActiveAccount();
    console.log(accounts,inProgress,"accounts,inProgress")
    useEffect(() => {
        if (activeAccount) {
            navigate('/Dashboard');
        }
    }, [activeAccount, navigate]);

    const handleRedirect = () => {
        instance.loginRedirect({
            ...loginRequest,
            prompt: "create",

        });
    };

    if (activeAccount) {
        navigate('/Dashboard'); 
    }

    return (
        <div className='app'>
        
            <UnauthenticatedTemplate>
                <button onClick={handleRedirect}>
                    Sign In
                </button>
            </UnauthenticatedTemplate>
        </div>
    );
};

const MicrosoftLogin = ({ Instance }) => {
    const maslInstance = new PublicClientApplication(msalConfig)

    return (
        <MsalProvider instance={maslInstance}>
            <WrapedView />
        </MsalProvider>
    );
};

export default MicrosoftLogin;
