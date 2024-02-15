import RiskImage from '../../assets/images/new/riska-logo.svg';
import Icon1 from "../../assets/images/new/icon1.svg"
import Icon2 from "../../assets/images/new/icon2.svg"
import Icon3 from "../../assets/images/new/icon3.svg"
import Icon4 from "../../assets/images/new/icon4.svg"
import Icon5 from "../../assets/images/new/icon5.svg"
// import Icon6 from "../../assets/images/new/icon6.svg"
import { Link } from 'react-router-dom';
// import { useMsal } from '@azure/msal-react';
// import { loginRequest } from '../../lib/authConfig';
import { useNavigate } from 'react-router-dom';

export default function Sidebar(props) {
    // const { instance, inProgress, accounts } = useMsal();
    const navigate = useNavigate();

        // const azureLogout = () => {
        //     try {
        //         instance.logoutRedirect(loginRequest);
        //         localStorage.clear()
        //         navigate('/microsoft-login');
        //     } catch (error) {
        //         console.error("Error during login redirect:", error);
        //     }
        // };

    
    return (
        <>
            {props?.admin == "Yes" ?
                <aside className="sidebar">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo d-none d-xl-block"><img src={RiskImage} alt="" className="img-fluid" /></div>
                            <div className="logo d-block d-xl-none"><img src="images/risk-logo-icon.svg" alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><Link to="/admin-dashboard">Dashboard</Link></li>
                                <li><Link to="/onboarding-customer"><img src={Icon3} alt="" />Customer onboarding</Link></li>
                                <li><Link to="/view-customer"><img src={Icon5} alt="" />View customers</Link></li>
                                {/* <li><a href="#"><img src={Icon6} alt="" />Logout</a></li> */}
                            </ul>
                        </div>
                    </div>
                </aside>
                :
                <aside className="sidebar">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo d-none d-xl-block"><img src={RiskImage} alt="" className="img-fluid" /></div>
                            <div className="logo d-block d-xl-none"><img src="images/risk-logo-icon.svg" alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><Link to="/customer-dashboard"> <img src={Icon1} alt="" /><span>Dashboard</span></Link></li>
                                <li><Link to="/security-health"> <img src={Icon2} alt="" /><span>Security health</span></Link></li>
                                <li><Link to="/asset-landscape"> <img src={Icon3} alt="" /><span>Asset landscape</span></Link></li>
                                <li><Link to="/insurance"> <img src={Icon4} alt="" /><span>Insurance</span></Link></li>
                                <li><Link to="/help"> <img src={Icon5} alt="" /><span>Help</span></Link></li>
                                {/* <li onClick={()=> azureLogout()} ><Link><img src={Icon6} alt="" /><span>Logout</span></Link></li> */}
                            </ul>
                        </div>
                    </div> 
                </aside>

            }
        </>
    )
}
