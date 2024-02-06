import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Images from "../../assets/images/chain.svg"
import RiskImage from '../../assets/images/riska-logo.svg';
import userImage from '../../assets/images/user.svg';
import { API_BASE_URL } from '../../lib/constant';
import lockImage from '../../assets/images/lock.svg';
import outImage from '../../assets/images/out.svg';
import { useAuth0 } from "@auth0/auth0-react";
import HeadImg from "../../assets/images/new/guardian.svg"
import IconImg from "../../assets/images/new/identity-icon.svg"
import IconImg1 from "../../assets/images/new/bag-suite.svg"
import axios from "axios";
export const ViewCustomer  = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    const [viewCustomerData, setViewCustomerData] = useState()
    const [showTogel, setShowtoggel] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/admin/getallcustomers`);
                console.log(response.data.data);
                setViewCustomerData(response.data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

   
    }, []);

    const show = (itemId) => {
        if (showTogel.includes(itemId)) {
            setShowtoggel(showTogel.filter(id => id !== itemId));
        } else {
            setShowtoggel([...showTogel, itemId]);
        }
    }
    var isAdmin = "Yes";
  return (
    <>
   <Sidebar admin={isAdmin} />
        <main>
        <header>
          <div class="top-name">
            <img src={HeadImg} alt="" /> Guardian Admin Portal
          </div>
          <div className="dropdown"><button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><b>Welcome</b> ADMIN</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#"><img src={userImage} /> Account</a></li>
              <li><a className="dropdown-item" href="#"><img src={lockImage} /> Change Password</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => {
                logout({ returnTo: window.location.origin });
                localStorage.clear("token");
              }} ><img src={outImage} /> Logout</a></li>
            </ul>
          </div>
        </header>
            <div class="content-page">
                <section>
                     <h2 class="mb-2 mt-115"><img src="images/security-checklist.svg" alt="" />Customers</h2>
                     <p class="fw-normal">Click to view customer details or impersonate the customer account </p>
                   
                     <div className="accordion" id="accordionExample">
                        {viewCustomerData && viewCustomerData.length > 0 && viewCustomerData.map((item, index) => {
                            const accordionId = `accordion-${item.id}-${index}`; // Unique identifier
                            const collapseId = `collapse-${item.id}-${index}`; // Unique identifier
                            return (
                                <div key={accordionId} className="accordion-item">
                                    <h2 className="accordion-header" id={accordionId}>
                                        <button onClick={() => show(item.id)} className={showTogel.includes(item.id) ? "accordion-button" : 'accordion-button collapsed'} type="button" data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`} aria-expanded={showTogel.includes(item.id)} aria-controls={collapseId}>
                                            <span className="txt">{item?.name}</span>  <span className="btn btn-primary">impersonate</span>
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
                                                    <p>

                                                        {value.text}</p>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </section>
            </div>
        </main>
        </>
  )
}