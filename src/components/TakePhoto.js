import React,{useState,useRef, useContext, useEffect} from "react";
import { FileContext } from "../context/FIleContext";
import Toast from "./Toast";
import * as bootstrap from 'bootstrap';

const TakePhoto = () => {
    const {data,dispatch}=useContext(FileContext);
    const [camData, setCamData] = useState();
    const [camStream,setCamStream]=useState();
    const [access,setAccess]=useState(false);
    const [photNum,setPhotoNum]=useState(1);
    const videoBox = useRef(null);
    const canvasRef = useRef(null);
    const toastRef= useRef(null);
    const modalRef=useRef(null);
    useEffect(()=>{
        modalRef.current.addEventListener('hidden.bs.modal',modalClose);
    });
    const modalClose=()=>{
        setCamData();
        if(camStream){
            camStream.getTracks().forEach(track=>track.stop());
        }
        setCamStream();
    }
    const showToast=()=>{
        const toastBs=bootstrap.Toast.getOrCreateInstance(toastRef.current);
        toastBs.show();
    }
    const startCamera = async() => {
        setCamData();
        setCamStream();
        try{
            let streamData=await navigator.mediaDevices.getUserMedia({ video: true });
            videoBox.current.srcObject = streamData;
            setCamStream(streamData);
            setAccess(true);
        }catch(err){
            showToast();
            setAccess(false);
        }
    }
    const takePicture = () => {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoBox.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const data = canvasRef.current.toDataURL('image/png');
        setCamData(data);
        if(camStream){
            camStream.getTracks().forEach(track=>track.stop());
        }
    }
    const retakePicture=()=>{
        startCamera();
    }
    const DoneTakingPic=()=>{
        if(data===null){
            dispatch({type: 'SET_FILES',payload: [{name: 'Captured',data: camData}]});
        }else if(data!==null){
            dispatch({type: 'ADD_FILES',payload: {name: 'Captured ('+photNum+')',data: camData}});
        }
        setPhotoNum(photNum+1);
        if(camStream){
            camStream.getTracks().forEach(track=>track.stop());
        }
    }
    const CancelTakingPic=()=>{
        if(camStream){
            camStream.getTracks().forEach(track=>track.stop());
        }
    }
    return (
        <div>
            <Toast toastRef={toastRef} msg={"Camera access denied !"}></Toast>
                <button type="button" onClick={startCamera}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal" className="op-button button-shadow">Take A Photo</button>
                <div class="modal fade" ref={modalRef} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" >
                    <div class="modal-content p-3 bg-light" >
                        {!camData && (
                            <video height={"300px"} width={'100%'} className=" bg-dark rounded rounded-2" ref={videoBox} autoPlay></video>
                        )}
                        {camData && (
                            <img height={"300px"}  className="rounded rounded-2" src={camData} alt="captured" />
                        )}
                        {!camData && (
                            <div className="pt-2">
                                {access && <button className="btn btn-sm btn-success" onClick={takePicture}>Take a snap</button>}
                                {!access && <button className="btn btn-sm btn-success" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    Take a snap
                                </button>}
                                <span className="mx-2"></span>
                                <button className="btn btn-sm btn-danger" onClick={CancelTakingPic} data-bs-dismiss="modal">Cancel</button>
                            </div>
                        )}
                        {camData && (
                            <div className="pt-2">
                                <button className="btn btn-sm btn-danger" onClick={retakePicture}>Retake</button>
                                <span className="mx-2"></span>
                                <button className="btn btn-sm btn-success" onClick={DoneTakingPic} data-bs-dismiss="modal">Done</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
}
 
export default TakePhoto;