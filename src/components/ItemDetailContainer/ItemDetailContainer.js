import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    
    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
     
    console.log(product)

    if(loading){
        return <h1>Cargando ...</h1>
    }
    
    return (
        <div>
            <h1>Detalle de producto</h1>
            <div>
                    <h1>{product.name}</h1>
                    <h4>{product.description}</h4>
                    <h2>Precio: $ {product.price}</h2>
                    <h3>Stock: {product.stock} unidades.</h3>
                    <Counter />
                </div>
        </div>
    )
}

export default ItemDetailContainer