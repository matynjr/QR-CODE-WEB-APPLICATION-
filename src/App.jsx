import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Loggin from "./Loggin";
import Scanner from "./components/Qrcode";
import viteLogo from "/sasulalogo.png";
import "./App.css";

//start QR CODE SCANNER
function App() {
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
          <Route path="/" element={<Loggin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Loggin" element={<Loggin />} />
            <Route path="/qrcodereader" element={<Scanner />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
//END QR CODE SCANNER

export default App;
