import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, body {
    background-color: ${({theme})=>theme.body};
    color: ${({theme})=>theme.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  svg{
    background-color: inherit;
  }
`;