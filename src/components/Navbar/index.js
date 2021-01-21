import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Nav } from 'react-bootstrap'

function Navbar() {
    return (

        <header className="header">
            <h1>Amelia Roberts</h1>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Link href="/home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/portfolio">Portfolio</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="./Resume2020.pdf" target="_blank">Resume</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/contact">Contact</Link>
                </Nav.Item>

            </Nav>
            <div class="background-pianokeys-image"></div>
        </header>
    )
}

export default Navbar; 
