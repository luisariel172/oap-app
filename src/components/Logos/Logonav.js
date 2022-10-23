import logonav from './assets/logo-oap.svg'
import { Link } from 'react-router-dom'

const Logonav = () => {
    return (
        <div>
            <Link to="/"><img src= {logonav} alt='logonav'/></Link>
        </div>
    )
}

export default Logonav