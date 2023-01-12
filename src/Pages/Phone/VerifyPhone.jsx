import React, { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import useAuth from "../../hooks/useAuth";


function VerifyPhone() {
  const [verifyPhone, setVerifyPhone] = useState("");

  const { setPageIndex } = useAuth();

  //browser back navigation function
  const nav = () => {
    window.history.pushState({ id: 2 }, "", "");
    setPageIndex(3);
  };

  useEffect(() => {
    if (verifyPhone.length === 4) {
      nav();
    }
  }, [verifyPhone]);
  return (
    <div>
      <span className="step">Step 1 of 6</span>
      <div className="title">Verify Phone</div>
      <CustomInput
        label="We sent a verification code to your phone"
        placeholder="Code"
        name="verifyPhone"
        value={verifyPhone.replace(/\D/g, "")}
        onChange={(e) => setVerifyPhone(e.target.value)}
      />
      <p id="resend-code">
        <u>Resend code</u>
      </p>
    </div>
  );
}

export default VerifyPhone;
