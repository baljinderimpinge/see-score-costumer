import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import images from "../../pages/Dashboard/images/auth-logo.png"
const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    const fetchAndLogTokens = async () => {
      if (!isAuthenticated) {
        console.log("User is not authenticated");
        return;
      }

      try {
        const idToken = await getIdTokenClaims();
        const accessToken = await getAccessTokenSilently();

        if (idToken.__raw) {
          localStorage.setItem("token", idToken.__raw)
          navigate('/Dashboard');
        }

      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };
    fetchAndLogTokens();
  }

  // Call the function to fetch and log tokens
  return (
    <div className="login-box">
      <figure><img src={images} alt="logo" /></figure>
      <button
        className="btn btn-primary"
        onClick={() =>
          loginWithRedirect({
            redirectUri: `${window.location.origin}`
          })
        }
      >
        Log In
      </button>
    </div>
  );
}
export default LoginButton;
