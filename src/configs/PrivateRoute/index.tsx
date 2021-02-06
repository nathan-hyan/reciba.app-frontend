/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "configs/UserContext";

const PrivateRoute = ({ render: Render, ...rest }: any) => {
  const User = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (User.isLoggedIn || localStorage.getItem("bill-token")) {
          return <Render {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
