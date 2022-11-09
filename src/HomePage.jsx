import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold pb-6">App Layout</h1>
      <NavLink to="users">Users list</NavLink>
      <Outlet />
    </>
  );
};

export default HomePage;
