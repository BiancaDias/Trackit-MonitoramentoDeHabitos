import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	body{
		font-family: 'Lexend Deca';
		box-sizing: border-box;
		height: 100%;
	}
	button {
		border-style: none;
		&:disabled {
			background-color: lightgray;
		}
	}
	input{
		font-family: 'Lexend Deca';
		color: #666666;
		font-weight: 400;
		font-size: 19.976px;
	}

`

export default GlobalStyle