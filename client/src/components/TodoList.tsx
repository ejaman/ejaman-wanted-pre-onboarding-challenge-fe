import React, { useState } from "react";
import styled from "styled-components";
import { idText } from "typescript";
import { ToDoAPI, ListProps } from "../apis/ToDo";
import { BasicButton, Textarea, Title } from "./AddTodo";

const TodoList = ({ list }: ListProps) => {
  const token = localStorage.getItem("token") || "";
  const [title, setTitle] = useState<string>(list.title);
  const [content, setContent] = useState<string>(list.content);

  return (
    <ListContainer>
      <ListTitle
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
        }}
        spellCheck={false}
        id={list.id}
      />
      <Textarea
        value={content}
        onChange={(event) => {
          setContent(event.currentTarget.value);
        }}
        spellCheck={false}
      />
      <ButtonContainer>
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
      </ButtonContainer>
    </ListContainer>
  );
};

const ListContainer = styled.section`
  margin-right: 1rem;
  border-top: 2px solid;
  text-align: left;
  height: 15rem;
  padding-top: 0.5rem;
`;

const ListTitle = styled(Title)`
  width: 90%;
  height: 3rem;
  font-weight: 600;
  font-size: 2.5rem;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
`;

export default TodoList;
