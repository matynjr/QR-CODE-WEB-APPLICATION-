import React from 'react';
import viteLogo from '/sasulalogo.png'
import './App.css'
//importing headers
import Header  from '/assets/components/header.jsx';
import { BrowserMultiFormatReader } from '@zxing/library';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 79vh;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  background:#fff;
  border-radius:10px;
`;

const Heading = styled.h1`
font-size: 1.5rem;
margin-bottom: 1rem;
font-weight: 300;
`;

const ScanButton = styled.button`
padding: 0.75rem 1rem;
font-size: 1rem;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
margin-top: 3rem;
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
      const constraints = { video: { facingMode: 'environment' } };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoRef.current.srcObject = stream;

      codeReader.decodeFromVideoDevice(undefined, this.videoRef.current, (result, err) => {
        if (result) {
          // Handle the QR code result here, e.g., redirect to the scanning application
          window.location.href = result.text;
        }
        if (err) {
          console.error(err);
        }
      });
    } catch (error) {
      console.error('Error accessing camera:', error);
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
          <Header />
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="sasula ku spot logo" />
        </a>
       
      </div>
        <Heading>SCAN QR CODE TO MAKE PAYMENT</Heading>
        <video
          ref={this.videoRef}
          style={{ width: '90%', maxWidth: '400px', borderRadius: '4px' }}
          autoPlay
          playsInline
        />
        <ScanButton onClick={this.startScanner}>Scan QR Code</ScanButton>
        <br/>
        <small>Powered by : Titans team</small>
      </Container>
    );
  }
}

export default App;




