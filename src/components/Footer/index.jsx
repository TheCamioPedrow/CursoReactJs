import React from "react";
import './styles.css';
import facebook from '../imagenes/facebook.jpg'
import instagram from '../imagenes/instagram.jpg'
import twitter from '../imagenes/twitter.jpg'
import steam from '../imagenes/steam.jpg'
import fulcrum from '../imagenes/fulcrum.jpg'

const footer = () => {
    return (
        <ul className="pie__ul">
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
			<li className="pie__ul__li">
				<a className="pie__ul__redes" href="./paginas/contacto.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pagina de Contacto">
					<img className="redes" src={fulcrum} alt="imagen contacto"></img>
				</a>
			</li>
		</ul>
    )
}

export default footer