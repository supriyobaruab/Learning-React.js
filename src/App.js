//import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mood has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mood has been enabled", "success");
    }
  };
  //Start
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                header="Write down the sentences you want to convert"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
