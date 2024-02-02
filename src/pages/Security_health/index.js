import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header";
import IconImg from "../../assets/images/new/identity-icon.svg"
import IconImg1 from "../../assets/images/new/bag-suite.svg"

function SecurityHealth() {
    return (<>
        <Sidebar />
        <main>
            <Header />
            <div class="content-page">
                <section class="ptb-85">
                    <h1 class="icon-heading"><img src={IconImg1} />Company Name Here</h1>
                </section>
                <section>
                    <h2 class="mb-4 icon-heading"><img src={IconImg} alt="" />Identity recommendations</h2>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span class="txt">Enable Azure AD Identity Protection sign-in risk policies</span> <span class="btn btn-red">Critical</span>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Insights</b><br />
                                        You currently have 1 global admins.<br /><br />

                                        <b>Description</b><br />
                                        Having more than one global administrator helps if you’re unable to fulfill the needs or obligations of your organization. It's important to have a delegate or an emergency access account that someone from your team can access if necessary. It also allows admins the ability to monitor each other for signs of a breach
                                        <br /><br />
                                        <b>Resolution steps</b><br />
                                        1. Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments.</p>

                                    <a href="#" class="btn btn-primary icon-btn">Action now <img src="images/white-arrow.svg" alt="" /></a>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span class="txt">Ensure multifactor authentication is enabled for all users in administrative roles</span>  <span class="btn btn-orange">Moderate</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Insights</b><br />
                                        You currently have 1 global admins.<br /><br />

                                        <b>Description</b><br />
                                        Having more than one global administrator helps if you’re unable to fulfill the needs or obligations of your organization. It's important to have a delegate or an emergency access account that someone from your team can access if necessary. It also allows admins the ability to monitor each other for signs of a breach
                                        <br /><br />
                                        <b>Resolution steps</b><br />
                                        1. Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span class="txt">Designate more than one global admin</span> <span class="btn btn-yellow">Low</span>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><b>Insights</b><br />
                                        You currently have 1 global admins.<br /><br />

                                        <b>Description</b><br />
                                        Having more than one global administrator helps if you’re unable to fulfill the needs or obligations of your organization. It's important to have a delegate or an emergency access account that someone from your team can access if necessary. It also allows admins the ability to monitor each other for signs of a breach
                                        <br /><br />
                                        <b>Resolution steps</b><br />
                                        1. Assign more than one user a global administrator role in your organization. Go to Microsoft Entra ID {">"} Roles and administrators and select the Global administrator role in the table. Then click Add assignments.</p>
                                </div>
                            </div>
                        </div>
                    </div>

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
