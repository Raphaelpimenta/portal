import React from "react";
import Logo from "../global/logo";
import Input from "../form/input";
// import DropdownOptions from "./filtro/options";

const Cadastro = () => {
    return (
        <>
        <main className="bg-login">

            <Logo />

            <section className="form-cadastro">
                <div className="cadastro">
                    <h1 className="titulo-cadastro">Cadastro</h1>
                    <form action="#" className='form-login'>
                        <div className="divisao-input">
                            <div className="input">
                                <Input label="E-mail Corporativo:" htmlFor="email" id="email" type="text" placeholder='Digite seu e-mail...'/>
                            </div>
                            <div className="input">
                                <Input label="Nome Completo:" htmlFor="name" id="name" type="text" placeholder='Digite seu nome completo...'/>
                            </div>
                            <div className="input">
                                <Input label="Cargo:" htmlFor="cargo" id="cargo" type="text" placeholder='Selecione seu cargo...'/>
                            </div>
                            <div className="input">
                                <Input label="NIF:" htmlFor="nif" id="nif" type="text" placeholder='Digite seu NIF...'/>
                            </div>
                        </div>
                        <div className="input">
                            <Input label="CFP (CENTRO DE FORMAÇÃO PROFISSIONAL):" htmlFor="cfp" id="cfp" type="text" placeholder='Digite seu NIF...'/>
                            {/* <DropdownOptions label="CFP (CENTRO DE FORMAÇÃO PROFISSIONAL):" htmlFor="cfp" id="cfp" type="text" placeholder='Selecione em qual CFP está localizado...'/> */}
                        </div>
                        <div className="divisao-input">

                            <div className="input">
                                <Input label="Senha:" htmlFor="senha" id="senha" type="password" placeholder='Digite sua nova senha...' />
                            </div>
                            <div className="input">
                                <Input label="Repetir senha:" htmlFor="senha-repetida" id="senha-repetida" type="password" placeholder='Digite sua senha novamente...'/>
                            </div>
                        </div>
                        <button className="btn"><a href="#">Cadastrar</a></button>
                    </form>
                </div>
            </section>
        </main>

        </>
    )
}

export default Cadastro