import React from 'react';
import ImageCard from './ImageCard'

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
                <button className="op-button button-shadow">Browse/Upload</button>
                <button className="op-button button-shadow">Take A Photo</button>
          </div>
          <div className="input-options">
                <button className="op-button button-shadow">Choose From Samples</button>
          </div>
          <div className="input-options">
                <button className="start-button button-shadow">START</button>
          </div>
        </div>
      <ImageCard></ImageCard>
    </>
  );
}
export default Home