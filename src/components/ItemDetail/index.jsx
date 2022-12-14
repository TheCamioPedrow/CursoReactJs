import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import { Theme } from "../../contexts/Theme";
import ItemCount from "../ItemCount";
import "./styles.css";

const ItemDetail = ({ character }) => {

    const {addProduct} = useContext(Shop);
    const {themeColor} = useContext(Theme)

    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate();

    const confirmPurchase = (quantity) => {
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity);
    };

    const handleNavigate = () => {
        navigate('/cart')
    }

    return (
        <div className={ themeColor === "dark" ? "item-detail-dark" : "item-detail"} >
            <img src={character.image} width={500} alt="detail" />
            <div className="texts">
                <h1>Nombre: {character.name}</h1>
                <h2>Genero: {character.gender}</h2>
                <h2>Precio: ${character.price}</h2>
            </div>
            <div className="compra">
                {quantityItemDetail ? 
                <button className="btn btn-success" onClick={handleNavigate}>Al Carrito</button>
            : 
                <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
            }
            </div>
        </div>
    );
};

export default ItemDetail;