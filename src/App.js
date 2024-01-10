import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/Dashboard/style.css'
import LoginButton from './components/Button/LoginButton';
import LogoutButton from './components/Button/LogoutButton';
import { Dashboard } from './pages/Dashboard';
import AuthenticatedRoute from './HOC/priveteRoures';  // Correct the import path
import Insurance from './pages/Insurance';
import MicrosoftLoing from './pages/Login/microsoftLoing';




function App({Instance}) {
  return (
    <React.Fragment>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route element={<AuthenticatedRoute />}>
          <Route path="/microsoftLoing" element={<MicrosoftLoing Instance={Instance}/>} />

            <Route path="/Dashboard/:tenatId" element={<Dashboard />} />
            <Route path="/Insurance" element={<Insurance />} />

          </Route>
        </Routes>
      </BrowserRouter>
      {/* <LogoutButton /> */}
    </React.Fragment>
  );
}

export default App;
