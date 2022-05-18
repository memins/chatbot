import { useTheme as useSCTheme } from "styled-components";

import type { Theme } from "./theme";

export * from "./global-styles";
export * from "./theme";
export * from "./utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): Theme => useSCTheme() as any;
export { ThemeProvider } from "styled-components";
