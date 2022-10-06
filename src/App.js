import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Saludo from "./components/ItemListContainer/Saludo";
import Counter from "./components/Counter/Counter";
import Titulo from "./components/Titulo/Titulo";
import Effect from "./components/Effect/Effect";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [show, setShow] = useState (true)
  // const handleOnAdd = () => console.log('agregar al carrito')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
                <div style={{ color: "violet" }}>
        <Saludo bienvenida={"BIENVENIDOS A NUESTRO E-COMMERCE"} />
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
       
      {/* <Counter lugar={<Titulo titulo=" Bandejas" text="San Valentin" />}>
        <Titulo titulo=" Bandejas" text="Cumpleaños" /> */}
      {/* <Saludo bienvenida={'Hola desde ItemListContainer'}/> */}
      {/* </Counter>
      <Counter>
        <Titulo titulo=" Juguetes" />
      </Counter> */}
      {/* <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button> */}
      {/* Ejemplo del desafio del contador */}
      {/* <Counter initial={0} stock={5} onAdd={handleOnAdd}/> */}
      
      {/* {show ? <Effect /> : null} */}

    </div>
  );
}


export default App;
