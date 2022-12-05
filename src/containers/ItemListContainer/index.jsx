import React from "react";
import "./styles.css";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

export default function ItemListContainer() {

    const { categoryId } = useParams();
    const [data, error, loading] = useFirebase(categoryId)

    return (
        <>
            {(data.length && !loading &&!error)
            ? <ItemList products={data} />
            : error
            ? <h1>{error}</h1>
            : loading
                ? <h1>Hola estoy Cargando</h1>
                : null
            }
        </>
    );
}
