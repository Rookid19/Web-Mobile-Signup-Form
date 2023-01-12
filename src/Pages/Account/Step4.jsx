import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

function Step4() {
  const { setPageIndex } = useAuth();
  const { values, handleOnchange } =
    useForm();

  const nav = () => {
    window.history.pushState({ id: 4 }, "", "");
    setPageIndex(5);
  };

  // countries
  const countries = [
    { id: 1, country: "US", code: "+1", label: "🇺🇸 United States (+1)" },
    { id: 2, country: "GH", code: "+233", label: "🇬🇭 Ghana (+233)" },
  ];

  return (
    <div>
      <span className="step">Step 4 of 6</span>
      <div className="title">Create Account</div>
      <CustomInput label="Street" />
      <CustomInput label="Aparment (optional)" />
      <CustomInput label="City" />
      <div className="label">
        State
      </div>
      <select className="custom-input" onChange={handleOnchange}>
        {countries.map(({ id, label }) => (
          <option value={values.region} key={id}>
            {label}
          </option>
        ))}
      </select>
      <CustomInput label="Zip Code" />
      <br />
      <br />
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Step4;
