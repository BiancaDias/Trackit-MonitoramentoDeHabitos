import styled from "styled-components";
import logo from "../../images/logo.svg"

export default function Iniciar(){
    return(
        <ContainerIniciar >
            <img src={logo} alt="Trackit"/>
            <Formulario>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <button>Entrar</button>
            </Formulario>
            <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
        </ContainerIniciar>
    )
}

const ContainerIniciar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 33px;
        margin-top: 68px;
    }
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        padding-left: 11px;
        box-sizing: border-box;
        ::placeholder{
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            font-family: 'Lexend Deca';
        }
    }
    button{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 381px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
    }
`

const Cadastro = styled.div`
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-bottom: 200px;
`