import React from "react";

function CustomButton({ ...props }) {
  return (
    <button className="button" {...props}>
      Continue
    </button>
  );
}

export default CustomButton;
