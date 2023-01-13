import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

function Step2() {
  // const [confirm]
  const { setPageIndex } = useAuth();
  const { values, handleOnchange } = useForm();

  const nav = () => {
    window.history.pushState({ id: 3 }, "", "");
    setPageIndex(4);
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
        value={values.password}
        onChange={handleOnchange}
      />
      {/* <button data-tip data-for="registerTip">
        Register
      </button> */}

      <br />
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Step2;
