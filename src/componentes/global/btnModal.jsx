import React from "react";

const ButtonModal = ({setModal}) => {
    return (
        <>
        <a className="mordal-card" onClick={() => setModal(true)}>Mostrar detalhes →</a>
        </>
    )

}

export default ButtonModal