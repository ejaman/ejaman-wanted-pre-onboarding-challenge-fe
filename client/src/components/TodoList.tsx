import React, { useState, useEffect } from "react";
import TodoDetail from "./TodoDetail";
import { getTodos } from "../apis";

interface Itodo {
  title: string;
  content: string;
}
const TodoList = () => {
  const [lists, setLists] = useState<Itodo[]>([{ title: "", content: "" }]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getTodos(token);
    // .then((res) => setLists(res.data.data));
  }, [token]);

  return (
    <div>
      <h1>Todo List</h1>
      {lists.map((list, idx) => (
        <TodoDetail key={idx} />
      ))}
    </div>
  );
};

export default TodoList;
