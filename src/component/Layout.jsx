import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Таблица</NavLink>
        <NavLink to="/n">Счетчик строк</NavLink>
      </header>
      <Outlet />
    </div>
  );
};
export default Layout;
