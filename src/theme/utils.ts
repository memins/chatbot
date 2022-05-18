import { css } from "styled-components";

import { Theme, ThemeProps } from "./theme";

/** Extracts a value from the theme passed to the component. */
export const lookup =
  <TK extends keyof Theme>(themeKey: TK) =>
  <VK extends keyof Theme[TK]>(valueKey: VK) =>
  ({ theme }: ThemeProps): Theme[TK][VK] | VK => {
    if (!theme) return valueKey;

    const values = theme[themeKey];
    if (!values) return valueKey;

    const value = values[valueKey];
    if (value === undefined) return valueKey;
    return value;
  };

export const border = lookup("borders");
export const borderStyle = lookup("borderStyles");
export const borderWidths = lookup("borderWidths");
export const color = lookup("colors");
export const duration = lookup("durations");
export const font = lookup("fonts");
export const fontSize = lookup("fontSizes");
export const fontWeight = lookup("fontWeights");
export const letterSpacing = lookup("letterSpacings");
export const opacity = lookup("opacities");
export const radius = lookup("radii");
export const shadow = lookup("shadows");
export const size = lookup("sizes");
export const space = lookup("space");
export const zIndex = lookup("zIndices");

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mediaQuery = (
  key: keyof Theme["mediaQueries"],
  styles?: ReturnType<typeof css>,
) =>
  styles
    ? css`
        ${lookup("mediaQueries")(key)} {
          ${styles}
        }
      `
    : lookup("mediaQueries")(key);
