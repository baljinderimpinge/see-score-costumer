import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../lib/constant";

import Section from "../../components/Section";
import Sidebar from "../../components/Sidebar/Sidebar";
import SubImg from "../../assets/images/new/subtract.svg";
import IdImg from "../../assets/images/new/identity-shape.svg";


import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

import ApexChart from "../../components/chart";
import { getAzureToken } from "../../HOC/getToken";

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

export const CustomerDashboard = () => {

    const [accessTokenStatus, setAccessTokenStatus] = useState(false);
    const [userRiskPolicy, setUserRiskPolicy] = useState();
    const [findingCount, setFindingCount] = useState();
    // const [azureToken, setAzureToken] = useState(
       
    // );
    const [loder, setLoder] = useState(false);
    const [lastUpdate, setLastUpdate] = useState();
    
    const styles = {
        background: `url(${IdImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    };

 
    useEffect(() => {
        getScoreData();
    }, []);

    const getScoreData = async () => {
     
        try {
            await getAzureToken()
            const azureToken=  localStorage.getItem("azureToken")
            const email=  localStorage.getItem("email")

            //console.log(azureToken,"azureToken")
            const payload = {
                token: azureToken,
                email:email
            };
            const data = await axios.post(
                `${API_BASE_URL}/user/getScoreData`,
                payload
            );

            console.log(data, "************* data ***************")
            setUserRiskPolicy(data?.data?.data[0]);
            setFindingCount(data?.data?.findingCount);
            setLoder(true);
            setAccessTokenStatus(true);
        } catch (error) {
            if (error.response.data.status === 401) {
            
                setLoder(true);
                setAccessTokenStatus(false);
            }
        }
    };

    const getLastUpdate = (data) => {
        setLastUpdate(data);
    };

    return (
        <>
            <>
                <Sidebar />
                <main>
                    <Header />
                    <div className="content-page">
                        <ToastContainer />
                        <Section />

                        <h2 className="mb-4">Risk dashboard</h2>
                        {loder ? (
                            <>
                                {accessTokenStatus ? (
                                    <>
                                        <section>
                                            <div className="score-main">
                                                <div
                                                    className="bg-white border-radius-30 score first-score"
                                                    style={styles}
                                                >
                                                    <div className="score-number">
                                                        <figure>
                                                            <img
                                                                src={SubImg}
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <h5>Identity Score</h5>
                                                        <span className="percentage-num">
                                                            {userRiskPolicy?.scoreInPercentage ||
                                                                0}
                                                            <sub>%</sub>
                                                        </span>
                                                        <div className="readmore text-center mt-4">
                                                            <a href="#">
                                                                Learn more{" "}
                                                                <i className="fa-solid fa-chevron-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="second-score">
                                                    <div className="bg-white border-radius-30 score">
                                                        <div className="score-number">
                                                            <h5>
                                                                Active users
                                                            </h5>
                                                            <div className="con">
                                                                <div className="percentage-num">
                                                                    {userRiskPolicy?.total ||
                                                                        0}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white border-radius-30 score">
                                                        <Link to="/security-health">
                                                            <div className="score-number">
                                                                <h5>
                                                                    Open
                                                                    findings
                                                                </h5>
                                                                <div className="con">
                                                                    <div className="percentage-num">
                                                                        {findingCount ||
                                                                            0}
                                                                    </div>
                                                                    <div className="readmore text-center mt-4">
                                                                        
                                                                            View
                                                                            security
                                                                            health{" "}
                                                                            <i className="fa-solid fa-chevron-right"></i>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="bg-white border-radius-30 score last">
                                                        <div className="score-number text-start chart">
                                                            <h5>
                                                                Identity score
                                                                trend
                                                            </h5> 
                                                            <ApexChart
                                                                getLastUpdate={
                                                                    getLastUpdate
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section>
                                            <div className="update-date">
                                                <span>
                                                    Last updated - {lastUpdate},
                                                </span>
                                            </div>
                                        </section>
                                    </>
                                ) : (
                                    <p>Your account is not authorized!</p>
                                )}
                            </>
                        ) : (
                            <>
                                {" "}
                                <FullPageLoader>
                                    <ClipLoader size={50} color={"#000"} />
                                </FullPageLoader>
                                <ToastContainer />{" "}
                            </>
                        )}
                    </div>
                </main>
            </>
        </>
    );
};

export default CustomerDashboard;
