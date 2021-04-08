import { createContext, useContext } from "react";
import { Counter } from "./counter";
import { Sum2Number } from "./Sum2Number";
import { Todo } from "./Todo";

export const rootStore = {
  counterStore: new Counter(),
  sum2NumberStore: new Sum2Number(),
  todoStore: new Todo()
};

export type TRootStore = typeof rootStore;
const RootStoreContext = createContext<null | TRootStore>(null);

// dung trong file index.tsx
export const Provider = RootStoreContext.Provider;

/** tra lai store, chi dung o function component */
export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
