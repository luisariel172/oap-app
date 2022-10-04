import { useState } from "react"

const Counter = () => {
    const inicial = 0
    const [cont, setCont] = useState(inicial)
    //La fn setCont le avisa a React que haga un render
    // useState es el hook, es un estado de React, este estado es un lugar en memoria que
    //me permite guardar un dato y si lo cambio, le avisa a React que tiene que volver
    // a cambiar la interfaz de donde ocurrio el cambio y mostrar el cambio solo donde \
    //hay diferencias
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
<div>
    <h1>{cont}</h1>
    <button onClick={decrement}>Restar</button>
    <button onClick={increment}>Sumar</button>
    <button onClick={reset}>Reset</button>
</div>
)
}

export default Counter