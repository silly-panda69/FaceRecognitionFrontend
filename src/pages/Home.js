import React from 'react';
import { useEffect, useState } from 'react';
import Browse from '../components/Browse';
import TakePhoto from '../components/TakePhoto';
import Sample from '../components/Sample';
import FileList from '../components/FileList';
import Models from '../components/Models';
import OutputImagesBox from '../components/OutputImagesBox';

function Home() {

  const [isMobile, setIsMobile] = useState(false)

  //Detects operating system of the client
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    //Android detection
    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  useEffect(
    () => {
      if (getMobileOperatingSystem() === "unknown") {
        setIsMobile(false)
        console.log("done")
      }
      else {
        setIsMobile(true)
      }
    }
    ,[])

  return (
    <>
      <h1 id="home-heading">AI Face Recognition Tool</h1>
      <div style={{ marginBottom: "1.5vw", marginLeft: "3vw", marginRight: "3vw" }}>
        <p className="home-para">The advanced facial recognition tool that accurately identifies individuals even with masks on.</p>
        <p className="home-para">Powered by deep learning technology, it offers secure access control and streamlined identification processes.</p>
        <p className="home-para">Experience enhanced security and efficiency.</p>
      </div>
      <div>
        <div className="input-options">
          <Browse></Browse>
          {!isMobile && <TakePhoto></TakePhoto>}
        </div>
        <div className="input-options">
          <Sample></Sample>
        </div>
        <FileList></FileList>
        <Models></Models>
        <div className="input-options">
          <button className="start-button button-shadow">START</button>
        </div>
      </div>
      
      <OutputImagesBox></OutputImagesBox>
    </>
  );
}
export default Home