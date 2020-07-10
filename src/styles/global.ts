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
  body, input, button {
    font-family: sans-serif;
  }
  border-style, input, button{
    font-size:16px;
  }

  p, h1, h2 {
    cursor:default;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  button{
    cursor:pointer;
  }
`;
