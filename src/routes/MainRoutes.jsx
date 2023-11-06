// Library imports
import { Routes, Route } from "react-router-dom";

// My imports
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { AuthRequired } from "../components/login/AuthRequired";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <AuthRequired>
              <Dashboard />
            </AuthRequired>
          }
        />
      </Route>
    </Routes>
  );
};

export { MainRoutes };
