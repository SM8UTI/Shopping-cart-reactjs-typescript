import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "./Routes/router.tsx";
import { Provider } from "react-redux";
import Store from "./Store/Store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={BrowserRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
