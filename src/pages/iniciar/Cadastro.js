import logo from "../../images/logo.svg"
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';

export default function Cadastro(){
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [habilitado, SetHabilitado] = useState(false);

    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    function cadastrar(e){
        e.preventDefault()
        const body = {email, name, image, password};
        const promisse = axios.post(url, body);
        SetHabilitado(true)
        promisse.then(r =>{ 
            navigate("/")})
        promisse.catch(r =>{ 
            SetHabilitado(false)
            alert("deu ruim")})
    }

    return(
        <ContainerCadastro >
            <img src={logo} alt="Trackit"/>
            <Formulario onSubmit={cadastrar}>
                <input 
                    data-test="email-input"
                    placeholder="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={habilitado}
                    required
                />
                <input 
                    data-test="password-input"
                    placeholder="senha"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={habilitado}
                    required
                />
                <input 
                    data-test="user-name-input"
                    placeholder="nome"
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={habilitado}
                    required
                />
                <input 
                    data-test="user-image-input"
                    placeholder="foto"
                    type="url"
                    id="image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    disabled={habilitado}
                    required
                />

                <button data-test="signup-btn" disabled={habilitado}>{habilitado === true? <ThreeDots color="#FFFFFF" height="50px" width="50px"/>: "Cadastrar"}</button>
            </Formulario>
            <Link data-test="login-link" to={"/"}><Loguin>Já tem uma conta? Faça login!</Loguin></Link>
        </ContainerCadastro>
    );
}

const ContainerCadastro = styled.div`
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Loguin = styled.div`
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-bottom: 200px;
`