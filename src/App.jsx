import React from "react";
import GoogleMapsSearch from "./GoogleMapsSearch";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Step2 from "./Pages/Account/Step2";
import Step3 from "./Pages/Account/Step3";
import Step4 from "./Pages/Account/Step4";
import Step5 from "./Pages/Account/Step5";
import Step6 from "./Pages/Account/Step6";
import Phone from "./Pages/Phone/Phone";
import VerifyPhone from "./Pages/Phone/VerifyPhone";

function App() {
  const { pageIndex, setPageIndex } = useAuth();

  // When the user clicks the back button and the popstate event is triggered
  window.addEventListener("popstate", function (event) {
    setPageIndex(pageIndex - 1);
  });

  return (
    <div className="App">
      {pageIndex === 1 ? (
        <Phone />
      ) : pageIndex === 2 ? (
        <VerifyPhone />
      ) : pageIndex === 3 ? (
        <Step2 />
      ) : pageIndex === 4 ? (
        <Step3 />
      ) : pageIndex === 5 ? (
        <Step4 />
      ) : pageIndex === 6 ? (
        <Step5 />
      ) : pageIndex === 7 ? (
        <Step6 />
      ) : null}
    </div>
  );
}

export default App;
