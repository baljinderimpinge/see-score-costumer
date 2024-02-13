// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from 'react-router-dom';
// import images from "../../assets/images/auth-logo.png"
// import axios from "axios";
// import { API_BASE_URL } from "../../lib/constant";
// import styled from '@emotion/styled';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ClipLoader } from "react-spinners";

// const FullPageLoader = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(255, 255, 255, 0.8); / semi-transparent white background /
//   z-index: 1000;
// `;

// const LoginButton = () => {
//   const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   console.log(isAuthenticated, "isAuthenticated")
//   if (isAuthenticated) {
//     const fetchAndLogTokens = async () => {
//       if (!isAuthenticated) {
//         console.log("User is not authenticated");
//         return;
//       }
//       try {
//         const idToken = await getIdTokenClaims();
//         if (idToken.__raw) {
//           let payload = {
//             token: idToken.__raw
//           }

//           const resuilt = await axios.post(`${API_BASE_URL}/user/login`, payload)
//           if (user?.email === "adminseescore@gmail.com") {

//             setTimeout(() => {
//               setLoading(false)
//               toast.success('Login  successfully!', { position: toast.POSITION.TOP_RIGHT });
//               localStorage.setItem("token", idToken.__raw)
//               navigate('/admin-dashboard');
//             }, 2000)
//           } else {
//             console.log("----+++++")
//             setTimeout(() => {
//               setLoading(false)
//               toast.success('Login  successfully!', { position: toast.POSITION.TOP_RIGHT });
//               localStorage.setItem("token", idToken.__raw)
//               console.log(resuilt.data.data.app_metadata.bussinessName,"resuilt.data.data.app_metadata.bussinessName")
//               localStorage.setItem("companyName",resuilt.data.data.app_metadata.bussinessName )
//               console.log(resuilt, "resuilt", idToken)
//               navigate('/custumer-dashboard');
//             }, 2000)
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching tokens:', error);
//       }
//     };
//     fetchAndLogTokens();
//   }

//   // Call the function to fetch and log tokens
//   return (
//     <div className="login-box">
//       <ToastContainer />
//       {loading && <FullPageLoader><ClipLoader size={50} color={'#000'} loading={loading} /></FullPageLoader>}
//       <figure><img src={images} alt="logo" /></figure>
//       <button
//         className="btn btn-primary login-button"
//         onClick={() =>
//           loginWithRedirect({
//             redirectUri: `${window.location.origin}`
//           })
//         }
//       >
//         Log In
//       </button>
//     </div>
//   );
// }
// export default LoginButton;

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import images from "../../assets/images/auth-logo.png";
import axios from "axios";
import { API_BASE_URL } from "../../lib/constant";
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
    const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims } =
        useAuth0();
    const navigate = useNavigate();
    const [loder, setLoder] = useState(true);
    // useEffect(() => {
    //     const fetchAndLogTokens = async () => {
    //         if (!isAuthenticated) {
    //             console.log("User is not authenticated");
    //             return;
    //         }
    //         console.log(isAuthenticated, "isAuthenticated");
    //         try {
    //             const idToken = await getIdTokenClaims();
    //             if (idToken.__raw) {
    //                 let payload = {
    //                     token: idToken.__raw,
    //                 };
    //                 const result = await axios.post(
    //                     `${API_BASE_URL}/user/login`,
    //                     payload
    //                 );
    //                 console.log(result, "result   result");
    //                 // setLoading(false);
    //                 if (result?.data?.data?.app_metadata?.role === "Admin") {
    //                     toast.success("Login successfully!", {
    //                         position: toast.POSITION.TOP_RIGHT,
    //                     });
    //                     localStorage.setItem("token", idToken.__raw);
    //                     navigate("/admin-dashboard");
    //                 } else {
    //                     toast.success("Login successfully!", {
    //                         position: toast.POSITION.TOP_RIGHT,
    //                     });
    //                     localStorage.setItem("token", idToken.__raw);
    //                     localStorage.setItem(
    //                         "companyName",
    //                         result.data.data.app_metadata.bussinessName
    //                     );
    //                     navigate("/customer-dashboard");
    //                 }
    //             }
    //         } catch (error) {
    //             console.error("Error fetching tokens:", error);
    //         }
    //     };

    //     fetchAndLogTokens();
    // }, [isAuthenticated, getIdTokenClaims, navigate, user]);

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
    console.log(window.location.origin, "window.location.origin");
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
