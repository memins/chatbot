import { createGlobalStyle } from "styled-components";

import { ThemeProps } from "./theme";
import { color, font, fontSize, fontWeight } from "./utils";

export interface GlobalStylesProps {
  backgroundColor?: string;
  color?: string;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps & ThemeProps>`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${color("background")};
    color: ${color("text")};
    font-family: ${font("default")};
    font-size: ${fontSize("default")};
    font-weight: ${fontWeight("default")};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    margin: 0;
    max-height: 100%;
    overflow: hidden;
    padding: 0;
  }
  main,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr {
    margin: 0;
  }

  input {
    border-radius: 0;
  }

  #root {
    height: 100%;
    max-height: 100%;
    overflow: hidden;
  }
`;
