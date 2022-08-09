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
      <AddDiv>
        <AddTodo />
      </AddDiv>
      <ListDiv>
        {lists.map((list, idx) => (
          <TodoList list={list} key={idx} />
        ))}
      </ListDiv>
    </Container>
  );
};
const Container = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
`;

const Div = styled.div`
  /* border: 1px solid; */
  margin: auto;
  overflow: auto;
`;
const AddDiv = styled(Div)`
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const ListDiv = styled(Div)`
  margin-top: 4rem;
  height: 30rem;

  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export default Todos;
