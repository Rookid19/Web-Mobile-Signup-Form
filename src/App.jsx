import React from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Step2 from "./Pages/Account/Step2";
import Phone from "./Pages/Phone/Phone";

function App() {
  const { pageIndex,setPageIndex } = useAuth();

  window.addEventListener("popstate", function (event) {
    setPageIndex(pageIndex - 1);
  });
  return (
    <div className="App">
      {pageIndex === 1 ? <Phone /> : <Step2/>}
    </div>
  );
}

export default App;
