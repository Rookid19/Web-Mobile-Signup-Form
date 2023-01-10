import React from "react";

function CustomInput({ placeholder }) {
  return (
    <div>
      <p>We send a verification</p>
      <input className="custom-input" placeholder={placeholder} style={{
        width:"70%"
      }}/>
    </div>
  );
}

export default CustomInput;
