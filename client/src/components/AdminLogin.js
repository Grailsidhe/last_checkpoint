import React, { useState } from "react";
// import axios from "axios";
import "./css/Admin.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from "react-router-dom";
// import Context from './Context';

export default function AdminLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // const { token, setToken } = useContext(Context);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    /* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("pwbox");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
    };

    /* Clears forms and states */
    const clearForm = ()=>{
        const inputs = document.querySelectorAll("input,select,textarea");
        inputs.forEach((item) => (item.value = ""));
        setName(), setEmail(), setSubject(), setMessage(), setSubmit()
    };

    const handleLogin = async (e)=>{
        e.preventDefault();



        // axios.post(`/api/contact`, {username: username, password: password})
        // .then((res)=>{
        //     console.log(res);
        //     setTimeout(()=> clearForm(), 1000);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    };


    return (
        <div className="AdminLogin-wrapper">
            <span className="pointer" variant="primary" onClick={handleShow}>
                Admin
            </span>
    
            <Offcanvas show={show} onHide={handleClose} placement='end' className="AdminLogin-page">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="Admin-wrapper">
                <div className="AdminLogin-title">Log In</div>
                    <div className="AdminLogin-form">
                        <input 
                        className="Admin-input" 
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        />
                        <input 
                        className="Admin-input" 
                        type="password"
                        name="password"
                        id="pwbox"
                        placeholder="password"
                        onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        />
                        <span style={{margin: "0px 20px 0 10px"}}>
                            <input type="checkbox" className="pw-checkbox" onClick={showPw} />&nbsp;Show Password
                        </span>
                    </div>
                    <button className="Admin-button" onClick={handleLogin}>LOGIN</button>
            
                    <Link to="/admin">Admin</Link>

                </div>
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
  };