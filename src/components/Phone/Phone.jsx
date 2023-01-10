import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import "./Phone.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Phone() {
  const countries = [
    { id: 1, country: "US", flag: "fi fi-us", label: "🇺🇸 United States (+1)" },
    { id: 2, country: "GH", flag: "fi fi-gh", label: "🇬🇭 Ghana (+233)" },
  ];
  return (
    <div>
      <span className="step">Step 1 of 6</span>
      <div className="title">Let's start with phone</div>
      <div className="sub-title">
        Select your country and enter your phone number
      </div>
      {/* <div className="phone-container">
        <span class="fi fi-gh"></span> <span class="fi fi-us"></span>
      </div> */}
      {/* <CustomInput placeholder="Code" /> */}
      <select className="dropdown-input">
        {countries.map(({ id, label, flag }) => (
          <option value={label} key={id}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Phone;
