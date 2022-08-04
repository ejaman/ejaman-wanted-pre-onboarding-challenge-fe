import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTodos, ListType } from "../apis";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    getTodos(token).then((res) => {
      setLists(res.data.data);
    });
  }, [lists, token]); // TODO: 렌더링 계속되는거같음

  return (
    <Container>
      <AddTodo />
      {lists.map((list, idx) => (
        <TodoList list={list} key={idx} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export default Todos;
