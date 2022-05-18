import { useEffect } from "react";
import styled from "styled-components";

import { i18n, I18nProvider, initI18n, useTranslation } from "../src/i18n";
import { baseTheme, GlobalStyles, ThemeProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  backgrounds: {
    disable: true,
  },
};

initI18n();

export const globalTypes = {
  language: {
    name: "Language",
    description: "The current language",
    defaultValue: i18n.language,
    toolbar: {
      icon: "globe",
      items: ["en", "de", "cimode"],
    },
  },
};

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
`;

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  touch-action: none;
  width: 100%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const WithThemeProvider = (Story, { globals }) => {
  const { i18n: instance } = useTranslation();
  useEffect(() => {
    instance.changeLanguage(globals.language);
  }, [globals.language, instance]);

  return (
    <I18nProvider i18n={instance}>
      <ThemeProvider theme={baseTheme}>
        <Wrapper>
          <StyledContainer>
            <GlobalStyles />
            <Story />
          </StyledContainer>
        </Wrapper>
      </ThemeProvider>
    </I18nProvider>
  );
};
export const decorators = [WithThemeProvider];
