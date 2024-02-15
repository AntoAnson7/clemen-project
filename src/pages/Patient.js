import React from "react";
import "./patient.css";
import Patientinfo from "../components/Patientinfo";
import logo from "../assets/Group 3.png";

function Patient() {
  return (
    <div className="patient-page">
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="nav">
        <div className="container-1">
          <div className="item">
            <img src="" alt="" />
            <p>SUPPORT</p>
          </div>
          <div className="item">
            <img src="" alt="" />
            <p>PATIENTS</p>
          </div>
          <div className="item">
            <img src="" alt="" />
            <p>PRECAUTIONS</p>
          </div>
        </div>

        <div className="container-2">
          <Patientinfo />
          <Patientinfo />
          <Patientinfo />
          <Patientinfo />
        </div>
      </div>
    </div>
  );
}

export default Patient;
