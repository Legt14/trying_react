import { useState, createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

export const authContext = createContext(null);

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [userdata, setusedata] = useState({
    loged: false,
    username: "",
    password: "",
  });

  const authProcess = (user) => {
    setusedata({
      loged: user.loged,
      username: user.username,
      password: user.password,
    });

    if (userdata.loged) {
      return <Navigate to="/dashboard" replace />;
    }
  };
  const value = userdata;

  return (
    <authContext.Provider value={{ value, authProcess }}>
      {children}
    </authContext.Provider>
  );
};
