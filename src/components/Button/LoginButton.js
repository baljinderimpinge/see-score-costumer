import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const FullPageLoader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(
        255,
        255,
        255,
        0.8
    ); /* semi-transparent white background */
    z-index: 1000;
`;

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } =
        useAuth0();
    

    if (isAuthenticated) {
        return (
            <React.Fragment>
                <FullPageLoader>
                    <ClipLoader size={50} color={"#000"} loading={true} />
                </FullPageLoader>
                <ToastContainer />
            </React.Fragment>
        );
    }

    // Directly show Auth0 login page
    loginWithRedirect({
        redirectUri: `${window.location.origin}/fetching-customer`,
    });

    return (
        <FullPageLoader>
            <ClipLoader size={50} color={"#000"} loading={true} />
        </FullPageLoader>
    );
};

export default LoginButton;
