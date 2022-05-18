import { ThemeProps as StyledThemeProps } from "styled-components";

/**
 * The application's theme.
 *
 * @see https://styled-system.com/theme-specification
 */
export const baseTheme = {
  borders: {},
  borderStyles: {},
  borderWidths: {},
  colors: {
    background: "#FFF",
    text: "#191919",
    placeholder: "#B4B4B4",
    card: "#F2F2F2",
    divider: "#E5E5E5",
    border: "#CCC",
    borderHover: "#B2B2B2",

    primary: "#004FC1",
    primaryHover: "#0045A8",
    primaryActive: "#003A8F",
    primaryDisabled: "#BFD3EF",
    onPrimary: "#FFF",

    secondary: "#E5E5E5",
    secondaryHover: "#D9D9D9",
    secondaryActive: "#CCC",
    secondaryDisabled: "#F8F8F8",
    onSecondary: "#191919",

    green: "#50A70B",
    greenHover: "#459009",
    greenActive: "#397808",
    greenDisabled: "#D3E9C2",

    yellow: "#A70B0B",
    yellowHover: "#D19700",
    yellowActive: "#B88400",
    yellowDisabled: "#FAE9BF",

    red: "#A70B0B",
    redHover: "#900909",
    redActive: "#780808",
    redDisabled: "#E9C2C2",
  },
  durations: {},
  fonts: {
    default:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  fontSizes: {
    h1: "34px",
    h2: "24px",
    h3: "20px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
    default: "14px",
    small: "12px",
    tagSmall: "8px",
  },
  fontWeights: {
    bold: "700",
    regular: "400",
    light: "300",
    default: "400",
  },
  letterSpacings: {},
  mediaQueries: {
    phoneOnly: "@media (max-width: 599px)",
    smallScreens: "@media (max-width: 699px)",
    tabletPortraitUp: "@media (min-width: 600px)",
    tabletLandspaceUp: "@media (min-width: 900px)",
    desktopUp: "@media (min-width: 1100px)",
    bigDesktopUp: "@media (min-width: 1920px)",
    print: "@media print",
  },
  opacities: {
    disabled: 0.25,
  },
  radii: {
    default: "8px",
    button: "6px",
  },
  shadows: {
    floating: "0px 12px 20px -10px rgba(0, 0, 0, 0.25)",
    tooltip: "0px 3px 8px -4px rgba(0, 0, 0, 0.3)",
  },
  sizes: {
    buttonHeight: "40px",
  },
  space: {
    iconMargin: "12px",
  },
  zIndices: {
    modal: 50,
    overlay: 100,
    picker: 125,
    tooltip: 150,
  },
};

export type Theme = typeof baseTheme;
export type ThemeProps = StyledThemeProps<Theme>;
