import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    
  }
  body {
    background:#a4b0be;
    color:#FFF;
    -webkit-font-smoothing:antialiased;
  
  }
  border-style, input, button{
    font-family:Arial, cursive;
    font-size:16px;
  }
  h1,h2,h3,h4,h5,h6, strong{
    font-family: Arial, cursive;
    font-weight:100px;
  }
  button{
    cursor:pointer;
  }
`;
