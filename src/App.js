import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Style.css"
// import './pages//style.css'
import LoginButton from './components/Button/LoginButton';
import LogoutButton from './components/Button/LogoutButton';
import CustomerDashboard from './pages/Custumer_dashboard';
import AdminDashBoard from './pages/Admin_dashboard';

import { AuthenticatedRoute, MicrosoftAuthenticatedRoute } from './HOC/priveteRoures';  // Correct the import path
import Insurance from './pages/Insurance';
import MicrosoftLoing from './pages/Login/microsoftLoing';
import { AuthenticatedTemple, EventType } from "@azure/msal-browser"
import { MsalProvider } from '@azure/msal-react';

function App({ maslInstance }) {
  return (
    <React.Fragment>
      <MsalProvider instance={maslInstance}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/custumer-dashboard" element={<CustomerDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />

            {/* <Route element={<AuthenticatedRoute />}> */}
            {/* <Route path="/microsoftLoing" element={<MicrosoftLoing/>} /> */}
            {/* <Route element={<MicrosoftAuthenticatedRoute/>}>
            <Route path="/admin-dashboard" element={<AdminDashBoard />} />
            <Route path="/custumer-dashboard" element={<CustomerDashboard />} />
            <Route path="/Insurance" element={<Insurance />} />
            </Route> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </MsalProvider>
    </React.Fragment>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from "@azure/msal-react";
// import { msalConfig, loginRequest } from './lib/authConfig';



// const WrappedView = () => {
//   const { instance } = useMsal();
//   const activeAccount = instance.getActiveAccount();
//   const handleRedirect = () => {
//     instance.loginRedirect(loginRequest);
//   };

//   return (
//     <div className='app'>
//       <AuthenticatedTemplate>
//         {activeAccount ? (
//           <p>
//             Hello, {activeAccount.username} {/* Display the username */}
//           </p>
//         ) : null}
//       </AuthenticatedTemplate>
//       <UnauthenticatedTemplate>
//         <button onClick={handleRedirect}>
//           Sign In
//         </button>
//       </UnauthenticatedTemplate>
//     </div>
//   );
// };

// function App() {
//   return (
//     <React.Fragment>
//       <MsalProvider instance={Instance}>
//         <WrappedView />
//       </MsalProvider>
//       {/* Your BrowserRouter and Routes can be included here if needed */}
//     </React.Fragment>
//   );
// }

// export default App;
