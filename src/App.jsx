import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Planets from "./Pages/Planets/Planets";
import Data from "./data.json";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/planets/Earth" />} />
          <Route path="/planets/:name" element={<Planets Data={Data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
