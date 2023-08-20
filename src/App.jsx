import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Signup from "./Signup";
import Loggin from "./Loggin";
import Faqs from "./Faqs";
import viteLogo from "/sasulalogo.png";
import "./App.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";


//start QR CODE SCANNER
function App() {
  const [scanResult, setScanResult] = useState(null);

  //use effect hook to handle the scan process
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      //dimensions for scanner
      qrbox: {
        width: 250,
        height: 250,
      },
      //frames per second for performace
      fps: 5,
    });
    //start the scanner
    scanner.render(success, error);
    //handling success
    function success(result) {
      scanner.clear(); //if success full clear the scanner
      setScanResult(result); //set the obtained scann result
    }
    //handling the error
    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    //render the design
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="sasula ku spot logo" />
        </a>
      </div>
      <Router>
       <div className="main_menu">
        <Routes>
         <Route path="/Signup" element={<Signup />} />
        <Route path="/Signup" element={<Signup />} />
         <Route path="/Loggin" element={<Loggin />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Routes>
         <Menu />
        </div>
      </Router>

      <h4>Scan Parking code to make payment</h4>

      {scanResult ? (
        <div>
          success : <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
//END QR CODE SCANNER

export default App;
