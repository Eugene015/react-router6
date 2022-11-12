import React from "react";

import {
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="p-8">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="users" element={<Users />}>
          <Route index element={<UsersList />} />
          <Route
            path=":userId"
            element={<Navigate to={`${pathname}/profile`} />}
          />
          <Route path=":userId/profile" element={<UserPage />} />
          <Route path=":userId/edit" element={<EditUserPage />} />
          <Route path="*" element={<Navigate to={`users/:userId/profile`} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold pb-6">App Layout</h1>
      <NavLink to="users">Users list</NavLink>
    </>
  );
};

const Users = () => {
  return (
    <>
      <h1 className="text-3xl font-bold pb-6">Users Layout</h1>
      <Outlet />
    </>
  );
};

const UsersList = () => {
  const users = [
    {
      id: 0,
      title: "User 0",
    },
    {
      id: 1,
      title: "User 1",
    },
    {
      id: 2,
      title: "User 2",
    },
    {
      id: 3,
      title: "User 3",
    },
    {
      id: 4,
      title: "User 4",
    },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <h1 className="text-3xl font-bold py-6">Users Layout</h1>
      <ul className="list-none pb-6">
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`${pathname}/${user.id}`}>{user.title}</NavLink>
          </li>
        ))}
      </ul>

      <div>
        <NavLink to="/">Home page</NavLink>
      </div>
    </>
  );
};

const UserPage = (users) => {
  const { userId } = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold py-6">User Page</h1>
      <div>
        <NavLink to={`/users/${userId}/edit`}>User edit page</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users list</NavLink>
      </div>
      <div>UserId: {userId}</div>
    </>
  );
};

const EditUserPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold py-6">Edit User Page</h1>
      <div>
        <NavLink to={`/users/${userId}/profile`}>User Page</NavLink>
      </div>
      <div>
        <NavLink to={`/users/${Number(userId) + 1}/profile`}>
          Another User Page
        </NavLink>
      </div>
      <div>
        <NavLink to="/users">Users List</NavLink>
      </div>
    </>
  );
};

export default App;
