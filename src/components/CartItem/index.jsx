import React, { useContext } from 'react'
import { Shop } from '../../contexts/Shop'
import TrashCanIcon from '../TrashCanIcon'
import { Theme } from "../../contexts/Theme";
import './styles.css';

const CartItem = ({item}) => {

    const {themeColor} = useContext(Theme)

    const {removeProduct} = useContext(Shop);

    const handleRemove = () => {
        removeProduct(item.id)
    }

return (
    <div className={themeColor === "light" ? "carrito" : "carrito-dark"} style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        padding: 30,
        gap: 40,
        alignItems: 'center'
    }}>
        <img src ={item.image} width={150} alt='cart-item'/>
        <h1>{item.name}</h1>
        <p>{item.quantity}</p>
        <div style={{width: 30}} onClick={handleRemove}>
            <TrashCanIcon />
        </div>
    </div>
    )
}

export default CartItem