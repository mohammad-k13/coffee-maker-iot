import { StateCreator, create } from "zustand";
import { TOKEN_KEY } from "~/store/constants";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
// import { getCookie, setCookie,deleteCookie} from 'cookies-next';

export const IS_LOGGED_IN = "IS_LOGGED_IN";
interface Auth {
  // [IS_LOGGED_IN]: () => boolean;
  [IS_LOGGED_IN]: boolean;
  setToken: (token: string | undefined) => void;
  [TOKEN_KEY]: string | undefined;
}
const initialStore = {
  ["TOKEN_KEY"]: undefined,
  ["IS_LOGGED_IN"]: false,
};

const persistedValues = (state: any) => ({
  [TOKEN_KEY]: state[TOKEN_KEY],
});

const auth: StateCreator<Auth, []> = (set: (x: any) => any, _state: any) => ({
  // IS_LOGGED_IN: () => state() && !!state()[TOKEN_KEY],
  setToken: (token: string | undefined) => {
    set({ [TOKEN_KEY]: token });
  },
  login: (token: string) => {
    set({ [TOKEN_KEY]: token });
  },
  logout: () => {
    return set((state: any) => {
      delete state[TOKEN_KEY];
      return state;
    });
  },

  ...initialStore,
});
const middlewares = (f: StateCreator<any, any>) =>
  devtools(
    persist(f, {
      name: "AUTH_STORE_PELAZOOM",
      storage: createJSONStorage(() => localStorage),
      partialize: persistedValues,
      version: 0.1,
    })
  );

type StoreType = {
  [IS_LOGGED_IN]: boolean;
  setToken: (token: string | undefined) => void;
  [TOKEN_KEY]: string | undefined;
};

export const useAuthStore = create(
  middlewares((a, b, c): StoreType => {
    return {
      ...auth(a, b, c),
    };
  })
);
