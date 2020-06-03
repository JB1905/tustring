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
