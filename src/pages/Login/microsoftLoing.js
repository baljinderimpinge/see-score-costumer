import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from '../../lib/authConfig';

import { useEffect } from "react";


const MicrosoftLogin1 = () => {

  const { instance } = useMsal();

  useEffect(() => {
    const currentAccount = instance.getActiveAccount()
    if (currentAccount) {
    }

  }, [instance])
  const handleRedirect = () => {
    try {
      instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Error during login redirect:", error);
    }
  };
  return (
    <>
      <AuthenticatedTemplate>
        <section className="ptb-110">
          <div className="container">
            <h1>Welcome to Guardian</h1>
            <div className="addition"><a href="#">Dashboard</a><a href="#">Insurance</a><a href="#">Alerts</a><a href="#">Help</a><a href="#">Logout <img src="images/out.svg" alt="" /></a></div>
            <h2 className="mt-5">Let’s connect to your Identity Provider</h2>
            <p className="fw-normal">Click your identity provider below to get started. You’ll need to be a Global Administrator to connect to the platform.</p>

            <div className="row mt-4 gy-4">
              <div className="col-md-4">
                <div className="bg-white p-5 border-radius-15 text-center">
                  <figure><img src="images/logo1.svg" alt="" /></figure>
                  <h5>Microsoft Azure</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-5 border-radius-15 text-center">
                  <figure><img src="images/logo1.svg" alt="" /></figure>
                  <h5>Microsoft Azure</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-5 border-radius-15 text-center">
                  <figure><img src="images/logo1.svg" alt="" /></figure>
                  <h5>Microsoft Azure</h5>
                </div>
              </div>
            </div>

          </div>
        </section>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>
          Sign In
        </button>
      </UnauthenticatedTemplate>

    </>

  );
};

export default MicrosoftLogin1;

