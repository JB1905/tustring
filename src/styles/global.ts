import { createGlobalStyle } from 'styled-components'

import { AUTHOR_PIC_SIZE, HEADER_HEIGHT } from '../constants'

const Global = createGlobalStyle`
  :root {
    --primary-color: #2d2faf;
    --text-color: #000;
    --card-color: #f8f8f8;
    --border-color: #0001;
    --nav-color: #fff;
    --page-color: #fff;

    --radius-corners: 10px;
    --wrapper-size: 62rem;

    --spaces: 1.5rem;

    --font-size: 1.6rem;
    --font-size-md: 2rem;
    --font-size-lg: 3.4rem;
    --font-size-xl: 6rem;

    --font-family-body: "Nunito", sans-serif;

    @supports(backdrop-filter: blur) {
      --blur-filter: blur(20px);
    }

    --author-pic-size: ${AUTHOR_PIC_SIZE}px;
    --header-height: ${HEADER_HEIGHT}px;

    --full-size: 100vh;

    @supports (-webkit-touch-callout: none) {
      --full-size: -webkit-fill-available;

      @media (display-mode: standalone) {
        --full-size: 100vh;
      }
    }

    @supports (backdrop-filter: var(--blur-filter)) {
      --nav-color: #fffd;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: var(--font-family-body);
    font-size: var(--font-size);

    &.dark {
      --primary-color: #8284f5;
      --text-color: #fff;
      --card-color: #242526;
      --border-color: #fff2;
      --nav-color: #242526;
      --page-color: #18191A;

      @supports (backdrop-filter: blur) {
        --nav-color: #242526dd;
      }

      img {
        filter: grayscale(0.2) brightness(0.8);
      }
    }

    color: var(--text-color);
    background-color: var(--page-color);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: var(--font-size-lg);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 2rem;
  }

  #gatsby-noscript {
    color: var(--page-color);
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: var(--spaces);
    background: linear-gradient(90deg, var(--primary-color), #6f2eb0);
    font-weight: 700;
  }
`

export default Global
