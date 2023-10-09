import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath, children }) => {
  if (!user) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};
export default ProtectedRoute;
