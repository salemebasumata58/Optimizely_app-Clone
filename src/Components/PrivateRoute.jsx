import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AppContext);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
