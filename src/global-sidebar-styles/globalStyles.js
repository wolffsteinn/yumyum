//create globalstyles is a helper function to generate a special
//StyledComponent that handles global styles.
//allws you to reset CSS or base stylesheets
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.background3};
    color: ${({ theme }) => theme.text};
    font-family:"Roboto", sans-serif;
    letter-spacing: 0.6px;
  }
`;
