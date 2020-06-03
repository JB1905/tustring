import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
  }

  a {
    color: #2d2faf;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export default Global
