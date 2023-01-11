import React from "react";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Phone from "./Pages/Phone/Phone";

function App() {
  const { pageIndex } = useAuth();
  return (
    <div className="App">
      {pageIndex === 1 ? <Phone /> : null}
      {/* <Phone /> */}
    </div>
  );
}

export default App;
