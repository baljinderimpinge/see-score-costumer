import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/Dashboard/style.css'
import LoginButton from './components/Button/LoginButton';
import { Dashboard } from './pages/Dashboard';
import { AuthenticatedRoute,MicrosoftAuthenticatedRoute } from './HOC/priveteRoures';  // Correct the import path
import Insurance from './pages/Insurance';
import MicrosoftLoing from './pages/Login/microsoftLoing';




function App({ Instance }) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route path="/login" element={<LoginButton />} />
          <Route element={<AuthenticatedRoute />}>
            <Route path="/microsoftLoing" element={<MicrosoftLoing Instance={Instance} />} />
            <Route element={<MicrosoftAuthenticatedRoute/>}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Insurance" element={<Insurance />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
