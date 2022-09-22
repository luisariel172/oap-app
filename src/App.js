import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Saludo from './components/ItemListContainer/Saludo';
function App() {

  return (
    <div id="1" className="App">
     <Navbar />
     <div style={{color: 'violet'}}>
     <Saludo bienvenida={'BIENVENIDOS A NUESTRO E-COMMERCE'}/>
     </div>
    </div>
  );
}

export default App;
