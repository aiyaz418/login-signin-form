import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginSignupForm from "./components/LoginSignupForm/LoginSignupForm";
import "./index.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  { path: "/login", element: <LoginSignupForm /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFound /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);