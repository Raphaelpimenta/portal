import React from "react";
import Input from "./input";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <>
            <div className="login">
                <form action="#" className='form-login'>
                    <div className="input">
                        <Input label="Login:" htmlFor="email" id="email" type="text" placeholder='Digite seu e-mail...' />
                    </div>
                    <div className="input">
                        <Input htmlFor="password" label="Senha:" id="password" type="password" placeholder='Digite sua senha...' />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" className="checkbox-input"></input>
                        <label htmlFor="text"><b className='checkbox-label'>Manter-me conectado</b></label>
                    </div>
                    <button className="btn"><Link to="/telaUsuario">Entrar</Link></button>
                    <p>Esqueceu sua senha? <Link to='/trocaSenha'>Clique aqui</Link></p>
                </form>
            </div>
        </>
    )
}

export default Form