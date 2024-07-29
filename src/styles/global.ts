import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']}
  }

  body{
    background-color: ${props => props.theme["gray-900"]};
    color: ${({theme}) => theme["gray-300"]};
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`