import logo from "../../images/logo.svg"
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { Container, Formulario, Redireciona } from "./stylesCadastroLogin";


export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("")
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
            alert("Usuario já cadastro! Faça login")})
    }

    return(
        <Container >
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
            <Link data-test="login-link" to={"/"}><Redireciona>Já tem uma conta? Faça login!</Redireciona></Link>
        </Container>
    );
}
