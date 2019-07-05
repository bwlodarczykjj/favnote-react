import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,800&display=swap');

    *, *::before, *::after {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding-left: 150px;
        margin: 0;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
        width: 100%;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
