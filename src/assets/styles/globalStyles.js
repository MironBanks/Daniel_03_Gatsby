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
    margin: 0 auto;
    display: flex;
    justify-content: center;
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