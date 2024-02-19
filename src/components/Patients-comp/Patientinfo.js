import React from "react";
import pills from "../../assets/pill.png";
import { useNavigate } from "react-router-dom";

function Patientinfo(props) {
  // Patient details are in props
  // eg. to get name use props.name

  const navigate = useNavigate();

  const getPatientDetails = () => {
    // Fetch specific patien from backend using id
    // Implement backend logic here
    // for use params change to navigate(/patient/:id) and return person details by id to frontend

    // eg. props.id should contain patient id
    // so use navigate(/patient/:{props.id})

    navigate("/patient/id");
  };

  return (
    <div className="patient-card">
      {/* All values are samples ideally map through values in props */}
      {/* Replace all static values with values from backend */}
      <img src={pills} alt="" className="pills" />
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
        <button onClick={() => getPatientDetails(props.id)}>KNOW MORE</button>
      </div>
    </div>
  );
}

export default Patientinfo;
