import React from "react";
import "./alert.css";
import check from "../../assets/check.png";

function Alert() {
  return (
    <div className="alert">
      <div className="alert-sub">
        <img src={check} width="30px" />
        <h3>IV ALERT !!!</h3>
        <p>Room no : B34 | Bed no : 002</p>
        <button className="okay">OKAY</button>
        <button className="dismiss">DISMISS</button>
      </div>
    </div>
  );
}

export default Alert;
