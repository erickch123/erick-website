import React, {useState,useEffect} from 'react';
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  console.log("app is running")
  return (
    <div className="App">
      {/* <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />

      </Routes>
       */}
      <h1 className="text-3xl-green font-bold underline">
        Hello world!
      </h1>   

    </div>
  );
}

export default App;
