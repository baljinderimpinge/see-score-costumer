import RiskImage from '../../assets/images/new/riska-logo.svg';
import Icon1 from "../../assets/images/new/icon1.svg"
import Icon2 from "../../assets/images/new/icon2.svg"
import Icon3 from "../../assets/images/new/icon3.svg"
import Icon4 from "../../assets/images/new/icon4.svg"
import Icon5 from "../../assets/images/new/icon5.svg"
import Icon6 from "../../assets/images/new/icon6.svg"

export default function Sidebar(props) {
    if (props.admin === "Yes") {
        console.log("yes")
        return <>
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
                            <li><a href="#"><img src={Icon1} alt="" />Dashboard</a></li>
                            <li><a href="#"><img src={Icon3} alt="" />Customer onboarding</a></li>
                            <li><a href="#"><img src={Icon5} alt="" />View customers</a></li>
                            <li><a href="#"><img src={Icon6} alt="" />Logout</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    }
    return <>
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
                        <li><a href="#"><img src={Icon1} alt="" /> <span>Dashboard</span></a></li>
                        <li><a href="#"><img src={Icon2} alt="" /> <span>Security health</span></a></li>
                        <li><a href="#"><img src={Icon3} alt="" /> <span>Asset landscape</span></a></li>
                        <li><a href="#"><img src={Icon4} alt="" /> <span>Insurance</span></a></li>
                        <li><a href="#"><img src={Icon5} alt="" /> <span>Help</span></a></li>
                        <li><a href="#"><img src={Icon6} alt="" /> <span>Logout</span></a></li>
                    </ul>
                </div>
            </div>
        </aside>
    </>
}
