import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progresso from "../../Progresso";
import { useContext } from 'react';


export default function Menu(){
    const [progresso, setProgresso] = useContext(Progresso);
    console.log(progresso)
    return(
        <MenuLayout data-test="menu">
            <Link data-test="habit-link" to="/habitos"><Botao>Hábitos</Botao></Link>
            <Link data-test="today-link" to="/hoje">
                    <BotaoProgresso>
                    <StyledCircularProgressbar
                        value = {progresso}
                        text={"Hoje"}
                        styles={{
                            path: {
                                stroke: `rgba(255, 255, 255, 1)`,
                            },
                            trail: {
                                stroke: '#52B6FF',
                            },
                            text: {
                                fill: '#FFFFFF',
                              }
                        }}
                    />
                </BotaoProgresso>
                </Link>
            <Link data-test="history-link" to="/historico"><Botao>Historico</Botao></Link>
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

const StyledCircularProgressbar = styled(CircularProgressbar)`
width: 80px;
  height: 80px;
 .CircularProgressbar-path {
    stroke-width: 8px;
  }

  .CircularProgressbar-text {
    font-weight: 400;
    font-size: 20px;
  }

  .CircularProgressbar-trail {
    stroke-width: 8px;
  }
`