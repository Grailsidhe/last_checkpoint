import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./css/Footer.css";
import "./css/vivify.min.css";
import AdminLogin from "./AdminLogin";
// import Context from './Context';
import {ReactComponent as Linkedin} from "./linkedin.svg";
import {ReactComponent as Github} from "./github.svg";
import {ReactComponent as Instagram} from "./instagram.svg";
import useToken from './useToken';

export default function Footer() {

    // const { token, setToken } = useContext(Context);
    const { token, setToken } = useToken();

    const adminLogin = ()=> {
        if(!token) {
            return <AdminLogin setToken={setToken} />
        } else {
            return <Link to="/admin">Admin</Link>
        }
    };

    return (
        <div className="Footer-wrapper vivify swoopInBottom">
            <div className="Footer-detail">
            © 2021 L. A.
            </div>
            <div className="Footer-social">
                <a href="https://www.linkedin.com/in/lorianne-aguilar/" target="new"><Linkedin alt="Github" className="Footer-link" /></a>
                <a href="https://github.com/Grailsidhe" target="new"><Github alt="Linkedin" className="Footer-link" /></a>
                <a href="https://www.instagram.com/dev.lorianne" target="new"><Instagram alt="Instagram" className="Footer-link" /></a>
            </div>
            <div className="Footer-detail">
                {adminLogin()}
            </div>
        </div>

    )
};