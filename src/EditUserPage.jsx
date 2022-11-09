import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(+1);
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

export default EditUserPage;
