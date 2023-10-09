import React from "react";
import { Routes, Route } from "react-router-dom";
import NPage from "./pages/NPage/NPage";
import TablePage from "./pages/TablePage/TablePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "../src/component/Layout";
import ProtectedRoute from "./router/ProtectedRoute";
import "./App.css";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      {user && <Layout />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={user} redirectPath={"/login"}>
              {" "}
              <TablePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/n"
          element={
            <ProtectedRoute user={user} redirectPath={"/login"}>
              {" "}
              <NPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute user={!user} redirectPath={"/"}>
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
