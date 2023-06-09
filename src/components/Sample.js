import React, { useContext, useEffect, useState } from "react";
import avatar from '../assets/img_avatar.png';
import { FileContext } from "../context/FIleContext";

const Sample = () => {
    const dataId = [123, 234, 345, 456, 567];
    const {data,dispatch}=useContext(FileContext);
    const [isLoading, setIsLoading] = useState(false);
    const [sampleData, setSampleData] = useState();
    const [selectedData,setSelectedData]=useState([]);
    useEffect(() => {
        setSelectedData(selectedData);
    },[selectedData]);
    const handleValue=(index)=>{
        var Arr;
        if(selectedData){
            const arrIndex=selectedData.indexOf(index);
            if(arrIndex===-1){
                // setSelectedData([index,...selectedData]);
                Arr=[index,...selectedData];
            }else if(arrIndex!==-1){
                var indexData=[];
                for(let i=0;i<selectedData.length;i++){
                    if(selectedData[i]!==index){
                        indexData.push(selectedData[i]);
                    }
                }
                Arr=indexData;
            }
        }else{
            Arr=[index];
        }
        setSelectedData(Arr);
        setSampleData('');
    }
    const modalClose=()=>{
        setSelectedData();
    }
    const doneData=()=>{
        var ardata=[];
        for(let i=0;i<selectedData.length;i++){
            console.log()
            ardata.push({name: dataId[selectedData[i]],data: '../assets/img_avatar.png'});
        }
        if(data===null){
            dispatch({type: 'SET_FILES',payload: ardata});
        }else if(data!==null){
            dispatch({type: 'ADD_FILES',payload: ardata});
        }
        setSelectedData();
    }
    const indexCheck=(index)=>{
        if(selectedData){
            for(let i=0;i<selectedData.length;i++){
                if(selectedData[i]===index){
                    return true;
                }
            }
            return false;
        }else{
            return false;
        }
    }
    return (
        <div>
            <div className="input-options">
                <button type="button" data-bs-toggle="modal" data-bs-target="#SampleModal" className="op-button button-shadow">Choose From Samples</button>
            </div>
            <div class="modal fade" id="SampleModal" tabindex="-1" aria-labelledby="SampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" >
                    <div class="modal-content p-3 bg-light" >
                        <div className="d-flex mb-1 justify-content-between align-items-center pb-2">
                            <h5 className="pb-1 m-0">Select any sample images</h5>
                            <button className="btn btn-light btn-sm rounded-circle" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                        {dataId.map((item, index) => {
                            return (
                                <div onClick={()=>{handleValue(index)}}  key={index} className={(indexCheck(index))?"selectedSample d-flex shadow-sm rounded ps-2 pe-3 py-1 mb-2 align-items-center justify-content-between":"unselectedSample d-flex shadow-sm rounded ps-2 pe-3 py-1 mb-2 align-items-center justify-content-between"}>
                                    <div className="d-flex align-items-center">
                                        <img height={"60px"} src={avatar} alt="sample" />
                                        <h4 className="m-0 ms-3">{item}</h4>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="pt-2">
                            <button className="btn btn-sm btn-danger" onClick={modalClose} data-bs-dismiss="modal">Cancel</button>
                            <span className="mx-2"></span>
                            <button className="btn btn-sm btn-success" onClick={doneData} data-bs-dismiss="modal">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sample;