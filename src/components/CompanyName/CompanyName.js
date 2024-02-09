import BagImg from "../../assets/images/new/bag-suite.svg"
export default function Sidebar() {
    let companyname = localStorage.getItem("companyName");
    return <>
        <section  className="ptb-85">
            <h1  className="icon-heading"><img src={BagImg} />{companyname}</h1>
        </section>
    </>
}
