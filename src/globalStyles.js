import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }

    h1 {
        font-weight: 600;
    }

    img {
        box-shadow: 0px 0px 18px 6px rgba(0,0,0,0.24);
    }
`;

export default GlobalStyle