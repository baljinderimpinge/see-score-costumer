import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header';
import IconImg from "../../assets/images/new/bag-suite.svg"

const Insurance = () => {
  let companyname = localStorage.getItem("companyName");
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <div
          className="content-page">
          <section
            className="ptb-85">
            <h1
              className="icon-heading"><img src={IconImg} />{companyname}</h1>
          </section>
          <section>
            <h2
              className="mb-4">Insurance</h2>

            <div
              className="bg-white border-radius-30 p-5 text-center">
              Page coming soon
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default Insurance