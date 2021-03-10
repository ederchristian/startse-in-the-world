import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #fd6269;
    --background: #030518;
    --white: #eeeeee;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

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
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: 'Tinos', serif;
    font-weight: 400;
  }

  h1, h2, h3, a, button {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  h1, h2, h3 {
    line-height: var(--large);
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.4rem;
  }

  h3 {
    font-size: 2.6rem;
  }

  p,
  a {
    font-size: 1.6rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles
