import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import CartIcon from "../CartIcon";


const CartWidget = () => {
    const navigate = useNavigate();

    const {totalItemsCart} = useContext(Shop);

    return (
        <div 
            style={{
                color: 'white',
                width: 40,
                height:40,
                position: "absolute",
                top: 45,
                right: 60,
            }}
            onClick ={()=> navigate("/cart")}
            >
            <CartIcon/>
            <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span>
        </div>
    );
};


export default CartWidget