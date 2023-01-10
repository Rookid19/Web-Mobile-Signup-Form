import React from "react";
import "./Phone.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Phone() {
  return (
    <div>
      <span className="step">Step 1 of 6</span>
      <div className="title">Let's start with phone</div>
      <div className="sub-title">
        Select your country and enter your phone number
      </div>
      <div className="phone-container">
      <span class="fi fi-gh"></span> <span class="fi fi-us"></span>
      </div>
    </div>
  );
}

export default Phone;
