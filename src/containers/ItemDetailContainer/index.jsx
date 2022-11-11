import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const getCharacterDetail = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const character = await response.json();
            setCharacter(character)
        }

        getCharacterDetail()
    }, [id])

    return (character ? <ItemDetail character={character}/> : <h1>Estamos Cargando, Porfavor espere...</h1> )
};

export default ItemDetailContainer;
