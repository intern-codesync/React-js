import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/AboutPage";
import UserProfile from "../pages/Useparams";
import UserNavigation from "../pages/UserNavigation";
import UseLocation from "../pages/UseLocation";
import Page404 from "../pages/Page404";
import MainLayouts from "../layouts/MainLayouts";
import DashboardLayout from "../layouts/DashboardLayout";
import PropsData from "../components/PropsData";
import UseState from "../components/UseState/UseState";
import InputfieldUseState from "../components/UseState/InputfieldUseState"
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import Home from "../components/Home/Home";

const routes = [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "about", element: <About /> },
      { path: "userprofile/:Id", element: <UserProfile /> },
      { path: "usernavigation", element: <UserNavigation /> },
      { path: "uselocation/fullroute/uselocation", element: <UseLocation /> },
      { path: "PropsData", element: <PropsData /> },
      // {path: "", element: <Home/>}
      { path: "UseState", element: <UseState /> },
      {path: "InputfieldUseState", element: <InputfieldUseState/>}
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "profile", element: <div>Profile Page</div> },
      { path: "products", element: <div>Products</div> },
    ],
  },
  { path: "*", element: <Page404 /> },
];
// Create BrowserRouter
const BrowserRouter = createBrowserRouter(routes);

// Export the RouterProvider with configured routes
export const RouterProviderWithRoutes = () => (
  <RouterProvider routes={routes} router={BrowserRouter} />
);
