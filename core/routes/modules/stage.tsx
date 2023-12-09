import Stage from "@pages/stage";
import StageLogin from "@pages/stage/Login";
import { RouteObject } from 'react-router-dom'
const StageRouter: RouteObject = {
  path: "/stage",
  element: <Stage />,
  children: [
    {
      path: "login",
      element: <StageLogin />
    }
  ]
}


export default StageRouter