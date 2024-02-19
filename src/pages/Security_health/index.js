import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import IconImg from "../../assets/images/new/identity-icon.svg";
import IconImg1 from "../../assets/images/new/bag-suite.svg";
import arrow from "../../assets/images/new/white-arrow.svg";
import securitycheck from "../../assets/images/new/security-checklist.svg";

import axios from "axios";
import { API_BASE_URL } from "../../lib/constant";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";
import styled from "@emotion/styled";
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
const SecurityHealth = () => {
    const [showTogel, setShowtoggel] = useState([]);
    const [recomendationData, setRecomendationData] = useState();
    const [securityData, setSecurityData] = useState();
    const [loder, setLoder] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAzureToken()
                const email = localStorage.getItem("email");
                const payload = {
                    email: email,
                };

                const response = await axios.post(
                    `${API_BASE_URL}/user/recomen`,
                    payload
                );

                const response1 = await axios.post(
                    `${API_BASE_URL}/user/getsecurity`,
                    payload
                );
                setRecomendationData(response.data.data);
                setSecurityData(response1.data.data);
                setLoder(true);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoder(true);
            }
        };

        fetchData();
    }, []);

    const show = (itemId) => {
        if (showTogel.includes(itemId)) {
            setShowtoggel(showTogel.filter((id) => id !== itemId));
        } else {
            setShowtoggel([...showTogel, itemId]);
        }
    };
    let companyname = localStorage.getItem("companyName");
    const securityStatusChangeFun = async (securityid, email) => {
        const secPayload = {
            email: email,
            securityChecklistId: securityid,
            status: 2,
        };

        const payload = {
            email: email,
        };
        const response1 = await axios.post(
            `${API_BASE_URL}/user/updatesecurity`,
            secPayload
        );
        const response2 = await axios.post(
            `${API_BASE_URL}/user/getsecurity`,
            payload
        );
        setSecurityData(response2.data.data);
    };
    return (
        <>
            <Sidebar />
            <main>
                <Header />
                <div className="content-page">
                    <section className="ptb-85">
                        <h1 className="icon-heading">
                            <img src={IconImg1} />
                            {companyname}
                        </h1>
                    </section>
                    <section>
                        <h2 className="mb-4 icon-heading">
                            <img src={IconImg} alt="" />
                            Identity recommendations
                        </h2>
                        {loder ? (
                            <div className="accordion" id="accordionExample">
                                {recomendationData &&
                                    recomendationData.length > 0 &&
                                    recomendationData.map((item, index) => {
                                        const accordionId = `accordion-${item.id}-${index}`; // Unique identifier
                                        const collapseId = `collapse-${item.id}-${index}`; // Unique identifier
                                        return (
                                            <div
                                                key={accordionId}
                                                className="accordion-item"
                                            >
                                                <h2
                                                    className="accordion-header"
                                                    id={accordionId}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            show(item.id)
                                                        }
                                                        className={
                                                            showTogel.includes(
                                                                item.id
                                                            )
                                                                ? "accordion-button"
                                                                : "accordion-button collapsed"
                                                        }
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={showTogel.includes(
                                                            item.id
                                                        )}
                                                        aria-controls={
                                                            collapseId
                                                        }
                                                    >
                                                        <span className="txt">
                                                            {item?.displayName}
                                                        </span>{" "}
                                                        <span
                                                            className={
                                                                item.priority ==
                                                                "low"
                                                                    ? "btn btn-yellow"
                                                                    : item.priority ==
                                                                      "medium"
                                                                    ? "btn btn-orange"
                                                                    : "btn btn-red"
                                                            }
                                                        >
                                                            {item?.priority}
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={
                                                        showTogel.includes(
                                                            item.id
                                                        )
                                                            ? "accordion-collapse collapse show"
                                                            : "accordion-collapse collapse"
                                                    }
                                                    aria-labelledby={
                                                        accordionId
                                                    }
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            <b>Insights</b>
                                                            <br />
                                                            {item?.insights}
                                                            <br />
                                                            <br />
                                                        </p>

                                                        <p>
                                                            {" "}
                                                            <b>Description</b>
                                                            <br />
                                                            {item?.benefits}
                                                            <br />
                                                            <br />
                                                        </p>

                                                        <b>Resolution steps</b>
                                                        {item &&
                                                            item?.actionSteps
                                                                ?.length > 0 &&
                                                            item.actionSteps.map(
                                                                (
                                                                    value,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <>
                                                                            <p>
                                                                                {
                                                                                    value.text
                                                                                }
                                                                            </p>
                                                                            {value
                                                                                ?.actionUrl
                                                                                ?.url ? (
                                                                                <>
                                                                                    <a
                                                                                        href={
                                                                                            value
                                                                                                ?.actionUrl
                                                                                                ?.url
                                                                                        }
                                                                                        className="btn btn-primary icon-btn  mb-3"
                                                                                        target="blank"
                                                                                    >
                                                                                        Action
                                                                                        now{" "}
                                                                                        <img
                                                                                            src={
                                                                                                arrow
                                                                                            }
                                                                                            alt=""
                                                                                        />
                                                                                    </a>
                                                                                </>
                                                                            ) : null}
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        ) : (
                            <>
                                {" "}
                                <FullPageLoader>
                                    <ClipLoader
                                        size={50}
                                        color={"#000"}
                                        loading={true}
                                    />
                                </FullPageLoader>
                                <ToastContainer />{" "}
                            </>
                        )}
                        <h2 className="mb-4 icon-heading mt-115">
                            <img  src={securitycheck} alt="" />
                            Security checklist
                        </h2>
                        {loder ? (
                            <div className="accordion" id="accordionExample">
                                {securityData &&
                                    securityData.length > 0 &&
                                    securityData.map((item, index) => {
                                        const accordionId = `accordion-${item.id}-${index}`; // Unique identifier
                                        const collapseId = `collapse-${item.id}-${index}`; // Unique identifier
                                        return (
                                            <div
                                                key={accordionId}
                                                className="accordion-item"
                                            >
                                                <h2
                                                    className="accordion-header"
                                                    id={accordionId}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            show(item.id)
                                                        }
                                                        className={
                                                            showTogel.includes(
                                                                item.id
                                                            )
                                                                ? "accordion-button"
                                                                : "accordion-button collapsed"
                                                        }
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={showTogel.includes(
                                                            item.id
                                                        )}
                                                        aria-controls={
                                                            collapseId
                                                        }
                                                    >
                                                        <span className="txt">
                                                            {item?.title}
                                                        </span>
                                                        <span
                                                            className={
                                                                item.status == 1
                                                                    ? "btn btn-red"
                                                                    : "btn btn-primary"
                                                            }
                                                        >
                                                            {item?.status == 1
                                                                ? "Pending"
                                                                : "Completed"}
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={
                                                        showTogel.includes(
                                                            item.id
                                                        )
                                                            ? "accordion-collapse collapse show"
                                                            : "accordion-collapse collapse"
                                                    }
                                                    aria-labelledby={
                                                        accordionId
                                                    }
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        <p>
                                                            <b>Description</b>
                                                            <br />
                                                            {item?.description}
                                                        </p>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary icon-btn"
                                                            onClick={() =>
                                                                securityStatusChangeFun(
                                                                    item.securityid,
                                                                    item.email
                                                                )
                                                            }
                                                        >
                                                            Mark as complete{" "}
                                                            <img
                                                                src="images/white-arrow.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        ) : (
                            <>
                                {" "}
                                <FullPageLoader>
                                    <ClipLoader
                                        size={50}
                                        color={"#000"}
                                        loading={true}
                                    />
                                </FullPageLoader>
                                <ToastContainer />
                            </>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default SecurityHealth;
