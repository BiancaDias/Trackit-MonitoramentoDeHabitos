import styled from "styled-components";


export const Container= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    overflow: hidden;
    height: 100vh;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 33px;
        margin-top: 68px;
    }
`

export const Formulario = styled.form`
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
        :disabled{
            background: #F2F2F2;
            color: #AFAFAF;
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
            :disabled{
                background: #52B6FF;
                opacity: 0.7;
            }
    }
`

export const Redireciona = styled.div`
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-bottom: 200px;
`