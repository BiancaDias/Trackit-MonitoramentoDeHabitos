import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg"
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import Usuario from "../../Usuario";
import { Container, Formulario, Redireciona } from "./stylesCadastroLogin";

export default function Iniciar(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [habilitado, SetHabilitado] = useState(false);
    const [informacoesUsuario, setInformacoesUsuario] = useContext(Usuario)

    const navigate = useNavigate();
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    function login(e){
        e.preventDefault();
        const body = {email, password};
        const promisse = axios.post(url, body);
        SetHabilitado(true)
        promisse.then(e => {
            setInformacoesUsuario(e.data)
            navigate("/hoje")
        })
        promisse.catch(r =>{
            SetHabilitado(false)
            alert("deu ruim")
        })
    }
    return(
        <Container>
            <img src={logo} alt="Trackit"/>
            <Formulario onSubmit={login}>
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
                <button data-test="login-btn" disabled={habilitado}>{habilitado === true? <ThreeDots color="#FFFFFF" height="13px" width="51px"/>: "Entrar"}</button>
            </Formulario>
            <Link data-test="signup-link" to={"/cadastro"}><Redireciona>Não tem uma conta? Cadastre-se!</Redireciona></Link>
        </Container>
    )
}

