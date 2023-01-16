import React, { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import validate from "../../utils/Validate";

function Step3() {
  const [valid, setValid] = useState(true);

  const { setPageIndex, userData } = useAuth();
  const { values, handleOnchange, errors } = useForm(validate);

  const nav = () => {
    userData.firstname = values.firstname;
    userData.lastname = values.lastname;
    userData.dob = values.dob;
    userData.payID = values.payID;
    window.history.pushState({ id: 4 }, "", "");
    setPageIndex(5);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [values, errors]);

  // .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3") date validation
  return (
    <div>
      <span className="step">Step 3 of 6</span>
      <div className="title">Create Account</div>
      <CustomInput
        label="First Name"
        name="firstname"
        value={values.firstname.replace(/[0-9]/g, "")}
        onChange={handleOnchange}
      />
      <CustomInput
        label="Last Name"
        name="lastname"
        value={values.lastname.replace(/[0-9]/g, "")}
        onChange={handleOnchange}
      />
      <CustomInput
        label="Date of Birth"
        placeholder="MM/DD/YYYY"
        name="dob"
        value={values.dob}
        onChange={handleOnchange}
        maxLength={10}
      />
      {errors.dob && <span className="error">{errors.dob}</span>}
      <CustomInput
        label="Pay ID"
        inputType={true}
        tooltipTitle="This is your unique Credet Id or username other Credet users can use to pay you."
        name="payID"
        value={values.payID}
        onChange={handleOnchange}
        maxLength={15}
      />
      <br />
      <br />
      <CustomButton onClick={nav} disabled={valid} />
    </div>
  );
}

export default Step3;
