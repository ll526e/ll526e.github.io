
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@pages/App";
import Error from "@pages/Error";
import Home from "@pages/Home";
import Docs from "@pages/Docs";
import Contact from "@pages/Contact";
import BackStage from "@pages/BackStage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/docs",
        element: <Docs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },
  {
    path: "/stage",
    element: <BackStage />,
  }
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
}
