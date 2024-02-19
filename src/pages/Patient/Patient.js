import React, { useEffect } from "react";
import "./patient.css";
import logo from "../../assets/Group 3.png";
import Patients from "../../components/Patients-comp/Patients";
import emergency from "../../assets/emergency.png";
import Support from "../../components/Support-comp/Support";
import { useState } from "react";

import prec_img from "../../assets/prec.png";
import patients_img from "../../assets/patients.png";

function Patient() {
  const [support, setSupport] = useState(true);
  const [pat, setpat] = useState(false);
  const [prec, setPrec] = useState(false);

  const render = (val) => {
    if (val == "support") {
      setSupport(true);
      setpat(false);
      setPrec(false);
    } else if (val == "patients") {
      setSupport(false);
      setpat(true);
      setPrec(false);
    } else if (val == "prec") {
      setSupport(false);
      setpat(false);
      setPrec(true);
    }
  };

  return (
    <div className="patient-page">
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="nav">
        <div className="container-1">
          <div className="item">
            <img src={prec_img} alt="" />
            <p onClick={() => render("support")}>SUPPORT</p>
          </div>

          <div className="item">
            <img src={patients_img} alt="" />
            <p onClick={() => render("patients")}>PATIENTS</p>
          </div>

          <div className="item">
            <img src={prec_img} alt="" />
            <p onClick={() => render("prec")}>PRECAUTIONS</p>
          </div>
        </div>
      </div>

      {pat ? <Patients /> : support ? <Support /> : <></>}

      <div className="emerg-box-2">
        <img src={emergency} alt="" className="emerg" />
      </div>
    </div>
  );
}

export default Patient;
