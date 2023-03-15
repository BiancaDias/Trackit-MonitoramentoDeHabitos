import styled from "styled-components"
import Usuario from "../../Usuario"
import { useContext } from "react"

export default function Topo(){
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)
    return(
        <Container>
            <p>TrackIt</p>
            <img src={informacoesUsuario.image} alt="imagem usuario"/>
        </Container>
    )
}


const Container = styled.div`
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        border-radius: 98.5px;
        width: 51px;
        height: 51px;
    }
`