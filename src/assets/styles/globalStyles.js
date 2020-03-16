import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: 'Montserrat';
    padding: 20px 65px 0;

    @media only screen and (max-width: 500px) {
        width:95vw;
        height: 100vh;
        padding: 10px;
        margin: 0;
                }
}

button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
}

ul {
    padding: 0;
    margin: 0;
}
`

export default GlobalStyle