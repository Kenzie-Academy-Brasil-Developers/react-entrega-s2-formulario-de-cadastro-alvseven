import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesMain;
