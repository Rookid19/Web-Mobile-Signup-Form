import React from "react";

function CustomInput({ placeholder, autoFocus, type }) {
  return (
    <div>
      <p>We send a verification</p>
      <input
        className="custom-input"
        autoFocus={autoFocus}
        placeholder={placeholder}
        style={{
          backgroundColor: type === "phone" && "white",
        }}
      />
    </div>
  );
}

export default CustomInput;
