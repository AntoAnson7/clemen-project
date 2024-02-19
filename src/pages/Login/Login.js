import React from "react";
import "./login.css";
import logo from "../../assets/Group 3.png";
import nurseid from "../../assets/nurseid.png";
import lock from "../../assets/lock.png";
import emergency from "../../assets/emergency.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Alert from "../../components/Alert/Alert";

function Login() {
  const navigate = useNavigate();

  const [nurse_id, setNurseid] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    // Nurser id : nurse_id | Password : pwd
    // use these values to fetch profile from backend
    // Implement backend login logic here
    navigate("/patient");
  };

  return (
    <div className="login-page">
      <div className="logo-part">
        <img src={logo} alt="" className="logo-login-img" />
      </div>

      <div className="login-input">
        <div className="input-space">
          <div className="inp-field-box">
            <img src={nurseid} alt="" />
            <input
              type="text"
              className="inp-field"
              placeholder="NURSE ID"
              onChange={(e) => setNurseid(e.target.value)}
            />
          </div>

          <div className="inp-field-box">
            <img src={lock} alt="" />
            <input
              type="password"
              className="inp-field"
              placeholder="PASSWORD"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button onClick={() => login()}>SUBMIT</button>
        </div>
      </div>

      <div className="emergency">
        <img src={emergency} alt="" />
      </div>
    </div>
  );
}

export default Login;
