import { useState, useEffect } from "react"
import { getProducts } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState (true)

    const { categoryId } = useParams()

    useEffect(() => {
        
        setCargando(true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => {
            setCargando(false)
        })
    }, [categoryId])
    console.log(products)

    if(cargando) {
        return <h1>Cargando productos ...</h1>
    }

    return(
        <div>
            <h1>Todos nuestros productos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer