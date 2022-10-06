import { useState } from "react"
//import Titulo from "../Titulo/Titulo"

const Counter = ({ children, lugar, stock } ) => {
    const inicial = 0
    const [cont, setCont] = useState(inicial)
    //La fn setCont le avisa a React que haga un render
    // useState es el hook, es un estado de React, este estado es un lugar en memoria que me permite guardar un dato y si lo cambio, le avisa a React que tiene que volver a cambiar la interfaz de donde ocurrio el cambio y mostrar el cambio solo donde hay diferencias.
console.log(children)

    const decrement = () => {
        if (cont > 0) {
            setCont(cont - 1)    
        }
    }

    const increment = () => {
        setCont(cont + 1)
           
    }

    const reset = () => {
        setCont(inicial)
    }
return (
    //se pasa el componente children para que el padre lo pueda mostrar
<div>
    {/* <Titulo titulo='Esto es desde Counter'/> */}
    {children}
    <h1>{cont}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={reset}>Reset</button>
    <button onClick={reset}>Agregar al Carrito</button>
    {lugar}
    
</div>
)
}

export default Counter