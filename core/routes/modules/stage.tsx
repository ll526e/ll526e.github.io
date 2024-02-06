import { RouteObject } from 'react-router-dom'

import Stage from "@pages/stage";
import Login from "@pages/stage/Login";
import Workspace from "@pages/stage/workspace";
import WorkspaceGrid from "@pages/stage/workspace/Grid";
import WorkspaceUser from "@pages/stage/workspace/User";

import Manage from "@pages/stage/manage";

const StageRouter: RouteObject = {
  path: "/stage",
  element: <Stage />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "workspace",
      element: <Workspace />,
      children: [
        {
          path: "",
          element: <WorkspaceGrid />,
        },
        {
          path: "user",
          element: <WorkspaceUser />,
        },
      ]
    },
    {
      path: "manage",
      element: <Manage />
    }
  ]
}


export default StageRouter