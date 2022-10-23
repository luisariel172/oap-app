import './Navbar.css'
import Carrito from '../Carrito/Carrito'
import Logonav from '../Logos/Logonav'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent:'space-around'}}>
            <div>
                <Logonav />
                {/* <h1 style={{color: 'violet'}}>Tienda </h1> */}
            </div>
            <div>
                <Link to={`/category/souvenir`} className='botones'>Souvenirs</Link>
                <Link to={`/category/bandeja`} className='botones'>Bandejas</Link>
                <Link to={`/category/juguete`} className='botones'>Juguetes</Link>
                <Link to={`/category/perfume`} className='botones'>Perfumes</Link> 
            </div>
            <div>
                <Carrito />
            </div>
        </nav>
    )
}

export default Navbar