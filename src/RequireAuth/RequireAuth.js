import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../Component/fireBase.init/fireBase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  let location = useLocation();
  if (loading) {
    return (
      <div>
        {" "}
        <p> loading... </p>{" "}
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (loading) {
    return (
      <div>
        {" "}
        <p> loading... </p>{" "}
      </div>
    );
  }
  return children;
};

export default RequireAuth;