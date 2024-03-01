import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header-bg">
                <div className="header-container">
                    <div className="logo-header">
                        <img src="../img/senai-logo-header.png" alt="Logo Header" />
                        <span className='divisao-header'></span>
                        <h4><span className="first-letter-header">G</span>estão de ativos por <br /><span className="first-letter-header">C</span>ybercompartilhamento</h4>
                    </div>

                    <nav>
                        <ul className="header-menu">
                            <li><Link to="/telaUsuario">Home</Link></li>
                            <li><Link to="/reservas">Reservas</Link></li>
                            <li><Link to="/perfil">Perfil</Link></li>
                            <li><Link to="/">Sair</Link></li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )

}

export default Header