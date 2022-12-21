import React, { useContext } from "react";
import { Theme } from "../../contexts/Theme";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { FormBasic } from "../../components/Form/index";
import './styles.css';

const CartContainer = () => {
    const {themeColor} = useContext(Theme)
    const { products } = useContext(Shop);
    return (
        <div className={themeColor === "light" ? "paginaCarrito" : "paginaCarrito-dark"}>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <FormBasic/>
        </div>
    );
};

export default CartContainer;