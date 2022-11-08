import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <h1>Users Layout</h1>
      <Outlet />
    </>
  );
};

export default Users;
