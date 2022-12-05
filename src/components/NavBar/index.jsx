import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

    const {themeColor, setThemeColor} = useContext(Theme)

    const handleChange = (event) => {
        setThemeColor(event.target.value)
    }

    return (
        <ul className={themeColor === "light" ? "ul-container" : "ul-container-dark"}
        >
            <li className="li-list">
                <Link to="/">Inicio</Link>
            </li>
            <li className="li-list">
                <Link to="/category/human">Humanos</Link>
            </li>
            <li className="li-list">
                <Link to="/category/alien">Aliens</Link>
            </li>
            <li className="li-list">
                <h1>
                    Pa' Jugar
                </h1>
            </li>
            <div className="select-container">
                <select 
                    value={themeColor} 
                    onChange={handleChange} 
                    className = {themeColor === "dark" ? "theme-select-dark" : "theme-select"}
                >
                    <option value={'light'}>Light</option>
                    <option value={'dark'}> Dark</option>
                </select>
                <CartWidget />
            </div>
        </ul>
    );
};

export default NavBar;
