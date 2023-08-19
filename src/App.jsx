import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Signup from "./Signup";
import Loggin from "./Loggin";
import Faqs from "./Faqs";
import viteLogo from "/sasulalogo.png";
import "./App.css";
import { BrowserMultiFormatReader } from "@zxing/library";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background: #fff;
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 12px;
  margin-bottom: 1rem;
  font-weight: 300;
  color: #000;
`;

const ScanButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: 12px;
  background-color: #0e0e57;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.startScanner();
  }

  componentWillUnmount() {
    this.stopScanner();
  }

  startScanner = async () => {
    const codeReader = new BrowserMultiFormatReader();
    try {
      const constraints = { video: { facingMode: "environment" } };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoRef.current.srcObject = stream;

      codeReader.decodeFromVideoDevice(
        undefined,
        this.videoRef.current,
        (result, err) => {
          if (result) {
            // Handle the QR code result here, e.g., redirect to the scanning application
            window.location.href = result.text;
          }
          if (err) {
            console.error(err);
          }
        }
      );
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  stopScanner = () => {
    // Stop the scanner if it's running
    const codeReader = new BrowserMultiFormatReader();
    codeReader.reset();
  };

  render() {
    return (
      <Container>
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
        <Heading>SCAN QR CODE TO MAKE PAYMENT</Heading>
        <video
          ref={this.videoRef}
          style={{ width: "90%", maxWidth: "400px", borderRadius: "4px" }}
          autoPlay
          playsInline
        />
        <ScanButton onClick={this.startScanner}>Scan QR Code</ScanButton>
        <br />
        <small className="footer-text">Powered by : Titans team</small>
      </Container>
    );
  }
}

export default App;
