import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import LoginPage from "../app/auth/LoginPage";
  import Dashboard from "../app/tasks/Dashboard";
  
  function AppRoutes() {
    return (
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
  
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    );
  }
  
  export default AppRoutes;