import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header';
import IconImg from "../../assets/images/new/bag-suite.svg"

const Insurance = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Header />
        <div class="content-page">
          <section class="ptb-85">
            <h1 class="icon-heading"><img src={IconImg} />Company Name Here</h1>
          </section>
          <section>
            <h2 class="mb-4">Insurance</h2>

            <div class="bg-white border-radius-30 p-5 text-center">
              Page coming soon
            </div>

          </section>
        </div>
      </main>
    </>
  );
}

export default Insurance