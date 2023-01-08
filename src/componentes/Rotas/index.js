import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from "../paginas/PaginaInicial";
import PaginaFrontEnd from "../paginas/PaginaFrontEnd";
import PaginaBackEnd from "../paginas/PaginaBackEnd";
import StateHook from "../paginas/StateHook";
import PaginaProdutos from "../paginas/produtos"

const Rotas = () => (
    <BrowserRouter>
        <Routes>
      <Route exact path='/'   element={<PaginaInicial/>}/>
      <Route path='/front-end' element={<PaginaFrontEnd/>}/>
      <Route path='/back-end'  element={<PaginaBackEnd/>}/>
      <Route path='/StateHook'  element={<StateHook/>}/>
      <Route path='/produtos'  element={<PaginaProdutos/>}/>
    </Routes>
    </BrowserRouter>
);

export default Rotas;