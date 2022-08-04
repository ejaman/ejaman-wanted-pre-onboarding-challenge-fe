import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoDetail from "./components/TodoDetail";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/todo" element={<Todos />} />
          <Route path="/todo/detail" element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
