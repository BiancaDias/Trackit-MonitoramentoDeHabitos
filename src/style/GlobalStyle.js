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

`

export default GlobalStyle