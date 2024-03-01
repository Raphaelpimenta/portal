import React from "react";
import Logo from "../global/logo";
import TextoApresentacao from "./conteudoTexto";
import Form from "../form/form";
import { Link } from "react-router-dom";

const Conteudo = () => {
    return (
        <>
        <main className="bg-login">

            <Logo />
            <div className="conteudo">
                <TextoApresentacao/>
                <section >
                    <Form />

                    <div className='cadastro-texto'>
                        <p>Não possui cadastro?</p>
                        {/* <button className="btn-cadastro"><a href="/cadastro">Cadastre-se!</a></button> */}
                        <button className="btn-cadastro">
                            <Link to="/cadastro">Cadastre-se!</Link>
                        </button>
                        
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}

export default Conteudo