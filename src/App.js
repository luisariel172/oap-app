import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Saludo from "./components/ItemListContainer/Saludo";
import Counter from "./components/Counter/Counter";
import Titulo from "./components/Titulo/Titulo";
import Effect from "./components/Effect/Effect";

function App() {
  const [show, setShow] = useState (true)
  
  const handleOnAdd = () => console.log('agregar al carrito')

  return (
    <div id="1" className="App">
      {/* <Navbar />
      <div style={{ color: "violet" }}>
        <Saludo bienvenida={"BIENVENIDOS A NUESTRO E-COMMERCE"} />
      </div> */}
      {/* <Counter lugar={<Titulo titulo=" Bandejas" text="San Valentin" />}>
        <Titulo titulo=" Bandejas" text="Cumpleaños" /> */}
      {/* <Saludo bienvenida={'Hola desde ItemListContainer'}/> */}
      {/* </Counter>
      <Counter>
        <Titulo titulo=" Juguetes" />
      </Counter> */}
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
      {/* Ejemplo del desafio del contador */}
      {/* <Counter initial={0} stock={5} onAdd={handleOnAdd}/> */}
      
      {show ? <Effect /> : null}

    </div>
  );
}

export default App;
