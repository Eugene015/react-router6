import { Navigate } from "react-router-dom";
import EditUserPage from "./EditUserPage";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UsersList from "./UsersList";
import Users from "./Users";

const routes = () => [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "users/*",
    element: <Users />,
    children: [
      {
        path: "",
        element: <Navigate to="/users/userslist" />,
      },
      {
        path: "userslist/*",
        element: <UsersList />,
        children: [
          {
            path: ":userId/*",
            element: <UserPage />,
            children: [
              {
                path: "",
                element: <Navigate to="profile" />,
              },
              { path: "profile", element: <EditUserPage /> },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="" />,
  },
];

export default routes;
