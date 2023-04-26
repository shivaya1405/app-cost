import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./Component/Home";
import MenuList from "./Component/Common/MenuList";
import Container from "./Component/Container";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/tab",
        element: <Container />,
        children: [{ path: "/tab/:tabName", element: <MenuList /> }],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
