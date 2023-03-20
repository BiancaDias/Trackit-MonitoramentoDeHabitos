import styled from "styled-components"
import excluir from "../images/lixeira.svg"

export default function ExibeHabitos({deletaHabito,  listaHabitos, visualizaHabitos}){
    const days = ["D","S","T","Q","Q","S","S"];
    return(
        <ContainerHabitos visualizaHabitos={visualizaHabitos}>
            {listaHabitos.map((habito)=>{
            return(
            <HabitosRegistrados data-test="habit-container" key={habito.id}>
                <Container>
                    <p data-test="habit-name">{habito.name}</p>
                    <img data-test="habit-delete-btn" onClick={()=>deletaHabito(habito.id)} src={excluir} alt="deletar habito"/>
                </Container>
                <BotoesAgrupados>
                    {days.map((d, indice) => <Botoes data-test="habit-day" selecionados={habito.days} key={indice} id={indice}>{d}</Botoes>)}
                </BotoesAgrupados>
            </HabitosRegistrados>)
        })}
        </ContainerHabitos>
    )
}

const BotoesAgrupados= styled.div`
    display: flex;
`
const Botoes = styled.div`

    background: ${({selecionados, id})=> selecionados.includes(id) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    color: ${({selecionados, id})=> selecionados.includes(id) ? "#FFFFFF" : "#DBDBDB"};;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-right: 4px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

`

const HabitosRegistrados = styled.div`
    width: 100%;
    height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    margin-bottom: 10px;
`
const ContainerHabitos=styled.div`
    display: ${({visualizaHabitos}) => visualizaHabitos ===false ? "none" : "" };
    margin-top: 20px;
    width: 100%;
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
        color: #666666;
        margin-bottom: 10px;
    }


`