import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import images from "../../assets/images/auth-logo.png"
import axios from "axios";
import { API_BASE_URL } from "../../lib/constant";
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  z-index: 1000;
`;

export const LoderPage = () => {
    const {user, isAuthenticated, getIdTokenClaims } = useAuth0();
    const navigate = useNavigate();
    const [loder,setLoder]=  useState(true)

    useEffect(() => {
        const fetchAndLogTokens = async () => {
          if (!isAuthenticated) {
            console.log("User is not authenticated");
            return;
          }
          console.log(isAuthenticated,"isAuthenticated")
          try {
            const idToken = await getIdTokenClaims();
            if (idToken.__raw) {
              let payload = {
                token: idToken.__raw
              }
              const result = await axios.post(`${API_BASE_URL}/user/login`, payload);
              console.log(result.data.data.app_metadata.role
                ,"jjjjjjjjjjjjj")
              if (result?.data?.data?.app_metadata?.role === "admin") {
                toast.success('Login successfully!', { position: toast.POSITION.TOP_RIGHT });
                localStorage.setItem("token", idToken.__raw);
                localStorage.setItem("username",result?.data?.data?.app_metadata?.name)
                localStorage.setItem("role", result?.data?.data?.app_metadata?.role);
                navigate('/admin-dashboard');
              } else {
                toast.success('Login successfully!', { position: toast.POSITION.TOP_RIGHT });
                localStorage.setItem("token", idToken.__raw);
                localStorage.setItem("username",result?.data?.data?.app_metadata?.name)
                localStorage.setItem("companyName", result.data.data.app_metadata.bussinessName);
                console.log(result.data.data.user_id)
                localStorage.setItem("userId", result.data.data.user_id);
                const data = await axios.get(`${API_BASE_URL}/user/get-azure-token/${result.data.data.user_id}`)
                console.log(data.data.data,"status  status  status;;;;;;;;;;;;;;;;;;;;;")
                if(data.data.status=== 200){
                    localStorage.setItem("azureToken",data.data.data.token)
                    localStorage.setItem("email",data.data.data.email)
                  navigate('/customer-dashboard');
                }else{
                  navigate('/microsoft-login');
                  
                }
                
              }
            }
          } catch (error) {
            console.error('Error fetching tokens:', error);
          }
        };
    
        fetchAndLogTokens();
      }, [isAuthenticated, getIdTokenClaims, navigate, user]);


    return (
        <>
          {loder?
        <> <FullPageLoader><ClipLoader size={50} color={'#000'} loading={true} /></FullPageLoader>
         <ToastContainer /> </>:null
      }
     
        </>
    )
}
