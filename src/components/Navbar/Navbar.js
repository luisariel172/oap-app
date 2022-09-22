import './Navbar.css'
import Carrito from '../Carrito/Carrito'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent:'space-around'}}>
            <div>
                <h1 style={{color: 'violet'}}>Tienda Ojo al Piojo</h1>
            </div>
            <div>
                <button className='botones'>Souvenirs</button>
                <button className='botones'>Bandejas</button>
                <button className='botones'>Jugetes</button>
                <button className='botones'>Perfumes</button>
                <button className='botones'>Ropa</button>
            </div>
            <div>
                <Carrito />
            </div>
        </nav>
    )
}

export default Navbar