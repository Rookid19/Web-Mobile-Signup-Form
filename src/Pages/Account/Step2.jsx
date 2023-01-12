import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";

function Step2() {
  const { setPageIndex } = useAuth();

  const nav = () => {
    window.history.pushState({ id: 3 }, "", "");
    setPageIndex(4);
  };

  return (
    <div>
      <span className="step">Step 2 of 6</span>
      <div className="title">Let's start with phone</div>
      <CustomInput label="Email" />
      <CustomInput label="Password" type={true} />
      <CustomInput label="Confirm Password" />
      <br />
      <br />
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Step2;
