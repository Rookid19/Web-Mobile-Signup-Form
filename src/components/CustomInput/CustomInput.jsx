import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { FaBeer, FiInfo } from "react-icons/fi";

function CustomInput({ placeholder, inputType, label,tooltipTitle, ...props }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="label">{label}</div>
        {inputType === true && (
          <>
            <Tooltip
              title={tooltipTitle}
              arrow
              placement="top"
            >
              <div>
                <FiInfo style={{ marginTop: 14, marginLeft: 10 }} />
              </div>
            </Tooltip>
          </>
        )}
      </div>

      <input
        {...props}
        className="custom-input"
        placeholder={placeholder}
        style={{
          backgroundColor: inputType === "phone" && "white",
          paddingInline: inputType === "phone" ? 5 : 15,
          fontSize: inputType === "phone" ? 28 : 15,
        }}
      />
    </div>
  );
}

export default CustomInput;
