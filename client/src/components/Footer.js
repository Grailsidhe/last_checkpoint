import React, { useState, useContext } from 'react';
import "./css/Footer.css";
import "./css/vivify.min.css";
import AdminLogin from "./AdminLogin";
import {ReactComponent as Linkedin} from "./linkedin.svg";
import {ReactComponent as Github} from "./github.svg";
import {ReactComponent as Instagram} from "./instagram.svg";

export default function Footer() {

    const { token, setToken } = useContext(Context);
    if(!token) {
        return <AdminLogin setToken={setToken} />
    }

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
                <AdminLogin />
            </div>
        </div>

    )
};