import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import CSS from "../pages/CSS";
import JavaScript from "../pages/JavaScript";
import Layout from "./Layout";
import NotFoundPage from "./NotFoundPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route element={<Layout />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/css" element={<CSS />} />
            <Route path="/js" element={<JavaScript />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
