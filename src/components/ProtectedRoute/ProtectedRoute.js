import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, path }) => {
  console.log(`on path ${path} and isLoggedIn=${isLoggedIn} what is ${children}`);
  return (
    <Route path={path}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};
export default ProtectedRoute;
