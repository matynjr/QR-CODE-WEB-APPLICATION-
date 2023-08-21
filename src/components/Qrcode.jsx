import { useEffect, useState } from "react";
import "../App.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import Menu from "../Menu";

//start QR CODE SCANNER
function Scanner() {
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
    <>
             <Menu />
      <h4>Scan Parking code to make payment</h4>

      {scanResult ? (
        <div>
          success : <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
   </>
  );
}
//END QR CODE SCANNER

export default Scanner;
