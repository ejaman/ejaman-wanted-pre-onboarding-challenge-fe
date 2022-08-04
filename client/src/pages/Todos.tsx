import React from "react";
import TodoList from "../components/TodoList";
import { createTodo } from "../apis";
const token = localStorage.getItem("token");

const Todos = () => {
  return (
    <div>
      <button
        onClick={() => {
          createTodo(token);
        }}
      >
        add
      </button>
      <TodoList />
    </div>
  );
};

export default Todos;
