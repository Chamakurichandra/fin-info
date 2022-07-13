import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import 'antd/dist/antd.css';
import SetPassword from "./pages/SetPassword";
import EnterOtp from "./pages/EnterOtp";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/setPassword" element={<SetPassword/>}/>
          <Route path="/enter-otp" element={<EnterOtp/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
