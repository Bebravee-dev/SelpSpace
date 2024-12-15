import "./styles/MainStyles.scss";
import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import Products from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import PersonalPage from "./pages/PersonalPage";
import DocumentsPage from "./pages/DocumentsPage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUsPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/personal",
    element: <PersonalPage />,
  },
  {
    path: "/documents",
    element: <DocumentsPage />,
  },
  {
    path: "/authentication",
    element: <AuthenticationPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
