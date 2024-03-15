import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import Blogs from "../pages/Blogs";
import Register from "../pages/Register";
import Login from "../pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
