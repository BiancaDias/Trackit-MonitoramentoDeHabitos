import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";
import excluir from "../../images/lixeira.svg"
import Usuario from "../../Usuario"
import { useContext, useEffect, useState } from "react";
import CriaHabitos from "../../components/CriaHabitos";
import axios from "axios";

export default function Habitos(){
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)
    const [visualizaCriaHabito, setVisualizaCriaHabito] = useState(false) //aciona a tela de criacao
    const [visualizaHabitos, setVisualizaHabitos] = useState(true) //aciona a tela de visualização dos existentes
    const [listaHabitos, setListaHabitos] = useState([]);
    const days = ["D","S","T","Q","Q","S","S"];
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${informacoesUsuario.token}`
        }
    }
    console.log(listaHabitos)
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
        <ContainerHabitos visualizaHabitos={visualizaHabitos}>
            {listaHabitos.map((habito)=>{
            return(
            <HabitosRegistrados data-test="habit-container" key={habito.id}>
                <Container>
                    <p data-test="habit-name">{habito.name}</p>
                    <img data-test="habit-delete-btn" onClick={()=>deletaHabito(habito.id)} src={excluir} alt="deletar habito"/>
                </Container>
                <BotoesAgrupados>
                    {days.map((d, indice) => <Botoes data-test="habit-day" selecionados={habito.days} key={indice} id={indice}>{d}</Botoes>)}
                </BotoesAgrupados>
            </HabitosRegistrados>)
        })}
        </ContainerHabitos>
        </HabitosLayout>
        <Menu/>
    </>)
}

const HabitosLayout = styled.div`
    background-color: #f2f2f2;;
    height: 100vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 18px 70px 18px ;

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



const BotoesAgrupados= styled.div`
    display: flex;
`
const Botoes = styled.div`

    background: ${({selecionados, id})=> selecionados.includes(id) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    color: ${({selecionados, id})=> selecionados.includes(id) ? "#FFFFFF" : "#DBDBDB"};;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-right: 4px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const HabitosRegistrados = styled.div`
    width: 100%;
    height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    margin-bottom: 10px;
`
const ContainerHabitos=styled.div`
    display: ${({visualizaHabitos}) => visualizaHabitos ===false ? "none" : "" };
    margin-top: 20px;
    width: 100%;
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }


`