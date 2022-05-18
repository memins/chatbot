import { observer } from "mobx-react-lite";
import { Suspense, useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import { initI18n } from "../i18n";
import type { RootStore } from "../models";
import { HomeScreen } from "../screens";
import { baseTheme, GlobalStyles, ThemeProvider } from "../theme";
import { setupRootStore, StoreProvider } from "./root-store";

const queryClient = new QueryClient();

// eslint-disable-next-line react/function-component-definition
function App() {
  const [isReady, setIsReady] = useState(false);
  const rootStoreRef = useRef<RootStore | null>(null);
  useEffect(() => {
    Promise.all([setupRootStore(), initI18n()]).then(([rootStore]) => {
      rootStoreRef.current = rootStore;
      setIsReady(true);
    });
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <QueryClientProvider client={queryClient}>
        <StoreProvider value={rootStoreRef.current}>
          <GlobalStyles />
          {isReady && (
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Suspense>
          )}
        </StoreProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default observer(App);
