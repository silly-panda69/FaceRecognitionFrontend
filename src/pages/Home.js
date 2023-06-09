import React from 'react';
import ImageCard from '../components/ImageCard'
import Browse from '../components/Browse';
import TakePhoto from '../components/TakePhoto';
import Sample from '../components/Sample';
import FileList from '../components/FileList';

function Home() {
  return (
    <>
      <h1 id="home-heading">AI Face Recognition Tool</h1>
      <div style={{marginBottom: "1.5vw", marginLeft: "3vw", marginRight: "3vw"}}>
        <p className="home-para">The advanced facial recognition tool that accurately identifies individuals even with masks on.</p>
        <p className="home-para">Powered by deep learning technology, it offers secure access control and streamlined identification processes.</p>
        <p className="home-para">Experience enhanced security and efficiency.</p>
      </div>
        <div>
          <div className="input-options">
                <Browse></Browse>
                <TakePhoto></TakePhoto>
          </div>
          <div className="input-options">
                <Sample></Sample>
          </div>
          <FileList></FileList>
          <div className="input-options">
                <button className="start-button button-shadow">START</button>
          </div>
        </div>
      <ImageCard></ImageCard>
    </>
  );
}
export default Home