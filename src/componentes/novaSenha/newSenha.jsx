import React from "react";
import Logo from "../global/logo";
import Input from "../form/input";

const NovaSenha = () => {
    return (
        <>
        <main className="bg-login">
            <Logo />
            <section className="form-trocaSenha">
                <div className="login">
                    <h1 className="titulo-trocaSenha">Troca de senha</h1>
                    <form action="#" className='form-login'>
                        <div className="input">
                            <Input label="NIF:" htmlFor="nif" id="nif" type="text" placeholder='Digite seu NIF...'/>
                        </div>
                        <div className="input">
                            <Input label="Nova senha:" htmlFor="senha" id="senha" type="password" placeholder='Digite sua nova senha...' />
                        </div>
                        <div className="input inputSenha">
                            <Input label="Confirmação de senha:" htmlFor="novaSenha" id="novaSenha" type="password" placeholder='Digite sua nova senha...'/>
                        </div>
                        <button className="btn"><a href="#">Trocar senha</a></button>
                    </form>
                </div>
            </section>
        </main>
        </>
    )
}

export default NovaSenha