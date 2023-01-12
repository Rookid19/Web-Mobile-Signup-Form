import React from "react";
import { FaBeer, FiInfo } from "react-icons/fi";
// FiInfo
function CustomInput({ placeholder, type, label, ...props }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="label">{label}</div>
        {type === true && <FiInfo style={{ marginTop: 10, marginLeft: 10 }} />}
      </div>

      <input
        {...props}
        className="custom-input"
        placeholder={placeholder}
        style={{
          backgroundColor: type === "phone" && "white",
          paddingInline: type === "phone" ? 5 : 15,
          fontSize: type === "phone" ? 28 : 15,
        }}
      />
    </div>
  );
}

export default CustomInput;
