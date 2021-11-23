import React from "react";
import "./App.css";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-Up";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn1 from "./components/Sign-In-1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<SignIn />} />
        <Route path="/SignUp"  element={<SignUp />} />
        <Route path="/Signin-1"  element={<SignIn1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
