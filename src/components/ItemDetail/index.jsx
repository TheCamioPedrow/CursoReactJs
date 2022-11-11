import React from 'react';
import './styles.css';

const ItemDetail = ({character}) => {
    console.log(character);
    return (
    <div className='item-detail'>
        <img src={character.image} width={450} alt = "Imagen"/>
        <h2>{character.name}</h2>
        <p>Estado actual: {character.status}</p>
        <p>Genero: {character.gender}</p>
    </div>
    )
}

export default ItemDetail