import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold py-6">User Page</h1>
      <p>userId: {`${params.userId}`}</p>
      <div>
        <NavLink to="edit">User edit page</NavLink>
      </div>
      <div>
        <NavLink to="userslist">Users list</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default UserPage;
