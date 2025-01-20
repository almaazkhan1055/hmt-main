import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { data } from "../Data";
import Navbar from "./components/navbar";

const App = () => {
  const { links } = data;

  return (
    <Router>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
    </Router>
  );
};

export default App;
