import React from "react";
import Header from "../../components/Header";
import images from "../../assets/images/logo1.svg";
import { API_BASE_URL } from "../../lib/constant";
import Section from "../../components/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import IdImg from "../../assets/images/new/identity-shape.svg";
import styled from "@emotion/styled";

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

export const MicrosoftLogin = () => {


    const styles = {
        background: `url(${IdImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    };
 
    return (
        <>
            <Sidebar />
            <main>
                <Header />
                <div className="content-page">
                    <Section />
                    <section>
                        <h2>Get started</h2>
                        <p className="fw-semibold">
                            Select your identity provider below to get started
                        </p>
                        <div className="row mt-4 gy-4">
                            <div className="col-md-4">
                                <div className="bg-white p-5 border-radius-15 text-center">
                                    <figure>
                                        <a href={`${API_BASE_URL}/auth/signin?authid=${localStorage.getItem("userId")}`}>  <img
                                            
                                            src={images}
                                            alt=""
                                        /></a>
                                       
                                    </figure>
                                    <h5 >
                                        Microsoft Azure
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default MicrosoftLogin;
