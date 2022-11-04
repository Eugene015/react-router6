import { Navigate } from "react-router-dom";
import { EditUserPage, HomePage, UserPage, UsersList } from "./App";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "users",
    element: <UsersList />,
    children: [
      {
        path: ":userId",
        element: <UserPage />,
        children: [
          {
            path: "edit",
            element: <EditUserPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
