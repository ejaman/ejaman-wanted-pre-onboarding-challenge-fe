import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoAPI, ListType } from "../apis/ToDo";
import { BasicButton, Textarea, Title } from "./AddTodo";

const TodoList = ({
  list,
  handleDelete,
}: {
  list: ListType;
  handleDelete: (id: string) => void;
}) => {
  const token = localStorage.getItem("token") || "";
  const { title, content, id } = list;

  const onhandleDelete = () => {
    handleDelete(id);
    ToDoAPI.del(id, token);
  };

  return (
    <ListContainer>
      <ListTitle
        value={title}
        onChange={(event) => {
          // setTitle(event.currentTarget.value);
        }}
        spellCheck={false}
        id={list.id}
      />
      <Textarea
        value={content}
        onChange={(event) => {
          // setContent(event.currentTarget.value);
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
        <BasicButton onClick={onhandleDelete}>Delete</BasicButton>
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
  width: 90%;
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
