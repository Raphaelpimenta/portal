import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conteudo from './componentes/conteudo/login'
import NovaSenha from './componentes/novaSenha/newSenha';
import Cadastro from './componentes/cadastro/cadastro';
import Home from './componentes/telaUsuario/home';

function App() {

  return (
    // <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Conteudo/>}/>
        <Route path='/trocaSenha' element={<NovaSenha />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/telaUsuario' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    // </>
  )
}

export default App
