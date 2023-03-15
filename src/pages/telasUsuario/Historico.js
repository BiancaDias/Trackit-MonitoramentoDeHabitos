import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";

export default function Historico(){
    return(
        <>
            <Topo/>
            <HistoricoLayout>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricoLayout>
            <Menu/>
        </>
    )
}

const HistoricoLayout = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    padding-top: 98px;
    padding-left: 17px;
    padding-right: 17px;
    box-sizing: border-box;
    h1{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin-bottom: 28px;
        color: #666666;
    }
`