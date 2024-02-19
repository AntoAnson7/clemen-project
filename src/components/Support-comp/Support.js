import React from "react";
import "./support.css";

function Support() {
  return (
    <div className="support">
      <div className="support-deets">
        <h3>Dr. P K Ramdas</h3>
        <p>(MBBS , MD , Paediactrician)</p>
        <p>12 B | Skyline , Kochi</p>
        <p>+91 9999977778</p>
      </div>

      <div className="support-input">
        <textarea type="text" placeholder="Type your message here" />
        <button>SEND</button>
      </div>
    </div>
  );
}

export default Support;
