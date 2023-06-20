import React, { useRef, useState } from "react";

const Login = () => {
    const [toggle,setToggle]=useState(true);
    const [error,setError]=useState();
    const btnRef=useRef(null);
    const contRef1=useRef(null);
    const contRef2=useRef(null);
    const toggleSwitch=(current)=>{
        if(current===true){
            setToggle(true);
            btnRef.current.style.left="0px";
        }else if(current===false){
            setToggle(false);
            btnRef.current.style.left="143px";
        }
        setError();
        setFcpassword();
        setFemail();
        setFname();
        setFpassword();
    }
    const [fname,setFname]=useState();
    const [femail,setFemail]=useState();
    const [fpassword,setFpassword]=useState();
    const [fcpassword,setFcpassword]=useState();
    const SignSubmit=(e)=>{
        e.preventDefault();
        setError();
        if(fpassword!==fcpassword){
            setError('Passwords Match Error');
        }
        console.log({name: fname,email: femail,password: fpassword});
    }
    const LogSubmit=(e)=>{
        e.preventDefault();
        setError();
        console.log({email: femail,password: fpassword});
    }
    return (
        <div className="btn-wrapper-super mt-4 pb-5 pt-5 d-flex justify-content-center align-items-center container-fluid">
            <div  className="d-flex gap-2 shadow rounded rounded-3 flex-column align-items-center bg-light p-4">
                {!toggle && <h4>Signup</h4>}
                {toggle && <h4>Login</h4>}
                <div className="d-flex flex-column gap-3">
                   <div className="d-flex justify-content-center btn-wrapper">
                        <button  onClick={()=>{toggleSwitch(true);}} className={toggle?"btn-offswitch flex-grow-1":"btn-onswitch flex-grow-1"}>Login</button>
                        <button onClick={()=>{toggleSwitch(false);}} className={toggle?"btn-onswitch flex-grow-1":"btn-offswitch flex-grow-1"}>Signup</button>
                        <div ref={btnRef} onClick={()=>{
                            toggleSwitch(toggle);
                        }} className="glider"></div>
                   </div>
                    {!toggle && <div ref={contRef1} className="signup-container">
                        <form className="d-flex flex-column gap-3" onSubmit={(e)=>{SignSubmit(e)}}>
                            <input value={fname} onChange={(e)=>{setFname(e.target.value)}} className="form-control" type="text" placeholder="Name" required/>
                            <input value={femail} onChange={(e)=>{setFemail(e.target.value)}} className="form-control" type="email" placeholder="Email Address" required/>
                            <input value={fpassword} onChange={(e)=>{setFpassword(e.target.value)}} className="form-control" type="password" placeholder="Password" required/>
                            <input value={fcpassword} onChange={(e)=>{setFcpassword(e.target.value)}} className="form-control" type="password" placeholder="Confirm Password" required/>
                            {error && <div class="m-0 p-2 alert alert-danger d-flex align-items-center" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        {error}
                                </div>
                            }
                            <button type="submit" style={{backgroundColor: '#ffa805'}} className="p-1 rounded border-0 text-white">Signup</button>
                        </form>
                        <p className="m-0 p-0 pt-3">Already have an account? <span style={{cursor: 'pointer'}} onClick={()=>toggleSwitch(false)} className="text-primary">Login</span></p>
                    </div>}
                    {toggle && <div ref={contRef2} className="login-container">
                        <form  onSubmit={(e)=>{LogSubmit(e)}} className="d-flex flex-column gap-3">
                            <input className="form-control" onChange={(e)=>{setFemail(e.target.value)}} type="email" placeholder="Email Address" required/>
                            <input className="form-control"  onChange={(e)=>{setFpassword(e.target.value)}} type="password" placeholder="Password" required/>
                            {error && <div class="m-0 p-2 alert alert-danger d-flex align-items-center" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        {error}
                                </div>
                            }
                            <button type="submit" style={{backgroundColor: '#ffa805'}} className="p-1 rounded border-0 text-white">Login</button>
                        </form>
                        <p className="m-0 p-0 pt-3">Don't have an account? <span onClick={()=>toggleSwitch(true)} style={{cursor: 'pointer'}} className="text-primary">Signup</span></p>
                    </div>}
                </div>
            </div>
        </div>
    );
}
 
export default Login;