import { createBrowserRouter } from "react-router-dom";
import NullPage from "../pages/NullPage";
import OfferListPage from "../pages/OfferListPage";
import LoginPage from "../pages/LoginPage";
import NotificationPage from "../pages/NotificationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OfferListPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NullPage />,
  },
]);
