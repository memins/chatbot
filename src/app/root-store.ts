import React from "react";

import { RootStore } from "../models";

export const setupRootStore = async (): Promise<RootStore> => new RootStore();

const storeContext = React.createContext<RootStore | null>(null);
export const StoreProvider = storeContext.Provider;
export const useStore = (): RootStore =>
  React.useContext(storeContext) as RootStore;
