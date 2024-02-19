import React from "react";
import "./details.css";
import logo from "../../assets/Group 3.png";
import emergency from "../../assets/emergency.png";

function PatientDetails() {
  return (
    <div className="pat-deets">
      <div className="logo-deets">
        <img src={logo} alt="" />
        <p>Age : 21 | Male | 168 cm | 112 lbs</p>
      </div>

      <div className="pat-details">
        <p className="heading-pat-deet">PATIENT DETAILS</p>
        <p>Room A23 | Bed 001</p>
        <p className="pat-name">ARJUN RATAN</p>

        <div className="deets-grid">
          <div className="about">
            <h3>ABOUT</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              debiti
            </p>
          </div>

          <div className="allergies">
            <h3>ALLERGIES</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            expedita.
          </div>

          <div className="basic-info">
            <h3>BASIC INFORMATION</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              vitae.
            </p>
          </div>

          <div className="vaccinations">
            <h3>VACCINATIONS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              facilis!
            </p>
          </div>
        </div>

        <div className="medications">
          <h3>MEDICATIONS</h3>
          <button className="med-button">ACETAMINOPHIN</button>
          <button className="med-button">DOXYCYLIN</button>
          <button className="med-button">IBUPROFEN</button>
          <button className="med-button">PARACETAMOL </button>
        </div>
      </div>

      <div className="emerg-box">
        <img src={emergency} alt="" className="emerg" />
      </div>
    </div>
  );
}

export default PatientDetails;
