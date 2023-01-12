import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";

function Step2() {
  const { pageIndex, setPageIndex } = useAuth();

  const nav = () => {
    window.history.pushState({ id: 2 }, "", "");
    setPageIndex(3);
  };

  return <div>Step2
    <CustomButton onClick={nav}/>
  </div>;
}

export default Step2;
