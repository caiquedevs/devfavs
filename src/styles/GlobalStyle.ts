import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;

    position: relative;
    box-sizing: border-box;

    font-family: 'Archivo', sans-serif;
    color: ${colors.white};
  }

  a {
    text-decoration: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  h1 {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: ${colors.white};
  }

  ul { 
    list-style: none
  }

  button.default {
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;
    
    transition: 0.3s filter;
    cursor: pointer;

    &:hover {
      filter: brightness(0.7)
    }
  }
`;

export default GlobalStyle;
