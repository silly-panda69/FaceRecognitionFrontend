import React, { useState } from 'react'

const ModelElement = (props) => {

    const [selectionClass, setSelectionClass] = useState("model-item-unselected")
    function onClickModel () {
        let tmp = [...props.selectedModels]
        if (tmp.includes(props.id)) {
            tmp = tmp.filter(item => item !== props.id)
            setSelectionClass("model-item-unselected")
        }
        else {
            tmp.push(props.id)
            setSelectionClass("model-item-selected")
        }

        props.setSelectedModels(tmp)
    }

  return (
    <>
        <button className={`model-item ${selectionClass}`} onClick={() => onClickModel(props.id)}>{props.name}</button>
    </>
  )
}

export default ModelElement