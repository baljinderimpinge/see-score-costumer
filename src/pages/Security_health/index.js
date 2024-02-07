import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import IconImg from "../../assets/images/new/identity-icon.svg"
import IconImg1 from "../../assets/images/new/bag-suite.svg"
import arrow from "../../assets/images/new/white-arrow.svg"

import axios from "axios";
import { API_BASE_URL } from "../../lib/constant";
import { ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";
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
  background: rgba(255, 255, 255, 0.8); /* semi-transparent white background */
  z-index: 1000;
`;
const SecurityHealth = () => {
    const [showTogel, setShowtoggel] = useState([])
    const [recomendationData, setRecomendationData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const email = localStorage.getItem("email")
                const payload = {
                    email: email
                }

                const response = await axios.post(`${API_BASE_URL}/user/recomen`, payload);
                console.log(response.data.data);
                setRecomendationData(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Clean-up function can be optionally defined if needed
        // return () => {
        //   clean-up code here
        // };
    }, []);

    const show = (itemId) => {
        if (showTogel.includes(itemId)) {
            setShowtoggel(showTogel.filter(id => id !== itemId));
        } else {
            setShowtoggel([...showTogel, itemId]);
        }
    }
    let companyname = localStorage.getItem("companyName");
    return (<>
        <Sidebar />
        <main>
            <Header />
            <div class="content-page">
                <section class="ptb-85">
                    <h1 class="icon-heading"><img src={IconImg1} />{companyname}</h1>
                </section>
                <section>
                    <h2 class="mb-4 icon-heading"><img src={IconImg} alt="" />Identity recommendations</h2>
                    {recomendationData && recomendationData.length > 0 ?
                        <div className="accordion" id="accordionExample">
                            {recomendationData && recomendationData.length > 0 && recomendationData.map((item, index) => {
                                const accordionId = `accordion-${item.id}-${index}`; // Unique identifier
                                const collapseId = `collapse-${item.id}-${index}`; // Unique identifier
                                return (
                                    <div key={accordionId} className="accordion-item">
                                        <h2 className="accordion-header" id={accordionId}>
                                            <button onClick={() => show(item.id)} className={showTogel.includes(item.id) ? "accordion-button" : 'accordion-button collapsed'} type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`} aria-expanded={showTogel.includes(item.id)} aria-controls={collapseId}>
                                                <span className="txt">{item?.displayName}</span>  <span
                                                    className={item.priority == "low" ? "btn btn-yellow" : item.priority == "medium" ? "btn btn-orange" : "btn btn-red"}
                                                >{item?.priority}</span>
                                            </button>
                                        </h2>
                                        <div id={collapseId} className={showTogel.includes(item.id) ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={accordionId} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p><b>Insights</b><br />
                                                    {item?.insights}<br /><br /></p>

                                                <p> <b>Description</b><br />
                                                    {item?.benefits}
                                                    <br /><br />
                                                </p>

                                                <b>Resolution steps</b>
                                                {item && item?.actionSteps?.length > 0 && item.actionSteps.map((value, index) => {
                                                    return (
                                                        <>
                                                            <p>

                                                                {value.text}</p>

                                                            <a href={value?.actionUrl?.url} class="btn btn-primary icon-btn  mb-3" target="blank">Active <img src={arrow} alt="" /></a>

                                                        </>

                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        : <> <FullPageLoader><ClipLoader size={50} color={'#000'} loading={true} /></FullPageLoader>
                            <ToastContainer /> </>}


                    <h2 class="mb-4 icon-heading mt-115"><img src="images/security-checklist.svg" alt="" />Security checklist</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                                    <span class="txt">Enforce complex passwords</span> <span class="btn btn-primary">Critical</span>
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse show" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingfive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                    <span class="txt">Enable Multi-Factor Authentication for all accounts

                                    </span>  <span class="btn btn-red">Pending</span>
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingsix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                    <span class="txt">Enforce complex passwords</span> <span class="btn btn-red">Pending</span>
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingseven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                    <span class="txt">Enable email filtering</span> <span class="btn btn-red">Pending</span>
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingeight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                    <span class="txt">Data backup scheme</span> <span class="btn btn-red">Pending</span>
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>


                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingnine">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                    <span class="txt">Security Awareness Training for staff</span> <span class="btn btn-red">Pending</span>
                                </button>
                            </h2>
                            <div id="collapsenine" class="accordion-collapse collapse" aria-labelledby="headingnine" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Description</b><br />
                                        Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments."</p>

                                    <a href="#" class="btn btn-primary icon-btn">Mark as complete <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>


                    </div>


                </section>
            </div>
        </main>
    </>
    );
}

export default SecurityHealth;
