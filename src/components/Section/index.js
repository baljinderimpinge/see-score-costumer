import React from 'react'

import BagImg from "../../assets/images/new/bag-suite.svg"

const Section = () => {
  
  let companyname = localStorage.getItem("companyName");
  return (
    <>
      <section className="ptb-85">
        <h1 className="icon-heading"><img src={BagImg} />{companyname}</h1>
      </section>
    </>
  )
}

export default Section