import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    overflow-x: hidden;
    margin: 0;
    color: #000;
    font-family: 'Lato', 'Apple SD Gothic Neo', 'NanumSquare', 'Nanum Barun Gothic', 'Nanum Gothic', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: inline-block;
    vertical-align: top;
  }

  pre, code {
    font-family: 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

export default GlobalStyle
