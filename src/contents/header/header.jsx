import logo from '../../assets/images/Ecosoma-copia.png';

function Header () {
    return (
        <>
        <nav className="navbar" style={{backgroundColor: "#bcfacc"}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Ecosoma" 
                        style={{width: '15%',}}
                    />
                </a>
            </div>
        </nav>
        <div className="text-center"
            style={{
                backgroundColor: "#7ab562",
                borderRadius: "10px",
                color: "#FFFFFF",
                margin: "1rem 0.5rem",
                padding: "0.5rem 0.5rem"
            }}
        >
            <h1>NPS - Calculadora de Crédito de carbono</h1>
            <p>Pelos Alunos: DOUGLAS SILVA DE SOUZA, LEANDRO SANTOS PEREIRA , VITOR DA PAIXÃO, VITORIA GOES CRUZ e WENDEL GUSTAVO DA SILVA BRITO</p>
        </div>
        </>
    )
}

export default Header;