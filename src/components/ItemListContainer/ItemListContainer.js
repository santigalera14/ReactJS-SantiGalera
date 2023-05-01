import { useState, useEffect } from "react"
import {getProducts, getProductsById} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])

    const { categotryId } = useParams ()

    useEffect(() => {
        const asynFunc = categotryId ? getProductsByCategoty : getProducts

        asynFunc(categotryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categotryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer