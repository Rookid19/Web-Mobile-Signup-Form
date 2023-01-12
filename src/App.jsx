import React from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Step3 from "./Pages/Account/Step3";
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
      {pageIndex === 1 ? <Phone /> : pageIndex === 2 ? <VerifyPhone /> : <Step3 />}
    </div>
  );
}

export default App;
