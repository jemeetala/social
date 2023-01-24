import React from "react";
import Settings from "pages/Settings";
import Signup from "pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
