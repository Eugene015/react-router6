import React from "react";
import routes from "./routes";
import { useRoutes, Outlet, NavLink } from "react-router-dom";

function App() {
  const elements = useRoutes(routes());
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col">
      {elements}
    </div>
  );
}

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <NavLink to="users">Users list</NavLink>
    </>
  );
};

export const UsersList = () => {
  return (
    <>
      <h1>Users List</h1>

      <div>
        <NavLink to=":userId">User page</NavLink>
      </div>
      <div>
        <NavLink to="/">Home page</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export const UserPage = () => {
  return (
    <>
      <h1>User Page</h1>

      <div>
        <NavLink to=":userId/edit">User edit page</NavLink>
      </div>
      <div>
        <NavLink to="users">Users list</NavLink>
      </div>
    </>
  );
};

export const EditUserPage = () => {
  return (
    <>
      <h1>Edit User Page</h1>

      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default App;
