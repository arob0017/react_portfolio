import React from "react";
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Resume2020 from "../../assets/pdf/Resume2020.pdf"
import "./style.css";

function Navbar() {
    return (

        <header className="header">
            <h1>Amelia Roberts</h1>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Link to="/home"
                        // className={
                        //     window.location.pathname === "/home" ? "active" : ""
                        // }
                        className="homeNav"
                        onClick={() => {
                            window.location.href = "/home";
                        }}
                    >Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/portfolio"
                        // className={
                        //     window.location.pathname === "/portfolio" ? "active" : ""
                        // }
                        className="homeNav"
                        onClick={() => {
                            window.location.href = "/portfolio";
                        }}
                    >Portfolio</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={Resume2020} className="homeNav" target="_blank">Resume</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/contact'
                        // className={
                        //     window.location.pathname === "/contact" ? "active" : ""
                        // }
                        className="homeNav"
                        onClick={() => {
                            window.location.href = "/contact";
                        }}
                    >Contact</Link>
                </Nav.Item>

            </Nav>
            <div className="background-pianokeys-image"></div>
        </header>
    )
}

export default Navbar; 
