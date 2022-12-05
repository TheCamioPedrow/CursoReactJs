import React, { useContext, useState } from "react";
import { Theme } from "../../contexts/Theme";
import "./styles.css";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);
    const {themeColor} = useContext(Theme)

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div className={themeColor === "dark" ? "item-count-container-dark" : "item-count-container"}>
        <button onClick={onDecrement} type="button" class="btn btn-success">-</button>
        <span className="botonAtras">{count}</span>
        <button onClick={onPlus} type="button" class="btn btn-success">+</button>
        <button onClick={()=>onAdd(count)} type="button" class="btn btn-success">Confirmar Compra</button>
    </div>;
};

export default ItemCount;
