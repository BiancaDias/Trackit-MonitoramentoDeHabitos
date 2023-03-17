import { useContext, useState } from "react";
import styled from "styled-components"
import Usuario from "../Usuario";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

export default function CriaHabitos({visualizaCriaHabito,setVisualizaCriaHabito, cancelaAddHabito, setVisualizaHabitos, listaHabitos, setListaHabitos}){
    const days = ["D","S","T","Q","Q","S","S"];
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [nomeNovoHabito, setNomeNovoHabito] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            "Authorization": `Bearer ${informacoesUsuario.token}`
        }
    }
    function selecionaDias(dia){
        if(diasSelecionados.includes(dia)){
            const pos = diasSelecionados.indexOf(dia);
            const arrayAux = diasSelecionados;
            arrayAux.splice(pos, 1);
            setDiasSelecionados([...arrayAux]);
        }else{
            setDiasSelecionados([...diasSelecionados, dia]);
        }
    }

    function salvaHabito(e){
        e.preventDefault();
        if(nomeNovoHabito===""){
            alert("O nome do habito não pode estar em branco")
            return;
        }
        setHabilitado(true)
        const body = {name: nomeNovoHabito, days: diasSelecionados};
        const promisse = axios.post(url, body, config);
        promisse.then(e => {
            setHabilitado(false);
            const vetorLimpo = [];
            setNomeNovoHabito("");
            setDiasSelecionados([...vetorLimpo])
            setVisualizaCriaHabito(false);
            setVisualizaHabitos(true);
            setListaHabitos([...listaHabitos, e.data])
        });
        promisse.catch(e => {
            setHabilitado(false)
            alert("deu ruim")
        });
    }
    return(
        <CriaHabito data-test="habit-create-container" onSubmit={salvaHabito} visualizaCriaHabito={visualizaCriaHabito}>
            <input 
                data-test="habit-name-input"
                type="text" 
                name="novoHabito" 
                placeholder="nome do hábito"
                id="novoHabito"
                value={nomeNovoHabito}
                onChange={e => setNomeNovoHabito(e.target.value)}
                disabled={habilitado}
            />
            <BotoesAgrupados >
                {days.map((d, indice) => <Botoes disabled={habilitado} type="button" data-test="habit-day" diasSelecionados={diasSelecionados} onClick={()=>selecionaDias(indice)} key={indice} id={indice}>{d}</Botoes>)}
            </BotoesAgrupados>
            <CancelarSalvar>
                <BotaoCancelar data-test="habit-create-cancel-btn" disabled={habilitado} onClick={cancelaAddHabito}>Cancelar</BotaoCancelar>
                <BotaoSalvar data-test="habit-create-save-btn" disabled={habilitado} type="submit">{habilitado === true? <ThreeDots color="#FFFFFF" height="10px" width="43px"/>: "Salvar"}</BotaoSalvar>
            </CancelarSalvar>

        </CriaHabito>
    )
}

const CriaHabito = styled.form`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 17px;
    box-sizing: border-box;
    margin-top: 20px;
    display: ${({visualizaCriaHabito}) => visualizaCriaHabito === false ? "none" : ""};
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 100%;
        height: 45px;
        margin-bottom: 8px;
        padding-left: 11px;
    ::placeholder {
        width: 153px;
        height: 25px;
        padding: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    }
`

const BotoesAgrupados= styled.div`
    display: flex;
`
const Botoes = styled.button`

    background: ${({diasSelecionados, id})=> diasSelecionados.includes(id) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    color: ${({diasSelecionados, id})=> diasSelecionados.includes(id) ? "#FFFFFF" : "#DBDBDB"};
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-right: 4px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const CancelarSalvar = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`

const BotaoCancelar = styled.div`
    color: #52B6FF;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    margin-right: 23px;
    :disabled{
            background: #52B6FF;
            opacity: 0.7;
        }
`
const BotaoSalvar = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 84px;
    height: 35px;
    text-align: center;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 15.976px;
    display: flex;
    justify-content: center;
    align-items: center;
        :disabled{
            background: #52B6FF;
            opacity: 0.7;
        }
`
