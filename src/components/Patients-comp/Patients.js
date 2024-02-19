import React from "react";
import "./patients.css";
import Patientinfo from "./Patientinfo";

function Patients() {
  return (
    <div className="Patients">
      {/* Pass patient details for each patient as an object to props from backend */}
      <Patientinfo props={{ id: "a1" }} />
      <Patientinfo props={{ id: "a2" }} />
      <Patientinfo props={{ id: "a3" }} />
      <Patientinfo props={{ id: "a4" }} />
    </div>
  );
}

export default Patients;
