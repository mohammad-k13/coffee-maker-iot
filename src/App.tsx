import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { Route, BrowserRouter, Routes, Navigate, useLocation } from "react-router-dom";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LANGUAGE_KEY, THEME } from "./store/constants";
import { useGeneralStore } from "./store/general";
import "./i18n/config";
import { dir } from "i18next";
import { Header } from "./components/common";
import { AnimatePresence } from "framer-motion";
import Home from "./containers/home";
import PresureConfig from "./containers/presureConfig";
import AmperConfig from "./containers/amperConfig";
// import PresureConfig from "./containers/presureConfig";

// const Home = lazy(() => import("./containers/home"));
// const AmperConfig = lazy(() => import("./containers/amperConfig"));
// const PresureConfig = lazy(() => import("./containers/presureConfig"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});
function App() {
  const { [THEME]: theme, [LANGUAGE_KEY]: lng } = useGeneralStore();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("dir", dir(lng));
  }, [lng]);
  return (
    <div dir={dir(lng)}>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        {/* <BrowserRouter> */}
          {/* <Suspense
            fallback={
              <div
                className="flex column alignCenter justifyCenter"
                style={{ height: "100vh" }}
              >
                <Loading size="4em" borderWidth="0.25em" />
              </div>
            }
          > */}
            <LocationProvider>
              <RoutesWithAnimation />
            </LocationProvider>
          {/* </Suspense> */}
        {/* </BrowserRouter> */}
      </QueryClientProvider>
    </div>
  );
}
const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
}

const RoutesWithAnimation = () => {
  
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

const pages: {
  [key: string]: React.ComponentType<any>;
} = {
  "/dashboard/home": Home,
  "/dashboard/presureConfig": PresureConfig,
  "/dashboard/amperConfig": AmperConfig,
}
const Content = () => {
  // const location = useLocation();
  const _currentPage = useGeneralStore(_state => _state.CURRENT_PAGE)
  // console.log('currentPage', _currentPage)
  const Comp = pages[_currentPage.url] || Home;
   
  return (
    <Comp/>
  );
  // return (
  //   <Routes>
  //     <Route
  //       path="*"
  //       element={<Navigate to="dashboard/home" replace />}
  //     />
  //     <Route path="dashboard/presureConfig" element={<PresureConfig />} />
  //     <Route path="dashboard/home" element={<Home />} />
  //     <Route path="dashboard/amperConfig/:type/:amperId" element={<AmperConfig />} />
  //   </Routes>
  // )
}
export default App;
