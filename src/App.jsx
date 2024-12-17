import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
import Login from "./Pages/Login/try";
import Pages from "./Pages/PageNotFound/NotFoundPage";
import Register from "./Pages/Register/Register";
import Success from "./Pages/Success/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
