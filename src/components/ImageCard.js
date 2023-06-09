import React from 'react'
import avatar from '../assets/img_avatar.png';

const ImageCard = () => {
  return (
    <>
        <div className="imagecard">
        <div className="card-container">
            <h3>John Doe</h3>
        </div>
        <img className="image" src={avatar} alt="Avatar"/>
    </div>
    </>
  )
}

export default ImageCard