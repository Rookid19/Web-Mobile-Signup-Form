import React from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Step2 from "./Pages/Account/Step2";
import Phone from "./Pages/Phone/Phone";

function App() {
  const { pageIndex } = useAuth();
  return (
    <div className="App">
      {pageIndex === 1 ? <Phone /> : <Step2/>}
    </div>
  );
}

export default App;
