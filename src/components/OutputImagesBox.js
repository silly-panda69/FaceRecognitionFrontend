import React from 'react'
import SelectedModelBox from './SelectedModelBox'

const OutputImagesBox = () => {

  
  return (
    <>
      <div className="images-container">
        <h5 className='images-container-heading'>Image Name</h5>

        <SelectedModelBox bgClass="bg-orange"></SelectedModelBox>
        <SelectedModelBox bgClass="bg-white"></SelectedModelBox>
        <SelectedModelBox bgClass="bg-orange"></SelectedModelBox>
        <SelectedModelBox bgClass="bg-white"></SelectedModelBox>

      </div>
    </>
  )
}

export default OutputImagesBox