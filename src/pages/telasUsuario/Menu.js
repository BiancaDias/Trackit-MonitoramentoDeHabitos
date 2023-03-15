import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Menu(){
    return(
        <MenuLayout>
            <Link to="/habitos"><Botao>Hábitos</Botao></Link>
            <Link to="/hoje"><BotaoProgresso>Hoje</BotaoProgresso></Link>
            <Link to="/historico"><Botao>Historico</Botao></Link>
        </MenuLayout>
    )
}

const MenuLayout = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    font-family: 'Lexend Deca';
`

const Botao = styled.button`
color: #52B6FF;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    background-color: transparent;
    margin-left: 33px;
    margin-right: 33px;
    width: 79px;
    height: 22px;
    font-family: 'Lexend Deca';
`

const BotaoProgresso = styled.button`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 50%;
    font-weight: 400;
    font-size: 17.976px;
    color: #FFFFFF;
    margin-bottom: 40px;
    font-family: 'Lexend Deca';
`