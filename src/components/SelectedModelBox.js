import React from 'react'
import ImageCard from './ImageCard'

const SelectedModelBox = (props) => {
  return (
    <>
        <div className={`selected-models-box ${props.bgClass}`}>
            <h5 className="selected-models-box-heading">Model Name</h5>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
                <ImageCard></ImageCard>
            </div>


        </div>
    </>
  )
}

export default SelectedModelBox