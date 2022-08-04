import React, { useState, useEffect } from "react";

import { getTodos, ListType } from "../apis";
import AddTodo from "../components/AddTodo";
import TodoDetail from "../components/TodoDetail";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    getTodos(token).then((res) => {
      setLists(res.data.data);
    });
  }, [lists, token]); // TODO: 렌더링 계속되는거같음

  return (
    <div>
      <AddTodo />
      {lists.map((list, idx) => (
        <div key={idx}>
          <TodoDetail list={list} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
