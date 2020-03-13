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
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
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