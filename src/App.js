import Iniciar from "./pages/iniciar/Iniciar";
import Cadastro from "./pages/iniciar/Cadastro";
import Habitos from "./pages/telasUsuario/Habitos";
import Hoje from "./pages/telasUsuario/Hoje";
import Historico from "./pages/telasUsuario/Historico";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Iniciar/>}/>
        <Route path="/cadastro" element = {<Cadastro/>}/>
        <Route path="/habitos" element = {<Habitos/>}/>
        <Route path="/hoje" element = {<Hoje/>}/>
        <Route path="/historico" element = {<Historico/>}/>
      </Routes>
    </BrowserRouter>
  );
}
