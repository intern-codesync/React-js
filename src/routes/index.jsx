import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/AboutPage";
import UserProfile from "../pages/Useparams";
import UserNavigation from "../pages/UserNavigation";
import UseLocation from "../pages/UseLocation";
import Page404 from "../pages/Page404";
import MainLayouts from "../layouts/MainLayouts";
import DashboardLayout from "../layouts/DashboardLayout";
import PropsData from "../components/PropsData";

const routes = [
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { path: "about", element: <About /> },
      { path: "userprofile/:Id", element: <UserProfile /> },
      { path: "usernavigation", element: <UserNavigation /> },
      { path: "uselocation/fullroute/uselocation", element: <UseLocation /> },
      { path: "PropsData", element: <PropsData /> }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "profile", element: <div>Profile Page</div> },
      { path: "products", element: <div>Products</div> },
      // Add more dashboard children routes as needed
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
