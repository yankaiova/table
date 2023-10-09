import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NPage from "./pages/NPage/NPage";
import TablePage from "./pages/TablePage/TablePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "../src/component/Layout";
import ProtectedRoute from "./router/ProtectedRoute";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="App">
      {isAuth && <Layout />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={isAuth} redirectPath={"/login"}>
              {" "}
              <TablePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/n"
          element={
            <ProtectedRoute user={isAuth} redirectPath={"/login"}>
              {" "}
              <NPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute user={!isAuth} redirectPath={"/"}>
              {" "}
              <LoginPage />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
