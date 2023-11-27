// Library imports
import { Routes, Route } from "react-router-dom";

// My imports
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { AuthRequired } from "../components/login/AuthRequired";
import Player from "../pages/player/main";
import Inputs from "../pages/inputs/Inputs";

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
        <Route path="/player" element={<Player />} />
        <Route path="/inputs" element={<Inputs />} />
      </Route>
    </Routes>
  );
};

export { MainRoutes };
