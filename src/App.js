import React from "react";
import "./App.css";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-Up";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<SignIn />} />
        <Route path="/SignUp"  element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
