import React from 'react'
import avatar from '../assets/img_avatar.png';

const ImageCard = () => {
  return (
    <>
        <div className="imagecard">
        <div className="card-container">
            <h5>John Doe</h5>
        </div>
        <img className="image" src={avatar} alt="Avatar"/>
    </div>
    </>
  )
}

export default ImageCard