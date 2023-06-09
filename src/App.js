import Iniciar from "./pages/iniciar/Iniciar";
import Cadastro from "./pages/iniciar/Cadastro";
import Habitos from "./pages/telasUsuario/Habitos";
import Hoje from "./pages/telasUsuario/Hoje";
import Historico from "./pages/telasUsuario/Historico";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuario from "./Usuario";
import { useState } from "react";
import Progresso from "./Progresso";


export default function App() {
  const [informacoesUsuario, setInformacoesUsuario] = useState();
  const [progresso, setProgresso] = useState();
  return (
    <Progresso.Provider value={[progresso, setProgresso]}>
      <Usuario.Provider value={[informacoesUsuario, setInformacoesUsuario]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Iniciar/>}/>
            <Route path="/cadastro" element = {<Cadastro/>}/>
            <Route path="/habitos" element = {<Habitos/>}/>
            <Route path="/hoje" element = {<Hoje/>}/>
            <Route path="/historico" element = {<Historico/>}/>
          </Routes>
        </BrowserRouter>
      </Usuario.Provider>
    </Progresso.Provider>
  );
}
