import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NPage from "./pages/NPage/NPage";
import TablePage from "./pages/TablePage/TablePage";
import Layout from "../src/component/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TablePage />} />
          <Route path="/notes" element={<NPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
