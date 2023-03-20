import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";

import Usuario from "../../Usuario"
import { useContext, useEffect, useState } from "react";
import CriaHabitos from "../../components/CriaHabitos";
import axios from "axios";
import ExibeHabitos from "../../components/ExibeHabitos";

export default function Habitos(){
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)
    const [visualizaCriaHabito, setVisualizaCriaHabito] = useState(false) //aciona a tela de criacao
    const [visualizaHabitos, setVisualizaHabitos] = useState(true) //aciona a tela de visualização dos existentes
    const [listaHabitos, setListaHabitos] = useState([]);
    
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${informacoesUsuario.token}`
        }
    }
  
    useEffect(()=>{
        const promisse = axios.get(url, config);
        promisse.then(e => {
            setListaHabitos(e.data);
        });
        promisse.catch(e =>{
            alert(e);
        });
    }, [])
    
    function addHabito(){
        setVisualizaHabitos(false)
        setVisualizaCriaHabito(true);
    }

    function cancelaAddHabito(){
        setVisualizaHabitos(true)
        setVisualizaCriaHabito(false);
    }

    function deletaHabito(id){
        let confirmaDelete = window.confirm("Certeza que deseja deletar o habito?")
        if(confirmaDelete){
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
            setListaHabitos(listaHabitos.filter(habito => habito.id !== id))
        }
    }
    return(
    <>
        <Topo/>
        <HabitosLayout>
            <TopoPagina>
                <h1>Meus hábitos</h1>
                <button data-test="habit-create-btn" onClick={addHabito}>+</button>
            </TopoPagina>
            <CriaHabitos visualizaCriaHabito={visualizaCriaHabito} setVisualizaCriaHabito={setVisualizaCriaHabito} cancelaAddHabito={cancelaAddHabito} setVisualizaHabitos={setVisualizaHabitos} listaHabitos={listaHabitos} setListaHabitos={setListaHabitos} />

            {listaHabitos.length === 0 && <Mensagem>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem>}
            <ExibeHabitos deletaHabito={deletaHabito} listaHabitos={listaHabitos} visualizaHabitos={visualizaHabitos}/>
        </HabitosLayout>
        <Menu/>
    </>)
}

const HabitosLayout = styled.div`
    background-color: #f2f2f2;
    height: calc(100vh - 70px); 
    padding-top: 98px;
    padding-left: 17px;
    padding-right: 17px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: auto; 

`
const TopoPagina = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1{
        color: #126BA5;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
    }
    button{
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 40px;
        height: 35px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
    }
`

const Mensagem = styled.div`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 29px;
`