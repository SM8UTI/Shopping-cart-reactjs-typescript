import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error, Home, Store } from "../Pages";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
