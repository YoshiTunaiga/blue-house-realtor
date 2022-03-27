import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./Footer/AuthContext";

export default function ProviderRoute({ children }) {
  let { currentUser } = useAuth();
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

// import React from "react";
// import { Route, useNavigate } from "react-router-dom";
// import { useAuth } from "./Footer/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? <Component {...props} /> : navigate("/signin");
//       }}
//     ></Route>
//   );
// }
