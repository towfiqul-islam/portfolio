import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
body {
    max-width: 600px;
    margin: 30px auto auto auto;
    font-family: "Lato";
  }
  
  h1,
  h2,
  h3,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  img {
    max-width: 600px;
  }
  
  @media screen and (max-width: 500px) {
    body {
      margin: 15px auto auto auto;
      max-width: 90%;
    }
  }
  
`

export default GlobalStyles
