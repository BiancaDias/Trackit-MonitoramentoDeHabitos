import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Progresso from "../../Progresso";
import Usuario from "../../Usuario";
import Menu from "./Menu";
import Topo from "./Topo";

export default function Hoje(){

    const dayjs = require('dayjs'); // importando a biblioteca
    const data = dayjs(); // objeto com a data atual
    const diaDaSemana = data.day();
    const dia = data.format('DD/MM'); // obtendo o dia no formato "DD/MM"
    const [atualizaPag, setAtualizaPag] = useState(0);
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)
    const [habitosDeHoje, setHabitosDeHoje] = useState([])
    const [habitosConcluidos, setHabitosConcluidos]= useState(0);
    const [porcentagemConcluida,setPorcentagemConcluida] = useState(0);
    const [progresso, setProgresso] = useContext(Progresso);
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"
    const config = {
        headers: {
            "Authorization": `Bearer ${informacoesUsuario.token}`
        }
    }
    console.log(habitosConcluidos)
    console.log(habitosDeHoje) //VERIFICANDO SE ESTÁ PEGANDO OS HABITOS DE HJ
    useEffect(()=>{
        const promisse = axios.get( url+"today", config);
        promisse.then(e => {
            setHabitosDeHoje(e.data);            
        });
        promisse.catch(e =>{
            alert(e);
        });
    }, [atualizaPag])

    let nomeDia;
    switch (diaDaSemana){
        case 0:
            nomeDia = 'Domingo';
            break;
        case 1:
            nomeDia = 'Segunda-feira';
            break;
        case 2:
            nomeDia = 'Terça-feira';
            break;
        case 3:
            nomeDia = 'Quarta-feira';
            break;
        case 4:
            nomeDia = 'Quinta-feira';
            break;
        case 5:
            nomeDia = 'Sexta-feira';
            break;
        case 6:
            nomeDia = 'Sábado';
            break;
        default:
            nomeDia = 'Dia inválido';
            break;
    }
    
    function habitoFeito(verificaSeFoiFeito, id){
        const body = {}
        if(!verificaSeFoiFeito){ //se é falso ou seja, não foi feito
            const promisse = axios.post(url+id+"/check", body, config);
            promisse.then(e => {
                console.log("tarefa feita");

                setAtualizaPag(atualizaPag+1)
            });
            promisse.catch(e => console.log(e.data))
        }else{
            const promisse = axios.post(url+id+"/uncheck", body, config);
            promisse.then(e => {
                console.log("tarefa desfeita");
                setAtualizaPag(atualizaPag+1)
            });
            promisse.catch(e => console.log(e.data))
        }

    }
    useEffect(() => {
        atualizaContagemTarefasConcluidas();
    }, [habitosDeHoje]);

    function atualizaContagemTarefasConcluidas(){
        setHabitosConcluidos((habitosDeHoje.filter((habitos) => habitos.done === true)).length);
        setPorcentagemConcluida(Math.round(((habitosDeHoje.filter((habitos) => habitos.done === true)).length * 100)/habitosDeHoje.length));
        setProgresso(Math.round(((habitosDeHoje.filter((habitos) => habitos.done === true)).length * 100)/habitosDeHoje.length));
    }
    
    return (
    <>
        <Topo/>
        <HojeLayout concluido={porcentagemConcluida}>
            <h1 data-test="today">{nomeDia}, {dia}</h1>
            <p data-test="today-counter">{habitosConcluidos=== 0?"Nenhum hábito concluido ainda": porcentagemConcluida+"% dos hábitos concluidos"}</p>
            <ContainerHabitos>
                {habitosDeHoje.map((habito)=>{
                   return (
                   <HabitosSalvos data-test="today-habit-container" feito={habito.done} key={habito.id}>
                        <Habito>
                            <h2 data-test="today-habit-name">{habito.name}</h2>
                            <Descri feito={habito.done} atual={habito.currentSequence} recorde={habito.highestSequence} >
                                <h3 data-test="today-habit-sequence">Sequencia atual: {habito.currentSequence} dias</h3>
                                <h4 data-test="today-habit-record">Seu recorde: {habito.highestSequence} dias</h4>
                            </Descri>
                        </Habito>
                        <ion-icon data-test="today-habit-check-btn" onClick={()=>habitoFeito(habito.done, habito.id)} name="checkbox"></ion-icon>
                    </HabitosSalvos>)})}
            </ContainerHabitos>
        </HojeLayout>
        <Menu/>
    </>
    );
}

const HojeLayout = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    padding-top: 98px;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;
    h1{
        font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
    }
    p{
        font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom: 28px;
    color: ${({concluido})=> concluido>0 ? "#8FC549" : "#BABABA"};
    }
`

const ContainerHabitos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HabitosSalvos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 94px;
    padding: 13px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 5px;
    ion-icon{
        width: 69px;
        height: 69px;
        color:${({feito})=> feito===true ? "#8FC549" : "#EBEBEB"};
    }
`

const Habito = styled.div`
    h2{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
`
const Descri = styled.div`
    h3{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${({feito})=> feito===true ? "#8FC549" : "#666666"};
    }
    h4{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${({atual, recorde})=> atual === recorde && recorde !==0 ? "#8FC549" : "#666666"};
    }
`