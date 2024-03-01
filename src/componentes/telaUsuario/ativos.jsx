import React from "react";
import Modal from "../global/modal";
import ButtonModal from "../global/btnModal";

const Ativos = () => {
    const [modal, setModal] = React.useState(false)

    return (
        <>

        <section className="container-ativos">
            <div className="ativos-top">
                <h1 className="titulo-ativos">Ativos</h1>

                <div class="container-input">
                    <input type="text" placeholder="Pesquisar..." name="text" class="input-pesquisa" />
                    <input className="input-submit" value=" " type="submit" />
                </div>
            </div>

            <main className="ativos">
                <ul className="ativos-card">
                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir'>Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir'>Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir'>Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir' href="#">Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir' href="#">Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                    <li className="card-conteudo">
                        <img src="../../img/icon-card-1.png" alt="Card - Planta smart 4.0" />
                        <div className="card-texto">
                            <h2>Planta smart 4.0 - SENAI Vila Mariana</h2>
                            <div className="card-btns">
                                <Modal modal={modal} setModal={setModal} />
                                <ButtonModal setModal={setModal}/>
                                {/* <a className="mordal-card" data-modal='abrir' href="#">Mostrar detalhes →</a> */}
                                <a className="btn-reserva" href="/reservas">Reservar</a>
                            </div>
                        </div>
                    </li>

                </ul>

            </main>

        </section>
        </>
    )
}

export default Ativos