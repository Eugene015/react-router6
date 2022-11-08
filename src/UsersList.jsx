import React from "react";
import { Link, Outlet } from "react-router-dom";

const UsersList = () => {
  return (
    <>
      <h1 className="text-3xl font-bold pb-6">Users List</h1>

      <ul className="list-none pb-6">
        <li>
          <Link to="0">User 0</Link>
        </li>
        <li>
          <Link to="1">User 1</Link>
        </li>
        <li>
          <Link to="2">User 2</Link>
        </li>
        <li>
          <Link to="3">User 3</Link>
        </li>
        <li>
          <Link to="4">User 4</Link>
        </li>
      </ul>

      <div>
        <Link to="/">Home page</Link>
      </div>

      <Outlet />
    </>
  );
};

export default UsersList;
