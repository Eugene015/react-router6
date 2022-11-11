import React from "react";

import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="p-8">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="users" element={<Users />}>
          <Route
            path=":userId"
            element={<Navigate to="/users/:userId/profile" />}
          />
          <Route path="profile" element={<UserPage />} />
          <Route path="edit" element={<EditUserPage />} />
          <Route path="*" element={<Navigate to="/users/:userId/profile" />} />
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

const Users = ({ children }) => {
  return (
    <>
      <h1>Users Layout</h1>
      {children}
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
  return (
    <>
      <h1 className="text-3xl font-bold py-6">Users Layout</h1>

      {users.map((user) => {
        return (
          <>
            <ul className="list-none pb-6">
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.title}</Link>
              </li>
            </ul>
          </>
        );
      })}

      <div>
        <Link to="/">Home page</Link>
      </div>
    </>
  );
};

const UserPage = () => {
  const { userBlaId } = useParams();
  console.log(userBlaId);
  return (
    <>
      <h1 className="text-3xl font-bold py-6">User Page</h1>
      <p>userId: {`${userBlaId}`}</p>
      <div>
        <NavLink to="edit">User edit page</NavLink>
      </div>
      <div>
        <NavLink to="users">Users list</NavLink>
      </div>
    </>
  );
};

const EditUserPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(1);
  };
  return (
    <>
      <h1 className="text-3xl font-bold py-6">Edit User Page</h1>
      <div>
        <NavLink to=":userId">User Page</NavLink>
      </div>
      <div>
        <NavLink onClick={handleClick}>Another User Page</NavLink>
      </div>
      <div>
        <NavLink to="userlist">Users List</NavLink>
      </div>
    </>
  );
};

export default App;
