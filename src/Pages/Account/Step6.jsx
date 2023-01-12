import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import useForm from "../../hooks/useForm";

function Step6() {
  const { values, handleOnchange } = useForm();

  return (
    <div>
      <span className="step">Step 6 of 6</span>
      <div className="title">Create your 6 digit pin</div>
      <CustomInput
        label="This is what you will use to authorize a transaction"
        name="pin"
        value={values.pin.replace(/\D/g, "")}
        onChange={handleOnchange}
      />
    </div>
  );
}

export default Step6;
