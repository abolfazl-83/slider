import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before{
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    }
    html {
        font-size : 62.5%;
    }
    body{
        font-size : 1.6rem;
    }
`;

export default GlobalStyles;