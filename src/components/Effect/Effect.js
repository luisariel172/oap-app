import { useState, useEffect } from "react";

const Effect = () => {
  const [title, setTitle] = useState("Primer Titulo")
  const [count, setCount] = useState(0);
  const handleClick = () => console.log("hice click")
  useEffect(() => {
    console.log('agrego event listener');
    const boton = document.getElementById("boton")
    
    boton.addEventListener("click", handleClick)

    return () => {
      console.log('se desmontara el componente')
      console.log('se elimina el componente')
        boton.removeEventListener("click", handleClick)
    }
  }, []) // si necesito que pase luego de una actualizacion, en el array le agrego el nombre de referencia de lo cual quiero escuchar ese cambio

  console.log("Se renderiza")

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={() => setTitle("Cambio el titulo")}>
        Cambiar Titulo
      </button>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button id="boton">Boton</button>
    </div>
  );
};

export default Effect;
