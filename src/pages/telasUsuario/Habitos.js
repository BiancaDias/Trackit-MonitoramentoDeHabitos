import styled from "styled-components";
import Menu from "./Menu";
import Topo from "./Topo";
import excluir from "../../images/lixeira.svg"

export default function Habitos(){
    return(
    <>
        <Topo/>
        <HabitosLayout>
        <TopoPagina>
            <h1>Meus hábitos</h1>
            <button>+</button>
        </TopoPagina>
        <CriaHabito>
            <input type="text" name="nome do habito" placeholder="nome do hábito"/>
            <BotoesAgrupados>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </BotoesAgrupados>
            <CancelarSalvar>
                <BotaoCancelar>Cancelar</BotaoCancelar>
                <BotaoSalvar>Salvar</BotaoSalvar>
            </CancelarSalvar>

        </CriaHabito>
        <Mensagem>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem>
        <HabitosRegistrados>
            <Container>
                <p>Ler 1 capitulo de livro</p>
                <img src={excluir} alt="deletar habito"/>
            </Container>
            <BotoesAgrupados>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </BotoesAgrupados>
        </HabitosRegistrados>
        <HabitosRegistrados>
            <Container>
                <p>Ler 1 capitulo de livro</p>
                <img src={excluir} alt="deletar habito"/>
            </Container>
            <BotoesAgrupados>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </BotoesAgrupados>
        </HabitosRegistrados>
        <HabitosRegistrados>
            <Container>
                <p>Ler 1 capitulo de livro</p>
                <img src={excluir} alt="deletar habito"/>
            </Container>
            <BotoesAgrupados>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </BotoesAgrupados>
        </HabitosRegistrados>
        </HabitosLayout>
        <Menu/>
    </>)
}

const HabitosLayout = styled.div`
    background-color: #f2f2f2;;
    height: 75vh;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 18px 70px 18px ;

`
const TopoPagina = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1{
        color: #126BA5;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
    }
    button{
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 40px;
        height: 35px;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
    }
`

const Mensagem = styled.div`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 29px;
    display: none; /*Deixar dinamico */
`

const CriaHabito = styled.form`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 17px;
    box-sizing: border-box;
    margin-top: 20px;
    display: none;/*Deixar dinamico */
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-bottom: 8px;
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
    button{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        /*configuração das letras */
        color: #DBDBDB;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-right: 4px;
        margin-bottom: 25px;
    }
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
`

const HabitosRegistrados = styled.div`
    width: 340px;
    height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #666666;
margin-bottom: 10px;
    }


`