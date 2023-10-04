import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Таблица</NavLink>
        <NavLink to="/notes">N</NavLink>
      </header>
      <Outlet />
    </>
  );
};
export default Layout;
