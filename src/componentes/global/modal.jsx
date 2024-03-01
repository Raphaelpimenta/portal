import React from "react";

const Modal = ({modal, setModal}) => {

    if(modal === true) {
        return (
            <>
            <section className="modal-bg">

                <div className="conteiner-modal">
                    <div className="modal-header">
                        <h1 className="titulo-modal">Planta smart 4.0 - SENAI Vila Mariana</h1>
                        <button className="btn-fecharModal" onClick={() => setModal(false)}>X</button>
                    </div>

                    <div className="modal-conteudo">
                        <div className="modal-img">
                            <img src="../../img/modal-img-1.png" alt="Imagem modal 1" />
                            <img src="../../img/modal-img-2.png" alt="Imagem modal 2" />
                            <img src="../../img/modal-img-3.png" alt="Imagem modal 3" />
                        </div>

                        <div className="texto-modal">

                            <p><b>O que é a planta:</b> A Planta Smart 4.0 do SENAI Vila Mariana é um ambiente de aprendizagem que simula uma linha de produção automatizada, utilizando tecnologias de Indústria 4.0. A planta é composta por quatro áreas principais: estoque, processo, montagem e expedição. Cada área tem um papel específico no processo produtivo.</p>

                            <ul className="modal-list">
                                <li>
                                    <p>Na área de estoque, os materiais necessários para a produção são armazenados e gerenciados de forma automatizada, utilizando sistemas de controle e sensores que monitoram a entrada e saída dos materiais. Na área de processo, a matéria-prima é transformada em produtos acabados, utilizando tecnologias avançadas como robôs, impressoras 3D e sistemas de visão computacional.</p>
                                </li>
                                <li>
                                    <p>Na área de montagem, os produtos são montados e testados, utilizando sistemas de automação e controle de qualidade. Por fim, na área de expedição, os produtos acabados são embalados e enviados para os clientes, utilizando sistemas de logística avançados.</p>
                                </li>
                                <li>
                                    <p>A Planta Smart 4.0 do SENAI Vila Mariana é uma excelente ferramenta de aprendizado para estudantes e profissionais da área de automação, permitindo que eles conheçam de perto as tecnologias e processos utilizados na Indústria 4.0 e estejam preparados para atuar em um mercado cada vez mais competitivo e tecnológico.</p>
                                </li>
                            </ul>

                            <p><b>Data de inauguração:</b> 13/04/2023</p>

                            <p><b>Localização:</b> SENAI “Anchieta” - CFP. 109</p>
                        </div>

                    </div>

                </div>
            </section>
            </>

        )
    }

}

export default Modal