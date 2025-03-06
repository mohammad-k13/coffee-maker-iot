// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons/lib";
import App from "./App";
import "~/assets/scss/main.scss";
import "react-loading-skeleton/dist/skeleton.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider
      value={{
        size: "1.5em",
      }}
    >
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          // style: {
          //   background: '#363636',
          //   color: '#fff',
          // },

          // Default options for specific types
          success: {
            duration: 3000,
            // theme: {
            //   primary: 'green',
            //   secondary: 'black',
            // },
          },
        }}
      />
      <App />
    </IconContext.Provider>
  </React.StrictMode>
);
