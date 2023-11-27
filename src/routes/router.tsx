import { createBrowserRouter } from "react-router-dom";
import NullPage from "../pages/NullPage";
import OfferListPage from "../pages/OfferListPage";
import OfferAddPage from "../pages/OfferAddPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OfferListPage />,
  },
  {
    path: "/add",
    element: <OfferAddPage />,
  },
  {
    path: "/edit",
    element: <OfferAddPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    // path: "/",
    // element: <Layout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <ProductListingPage />,
    //   },
    //   {
    //     path: "sign-up",
    //     element: <RegistrationPage />,
    //   },
    //   {
    //     path: "sign-in",
    //     element: <LoginPage />,
    //   },
    //   {
    //     path: "add-product",
    //     element: <ProductAddOrEditPage />,
    //   },
    //   {
    //     path: "/edit-product/:id",
    //     element: <ProductAddOrEditPage />,
    //   },
    //   {
    //     path: "*",
    //     element: <NullPage />,
    //   },
    // ],
  },
  {
    path: "*",
    element: <NullPage />,
  },
]);
