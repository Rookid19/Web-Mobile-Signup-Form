import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./Phone.css";
import useAuth from "../../hooks/useAuth";

function Phone() {
  //declaring variables
  const [countryCode, setCountryCode] = useState("+1");
  const [valid, setValid] = useState(false);

  const { setPageIndex } = useAuth();

  // countries
  const countries = [
    { id: 1, country: "US", code: "+1", label: "🇺🇸 United States (+1)" },
    { id: 2, country: "GH", code: "+233", label: "🇬🇭 Ghana (+233)" },
  ];

  //useForm hook
  const { values, setValues, errors, setErrors, handleOnchange } = useForm();

  // setting text input to null if the user select a different country
  useEffect(() => {
    setValues({
      ...values,
      phone: "",
    });
  }, [countryCode]);

  // seperating phone number with hyphens
  let us_phone = values.phone.replace(/^(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  let gh_phone = values.phone.replace(/^(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");

  //navigation to next page
  const nav = () => {
    window.history.pushState({ id: 1 }, "", "");
    setPageIndex(2);
  };

  return (
    <div>
      <span className="step">Step 1 of 6</span>
      <div className="title">Let's start with phone</div>
      <div className="label">
        Select your country and enter your phone number
      </div>
      <select
        className="dropdown-input"
        onChange={(e) => setCountryCode(e.target.value)}
      >
        {countries.map(({ id, label, code }) => (
          <option value={code} key={id}>
            {label}
          </option>
        ))}
      </select>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span id="country-code">{countryCode}</span>
        <div>
          <CustomInput
            autoFocus
            type="phone"
            name="phone"
            placeholder="Phone number"
            value={countryCode === "+1" ? us_phone : gh_phone}
            onChange={handleOnchange}
            maxLength={countryCode === "+1" ? 10 : 9}
          />
        </div>
      </div>
      <div className="terms">
        By continuing, I understand and agree to Credet’s <u>Privacy Policy</u>{" "}
        and <u>Terms of Use</u> for creating a Credet Account
      </div>
      <CustomButton onClick={nav} />
    </div>
  );
}

export default Phone;

// span class="fi fi-gh"></span> <span class="fi fi-us"></span>
// import "/node_modules/flag-icons/css/flag-icons.min.css";
