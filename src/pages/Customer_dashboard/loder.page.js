import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
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

export const LoderPage = () => {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
    const navigate = useNavigate();
    const [loder, setLoder] = useState(true);

    useEffect(() => {
        const fetchAndLogTokens = async () => {
            try {
                let localToken = localStorage.getItem("token")
               
                if(!localToken){
                    console.log(user,"jdhjdjdjdh")
                    const idToken = await getIdTokenClaims();
                    localToken=idToken?.__raw
                }
                console.log(localToken,"localToken")
                if (localToken) {
                    let payload = {
                        token: localToken,
                    };
                    const result = await axios.post(
                        `${API_BASE_URL}/user/login`,
                        payload
                    );

                    console.log(result?.data?.data,"result?.data?.data")
                    if (result?.data?.data?.role === "Admin") {
                        toast.success("Login successfully!", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                        localStorage.setItem("token", localToken);
                       
                        localStorage.setItem(
                            "username",
                            result?.data?.data?.nickname
                        );
                        localStorage.setItem(
                            "role",
                            result?.data?.data?.role
                        );
                        navigate("/admin-dashboard");
                    } else {
                        toast.success("Login successfully!", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                        //console.log(result.data?.data)
                        localStorage.setItem("token", localToken);
                        localStorage.setItem(
                            "username",
                            result?.data?.data?.nickname
                        );
                        localStorage.setItem(
                            "companyName",
                            result.data?.data?.app_metadata?.bussinessName
                        );
                        localStorage.setItem(
                            "userId",
                            result.data.data.user_id
                        );
                        localStorage.setItem("jwttoken", result?.data?.data?.jwttoken);
                        localStorage.setItem(
                            "authemail",
                            result.data?.data?.email
                        );
                        let token =  localStorage.getItem("jwttoken")
                const headers = {
                    'Authorization': `Bearer ${token}`
                }; 
                        const data = await axios.get(
                            `${API_BASE_URL}/user/get-azure-token`,
                            { headers: headers }
                        );
                        console.log("herer33333")
                        if (data.data.status === 200) {
                            localStorage.setItem(
                                "azureToken",
                                data.data.data.token
                            );
                            localStorage.setItem("email", data.data.data.email);
                            navigate("/customer-dashboard");
                        } else {
                            navigate("/microsoft-login");
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching tokens:", error);
            }
        };

        fetchAndLogTokens();
    }, [isAuthenticated, getIdTokenClaims, navigate, user]);

    return (
        <>
            {loder ? (
                <>
                    {" "}
                    <FullPageLoader>
                        <ClipLoader size={50} color={"#000"} loading={true} />
                    </FullPageLoader>
                    <ToastContainer />{" "}
                </>
            ) : null}
        </>
    );
};
