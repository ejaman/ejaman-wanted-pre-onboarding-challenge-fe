import React, { useState } from "react";
import styled from "styled-components";
import { ToDoAPI, ListProps } from "../apis/ToDo";
import { BasicButton, Input, Title } from "./AddTodo";

const TodoList = ({ list }: ListProps) => {
  const token = localStorage.getItem("token") || "";
  const [title, setTitle] = useState<string>(list.title);
  const [content, setContent] = useState<string>(list.content);

  return (
    <ListContainer>
      <Title
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
        }}
      />
      <Input
        value={content}
        onChange={(event) => {
          setContent(event.currentTarget.value);
        }}
      />
      <P>{list.updatedAt}</P>
      <BasicButton
        onClick={() => {
          ToDoAPI.update(list.id, token, { title, content });
        }}
      >
        Update
      </BasicButton>
      <BasicButton
        onClick={() => {
          ToDoAPI.del(list.id, token);
          // deleteTodo(list.id, `Bearer ${token}`);
        }}
      >
        Delete
      </BasicButton>
    </ListContainer>
  );
};

const ListContainer = styled.section`
  margin: 2rem;
  color: #ffffffca;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 1rem;
  background-color: #a3a3a311;
`;
const P = styled.p`
  font-size: 0.7rem;
`;

export default TodoList;
