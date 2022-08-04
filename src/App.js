import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [node, setNode] = useState("light");

  const [mode, setMode] = useState("light"); // whether dark is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3d6046";
      showAlert("Dark Mode Has Been Enabled", "danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#99e394";
      showAlert("Light Mode Has Been Enabled", "Sucess");
    }
  };

  const toggle = () => {
    if (node === "light") {
      setNode("dark");
      document.body.style.backgroundColor = "#030110";
      showAlert("Dark Mode Has Been Enabled", "danger");
    } else {
      setNode("light");
      document.body.style.backgroundColor = "#00ffa1";
      showAlert("Light Mode Has Been Enabled", "Success");
    }
  };

  return (
    <>
        <Navbar
          aboutText="About TextUtils"
          guard="Contact Us"
          mode={mode}
          toggleMode={toggleMode}
          node={node}
          toggle={toggle}
        />
        <Alert alert={alert} />
        <div className="container my-3">
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To Analyze Below"
                mode={mode}
              />
              <About/>
        </div>
    </>
  );
}



export default App;
