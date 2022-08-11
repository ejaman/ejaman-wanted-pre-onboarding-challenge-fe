import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToDoAPI, ListType } from "../apis/ToDo";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const [lists, setLists] = useState<ListType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인이 되어있다면 바로 리다이렉트되도록
    !token && navigate("/auth/login");
  }, [token, navigate]); // TODO: navigate를 Deps으로..?

  useEffect(() => {
    ToDoAPI.getTodos(token).then((res) => {
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
const AddDiv = styled(Div)``;
const ListDiv = styled(Div)`
  margin-top: 4rem;
  height: 30rem;

  &::-webkit-scrollbar {
    width: 10px;
  }
`;
export default Todos;
