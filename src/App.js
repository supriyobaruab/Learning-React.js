//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm
          header="Write down the sentences you want to convert"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
