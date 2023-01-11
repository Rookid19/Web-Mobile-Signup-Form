import React from "react";

function CustomInput({ placeholder, type, label, ...props }) {
  return (
    <div>
      <p>{label}</p>
      <input
        {...props}
        className="custom-input"
        placeholder={placeholder}
        style={{
          backgroundColor: type === "phone" && "white",
          paddingInline: type === "phone" ? 5 : 15,
        }}
      />
    </div>
  );
}

export default CustomInput;
