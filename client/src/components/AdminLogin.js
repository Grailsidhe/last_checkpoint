import React, { useState } from "react";
import "./css/Admin.css";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from "react-router-dom";

export default function AdminLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const handleLogin = () => {

    };

    /* Show/Hide password field */
    const showPw = ()=> {
        const pw = document.getElementById("pwbox");
        pw.type === "password" ? pw.type = "text" : pw.type = "password"
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