import { useAuth } from "./authProvider";
import { useLocation, Navigate } from "react-router-dom";

export const AuthRequired = ({ children }) => {
  const user = useAuth();
  const location = useLocation();

  console.log(user);

  if (!user.value.loged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
