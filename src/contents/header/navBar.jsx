import logo from '../../assets/images/Ecosoma-copia.png';

import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <>
        <nav className="navbar" style={{backgroundColor: "#bcfacc"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/APS-Calculadora-de-Cr-dito-de-Carbono">
                    <img src={logo} alt="Ecosoma" width={100} />
                </a>
                <div>
                    <Link to='/APS-Calculadora-de-Cr-dito-de-Carbono'><button class="btn btn-outline-success me-2" type="button">Calculadora</button></Link>
                    <Link to='/APS-Calculadora-de-Cr-dito-de-Carbono/dedicatoria'><button class="btn btn-outline-success me-2" type="button">Dedicatória</button></Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;