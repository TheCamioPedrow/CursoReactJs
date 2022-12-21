import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { FormBasic } from "../../components/Form/index";
import './styles.css';

const CartContainer = () => {
    const { products } = useContext(Shop);
    return (
        <div className="paginaCarrito">
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <FormBasic/>
        </div>
    );
};

export default CartContainer;