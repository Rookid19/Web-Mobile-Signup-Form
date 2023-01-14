import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import validate from "../../utils/Validate";

function Step2() {
  // const [confirm]
  const { setPageIndex, userData } = useAuth();
  const { values, handleOnchange, handleSubmit, errors } = useForm(validate);

  const nav = () => {
    userData.email = values.email;
    userData.password = values.password;
    // window.history.pushState({ id: 3 }, "", "");
    // setPageIndex(4);
    handleSubmit();
  };

  return (
    <div>
      <span className="step">Step 2 of 6</span>
      <div className="title">Let's start with phone</div>
      <CustomInput
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleOnchange}
      />
      <CustomInput
        label="Password"
        inputType={true}
        name="password"
        type="password"
        value={values.password}
        onChange={handleOnchange}
      />

      <br />
      <CustomInput
        label="Confirm Password"
        name="password"
        type="password"
        value={values.confirmPassword}
        onChange={handleOnchange}
      />
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword}</span>
      )}
      <br />
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Step2;
