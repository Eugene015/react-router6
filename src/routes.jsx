import { Navigate } from "react-router-dom";
import EditUserPage from "./EditUserPage";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UsersList from "./UsersList";

const routes = () => [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "users",
        element: <UsersList />,
        children: [
          {
            path: "",
            element: <Navigate to="/:userId/profile" />,
          },
          {
            path: ":userId",
            element: <UserPage />,
          },

          { path: "edit", element: <EditUserPage /> },
          {
            path: "*",
            element: <Navigate to="/:userId/profile" />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
