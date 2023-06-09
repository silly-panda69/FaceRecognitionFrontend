import React, { useState } from "react";

const Login = () => {
    const [toggle,setToggle]=useState(true);
    const toggleSwitch=(current)=>{
        if(current===true){
            setToggle(true);
        }else if(current===false){
            setToggle(false);
        }
    }
    const [fname,setFname]=useState();
    const [femail,setFemail]=useState();
    const [fpassword,setFpassword]=useState();
    const [fcpassword,setFcpassword]=useState();
    const submit=()=>{
        console.log(fname,femail,fpassword,fcpassword);
    }
    return (
        <div className="mt-5 pt-5 d-flex  justify-content-center align-items-center container-fluid">
            {toggle && <div className="d-flex gap-2 shadow rounded rounded-3 flex-column align-items-center bg-light p-4">
                <h4>Signup</h4>
                <div className="d-flex flex-column gap-3">
                    <div className="container-fluid p-0 d-flex border rounded-3 bg-secondary" role="group" aria-label="Basic example">
                        <button onClick={()=>toggleSwitch(false)} className="flex-grow-1 btn-sm btn btn-secondary text-light">Login</button>
                        <button onClick={()=>toggleSwitch(true)} className=" flex-grow-1 btn-sm btn btn-warning text-light">Signup</button>
                    </div>
                    <input value={fname} onChange={(e)=>{setFname(e.target.value)}} className="form-control" type="text" placeholder="Name"/>
                    <input value={femail} onChange={(e)=>{setFemail(e.target.value)}} className="form-control" type="email" placeholder="Email Address"/>
                    <input value={fpassword} onChange={(e)=>{setFpassword(e.target.value)}} className="form-control" type="password" placeholder="Password"/>
                    <input value={fcpassword} onChange={(e)=>{setFcpassword(e.target.value)}} className="form-control" type="text" placeholder="Confirm Password"/>
                    <button onClick={submit} className="btn btn btn-warning text-white">Signup</button>
                    <p className="m-0 p-0">Already have an account? <span style={{cursor: 'pointer'}} onClick={()=>toggleSwitch(false)} className="text-primary">Login</span></p>
                </div>
            </div>}
            {!toggle && <div className="d-flex gap-1 shadow rounded rounded-3 flex-column align-items-center bg-light p-4">
                <h4>Login</h4>
                <div className="d-flex flex-column gap-3">
                    <div className="container-fluid p-0 d-flex border rounded bg-secondary" role="group" aria-label="Basic example">
                        <button onClick={()=>toggleSwitch(false)} className="flex-grow-1 btn-sm btn btn-warning text-light">Login</button>
                        <button onClick={()=>toggleSwitch(true)} className=" flex-grow-1 btn-sm btn btn-secondary text-light">Signup</button>
                    </div>
                    <input className="form-control" type="email" placeholder="Email Address"/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <button className="btn btn btn-warning text-white">Signup</button>
                    <p className="m-0 p-0">Don't have an account? <span onClick={()=>toggleSwitch(true)} style={{cursor: 'pointer'}} className="text-primary">Signup</span></p>
                </div>
            </div>}
        </div>
    );
}
 
export default Login;