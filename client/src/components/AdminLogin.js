import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Admin.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

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


// AUTH CODE
    let history = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/adminlogin");
      }
    }, [history]);
  
    const loginHandler = async (e) => {
        e.preventDefault();
    
        const config = {
            header: {
            "Content-Type": "application/json",
            },
        };
    
        try {
            const { data } = await axios.post(
            "/api/auth/login",
            { email, password },
            config
            );
            localStorage.setItem("superAdmin", data.superAdmin)
            localStorage.setItem("authToken", data.token);

            let superAdmin = JSON.parse(localStorage.getItem("superAdmin"));
            if(superAdmin){
                history.push("/admin")
                setTimeout(()=> clearForm(), 1000);
            } else{
                history.push("/")
                setTimeout(()=> clearForm(), 1000);
            }
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(()=>{
            setError("");
        }, 5000)
        }
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
                    <button className="Admin-button" onClick={loginHandler}>LOGIN</button>
            
                    <Link to="/admin">Admin</Link>

                </div>
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
  };