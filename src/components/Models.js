import React from 'react'
import { useState, useEffect } from 'react'
import ModelElement from './ModelElement'

// JS Object that we get from model is :
// {
//     id: ""
//     name: ""
// }

const Models = () => {

    const [modelArray, setModelArray] = useState([])
    const [selectedModels, setSelectedModels] = useState([])

    useEffect(() => {
        //start of setting Sample models
        const sampleArr = [];
        function setSampleArray() {
            for (let i = 1; i <= 50; i++) {
                sampleArr.push({
                    name: `model_${i}`,
                    id: Math.random().toString(36).substring(2, 10)
                });
            }
        }
        setSampleArray()
        setModelArray(sampleArr)
        //end of setting sample models

    }, [])

    return (
        <>
            <div className="model-container">
                <div className="model-heading">Select Models</div>
                <div className="model-list">
                    {
                        modelArray.map((element)=>{
                            return <ModelElement key={element.id} name={element.name} id={element.id} selectedModels={selectedModels} setSelectedModels={setSelectedModels}></ModelElement>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Models

//onClick={()=>{console.log("clicked " + element.id)}}