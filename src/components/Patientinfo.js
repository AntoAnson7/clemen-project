import React from "react";

function Patientinfo() {
  return (
    <div className="patient-card">
      <div className="row-1">
        <p>Rooms : A23 | Bed : 001</p>
      </div>
      <div className="row-2">
        <p>ARJUN RATAN</p>
      </div>
      <div className="row-3">
        <p>Admitted on : 26th Nov 2023 | 17:09</p>
      </div>
      <div className="row-4">
        <p>FERRIBLE RESPONSE / PYREXIA</p>
      </div>
      <div className="row-5">
        <button>KNOW MORE</button>
      </div>
    </div>
  );
}

export default Patientinfo;
