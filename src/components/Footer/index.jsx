import React,{ useContext } from 'react';
import './styles.css';
import { Theme } from "../../contexts/Theme";
import facebook from '../imagenes/facebook.jpg'
import instagram from '../imagenes/instagram.jpg'
import twitter from '../imagenes/twitter.jpg'
import steam from '../imagenes/steam.jpg'

const Footer = () => {

	const {themeColor} = useContext(Theme)

    return (
        <ul className={themeColor === "light" ? "ul-container" : "ul-container-dark"}>
			<li className="pie__ul__li">
				<a className="pie__ul__redes" href="https://www.facebook.com/pedro.rojo3/" data-bs-toggle="tooltip" data-bs-placement="top" title="Mi Cuenta de Facebook">
					<img className="redes" src={facebook} alt="Facebook"></img>
				</a>
			</li>
			<li className="pie__ul__li">
					<a className="pie__ul__redes" href="https://www.instagram.com/thecamiopedrow/?hl=es" data-bs-toggle="tooltip" data-bs-placement="top" title="Mi Cuenta de Instagram">
						<img className="redes" src={instagram} alt="Instagram"></img>
					</a>
			</li>
			<li className="pie__ul__li">
				<a className="pie__ul__redes" href="https://twitter.com/TheCamioPedrow" data-bs-toggle="tooltip" data-bs-placement="top" title="Mi Cuenta de Twitter">
					<img className="redes" src={twitter} alt="Twitter"></img>
				</a>
			</li>
			<li className="pie__ul__li">
				<a className="pie__ul__redes"  href="https://steamcommunity.com/profiles/76561198145935454/" data-bs-toggle="tooltip" data-bs-placement="top" title="Mi Cuenta de Steam">
					<img className="redes" src={steam} alt="Steam"></img>
				</a>
			</li>
		</ul>
    )
}

export default Footer