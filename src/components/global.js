import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  :root {
    --primary-color: #2d2faf;
    --secondary-color: #8140b1;
    --card-color: #f8f8f8;
    --border-color: #0001;
    --background-color: #fff;

    --radius-corners: 10px;

    --wrapper-size: 62rem;

    @supports (backdrop-filter: blur(20px)) {
      --background-color: #fffd;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: "Nunito", sans-serif;
    font-size: 16px;

    &.dark {
      color: #fff;
      background-color: #18191A;

      --primary-color: #8284f5;
      --secondary-color: #c984fa;
      --card-color: #242526;
      --border-color: #fff2;
      --background-color: #242526;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`

export default Global
