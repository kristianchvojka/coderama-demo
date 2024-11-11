import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
body {
  background-color: #f5f5f5;
  margin:0;
}
html{
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
  @media(max-width: 768px) {
    scroll-padding-top: 56px;
  }
}
a:visited{
    color: unset;
}
  a {
    text-decoration: none;
    color: unset;
}
p{
  margin: 0;
}
`;

export default GlobalStyle;
