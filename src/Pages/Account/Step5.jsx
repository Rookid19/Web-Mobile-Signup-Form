import React, { useEffect } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

function Step5() {
  const { values, handleOnchange } = useForm();

  const { setPageIndex } = useAuth();

  const nav = () => {
    window.history.pushState({ id: 6 }, "", "");
    setPageIndex(7);
  };

  useEffect(() => {
    if (values.ssn.length === 4) {
      nav();
    }
  }, [values]);

  return (
    <div>
      <span className="step">Step 5 of 6</span>
      <div className="title">Your social security number (SSN)</div>
      <CustomInput
        label="Enter the last 4 digits of your SSN"
        name="ssn"
        value={values.ssn.replace(/\D/g, "")}
        onChange={handleOnchange}
      />
      <p id="resend-code">
        <u>Why do you need my ssn ?</u>
      </p>
    </div>
  );
}

export default Step5;
