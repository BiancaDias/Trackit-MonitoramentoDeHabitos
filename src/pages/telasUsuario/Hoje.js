import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";

export default function Hoje(){
    return (
    <>
        <Topo/>
        <HojeLayout>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluido ainda</p>
            <ContainerHabitos>
                <HabitosSalvos>
                    <Habito>
                        <h2>Ler 1 Capitulo de livro</h2>
                        <Descri>
                            <h3>Sequencia atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </Descri>
                    </Habito>
                    <ion-icon name="checkbox"></ion-icon>
                </HabitosSalvos>
                <HabitosSalvos>
                    <Habito>
                        <h2>Ler 1 Capitulo de livro</h2>
                        <Descri>
                            <h3>Sequencia atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </Descri>
                    </Habito>
                    <ion-icon name="checkbox"></ion-icon>
                </HabitosSalvos>
                <HabitosSalvos>
                    <Habito>
                        <h2>Ler 1 Capitulo de livro</h2>
                        <Descri>
                            <h3>Sequencia atual: 3 dias</h3>
                            <h3>Seu recorde: 5 dias</h3>
                        </Descri>
                    </Habito>
                    <ion-icon name="checkbox"></ion-icon>
                </HabitosSalvos>
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
color: #BABABA
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
        color:#EBEBEB;
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

color: #666666;

    }
`