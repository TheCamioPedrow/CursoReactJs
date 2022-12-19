import React,{ useContext } from "react";
import Item from "../Item";
import './styles.css';
import { Theme } from "../../contexts/Theme";

//Se encarga de hacer el map con los productos
const ItemList = ({ products }) => {

    const {themeColor} = useContext(Theme)

    return (
        <div className={themeColor === "light" ? "item-list-container" : "item-list-container-dark"}>
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;
