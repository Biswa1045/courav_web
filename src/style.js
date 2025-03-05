import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#A6CE39",
    secondary: "#363638",
    accent: "#e74c3c",
    background: "#000000",
    text: "#333",
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.main};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }
`;
