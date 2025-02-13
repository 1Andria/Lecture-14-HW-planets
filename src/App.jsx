import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router";
import Planets from "./Pages/Planets/Planets";
import Data from "./data.json";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/planets/Earth" />} />
          <Route path="/planets/:name" element={<Planets Data={Data} />} />
          <Route
            path="*"
            element={
              <>
                <h1 className="text-black text-[20px] pl-[30px]">
                  404: This planet doesn’t exist.🛸You want to go home?🌍
                </h1>
                <Link
                  to="/planets/Earth"
                  className="text-[blue] underline pl-[30px]"
                >
                  Back To Earth 🚀
                </Link>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
