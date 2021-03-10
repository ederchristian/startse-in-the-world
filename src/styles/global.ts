import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Tinos', serif;
    font-weight: 400;
  }

  h1, h2, h3, a, button {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }
`

export default GlobalStyles
