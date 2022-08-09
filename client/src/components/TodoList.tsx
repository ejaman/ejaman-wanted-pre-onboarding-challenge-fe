import React, { useState } from "react";
import styled from "styled-components";
import { deleteTodo, ListProps, updateTodo } from "../apis";
import { BasicBtn, Input, Title } from "./AddTodo";

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
      <BasicBtn
        onClick={() => {
          updateTodo(list.id, `Bearer ${token}`, { title, content });
        }}
      >
        Update
      </BasicBtn>
      <BasicBtn
        onClick={() => {
          deleteTodo(list.id, `Bearer ${token}`);
        }}
      >
        Delete
      </BasicBtn>
      <Divider></Divider>
    </ListContainer>
  );
};
const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background-color: #ffffff63;
  margin: auto;
  margin-top: 1.5rem;
`;
const ListContainer = styled.div`
  margin: 2rem;
  color: #ffffff63;
`;
const P = styled.p`
  font-size: 0.7rem;
`;

export default TodoList;
