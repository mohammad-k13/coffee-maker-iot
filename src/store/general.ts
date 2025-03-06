import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import i18next from "i18next";
import { LANGUAGE_KEY, THEME, MACHINE_KEY, CURRENT_PAGE } from "./consts";

interface General {
  toggleTheme: () => void;
}
type GHType = {
  name: string;
  status: string;
  lastUpdate: string;
  config: {
    boilerTemperator: number;
    extractionTime: number;
    volume: number;
    backflush: number;
    preInfusion: number;
    presure: number;
  };
}
type MainTankType = {
  name: string;
  status: string;
  lastUpdate: string;
  config: {
    boilerTemperator: number;
  };
}
// (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
const initialStore = {
  [THEME]: "dark",
  [LANGUAGE_KEY]: i18next.language || 'en',
  [CURRENT_PAGE]: {
    url: "/dashboard/home",
    params: {},
  },
  [MACHINE_KEY]: {
    GH1: {
      id: 1,
      name: "GH1",
      status: "offline",
      lastUpdate: "1",
      config: {
        boilerTemperator: 0,
        extractionTime: 0,
        volume: 0,
        backflush: 0,
        preInfusion: 0,
        presure: 0,
      }
    },
    mainTank: {
      id: 2,
      name: "Main Tank",
      status: "offline",
      lastUpdate: "1",
      config: {
        boilerTemperator: 0,
      }
    },
    GH2: {
      id: 3,
      name: "GH2",
      status: "offline",
      lastUpdate: "1",
      config: {
        boilerTemperator: 0,
        extractionTime: 0,
        backflush: 0,
        volume: 0,
        preInfusion: 0,
        presure: 0,
      }
    },
  }
};

export const general: StateCreator<General, []> = (
  set: (x: any) => any,
  state: any
) => ({
  changeLanguage: (val: string) => {
    i18next.changeLanguage(val);
    document.documentElement.setAttribute("data-lang", val);

    set({ [LANGUAGE_KEY]: val });
    // window.location.reload();
  },
  toggleTheme: () =>
    state()[THEME] === "dark"
      ? set({ [THEME]: "light" })
      : set({ [THEME]: "dark" }),
  
  changeAmperConfig: (_amperKey:string, _amperConfigKey: string, _val: number) => {
    set({ [MACHINE_KEY]: {
      ...state()[MACHINE_KEY],
      [_amperKey]: {
        ...state()[MACHINE_KEY][_amperKey],
        config: {
          ...state()[MACHINE_KEY][_amperKey].config,
          [_amperConfigKey]: _val
        }
      }
    } })
  },

  changeCurrentPage: (val: {
    url: string;
    params: any;
  }) => {
    set({ [CURRENT_PAGE]: val });
  },

  

  ...initialStore,
});

// add more state here that you want to persist
const persistedValues = (state: {
  changeLanguage: (_val:string) => void;
  toggleTheme: () => void;
  changeAmperConfig: (_amperKey:string, _amperConfigKey: string, _val: number) => void;
  changeCurrentPage: (_val: {
    url: string;
    params: any;
  }) => void;
  onChangeCurrentPage: (_val: {
    url: string;
    params: any;
  }) => void;
  [THEME]: any;
  [LANGUAGE_KEY]: any;
  [MACHINE_KEY]: {
    GH1: GHType;
    mainTank: MainTankType;
    GH2: GHType
  };
  [CURRENT_PAGE]: {
    url: string;
    params: any;
  };
}) => ({
  [THEME]: state[THEME],
  [LANGUAGE_KEY]: state[LANGUAGE_KEY],
  [MACHINE_KEY]: state[MACHINE_KEY],
  [CURRENT_PAGE]: state[CURRENT_PAGE],
});
const middlewares = (f: StateCreator<any, any>) =>
  devtools(
    persist(f, {
      name: "Gahve",
      storage: createJSONStorage(() => localStorage),
      partialize: persistedValues,
    })
  );

export const useGeneralStore = create(
  middlewares((a, b, c) => {
    return {
      ...general(a, b, c),
    };
  })
);
