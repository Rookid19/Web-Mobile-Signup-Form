import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import validate from "../../utils/Validate";

function Step3() {
  const { setPageIndex } = useAuth();

  const { values, handleOnchange } = useForm(validate);

  const nav = () => {
    window.history.pushState({ id: 4 }, "", "");
    setPageIndex(5);
  };

  return (
    <div>
      <span className="step">Step 3 of 6</span>
      <div className="title">Create Account</div>
      <CustomInput label="First Name" />
      <CustomInput label="Last Name" />
      <CustomInput label="Date of Birth" placeholder="MM/DD/YYYY" />
      <CustomInput
        label="Pay ID"
        inputType={true}
        tooltipTitle="This is your unique Credet Id or username other Credet users can use to pay you."
      />
      <br />
      <br />
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Step3;
