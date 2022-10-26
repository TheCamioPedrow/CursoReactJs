import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (
        <ul>
            <li>
                <a href="#inicio"><h3>Inicio</h3></a>
            </li>
            <li>
                <a href="#novedades"><h3>Novedades</h3></a>
            </li>
            <li>
                <a href="#masVendidos"><h3>Mas Vendidos</h3></a>
            </li>
            <li>
                <a href="#contactanos"><h3>Contactanos</h3></a>
            </li>
            <li>
                <h1>Pa' Jugar</h1>
            </li>
            <CartWidget/>
        </ul>

    )
};

export default NavBar;