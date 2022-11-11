import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    return (
        <ul className="pepe">
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/category/human">Humanos</Link>
            </li>
            <li>
                <Link to="/category/alien">Aliens</Link>
            </li>
            <li>
                <h1>
                    Pa' Jugar
                </h1>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
