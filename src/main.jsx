import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Router
import { MainRoutes } from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";

//AuthProvider
import { AuthProvider } from "./components/login/authProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
