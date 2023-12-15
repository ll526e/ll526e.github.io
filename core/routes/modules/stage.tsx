import Stage from "@pages/stage";
import Login from "@pages/stage/Login";
import Home from "@pages/stage/home";
import { RouteObject } from 'react-router-dom'
const StageRouter: RouteObject = {
  path: "/stage",
  element: <Stage />,
  children: [
    {
      path: "login",
      element: <Login />
    },
    {
      path: "home",
      element: <Home />
    }
  ]
}


export default StageRouter