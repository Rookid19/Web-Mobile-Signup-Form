import React from "react";
import "./App.css";
import Phone from "./components/Phone/Phone";
import useAuth from "./hooks/useAuth";

function App() {
  const { pageIndex } = useAuth();
  return (
    <div className="App">
      {
        pageIndex === 1 ?(<Phone/>) :null
      }
      {/* <Phone /> */}
    </div>
  );
}

export default App;
