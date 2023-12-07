
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@pages/Root";
import Error from "@pages/Error";

export const loader = async () => {
  const contacts = {};
  return { contacts };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [],
  }
]);



export const Routers = () => {
  return <RouterProvider router={router} />;
}
