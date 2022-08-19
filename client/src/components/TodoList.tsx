import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoAPI, ListType } from "../apis/ToDo";
import { BasicButton, Textarea, Title } from "./AddTodo";

const TodoList = ({
  list,
  handleDelete,
  handleUpdate,
}: {
  list: ListType;
  handleDelete: (id: string) => void;
  handleUpdate: (todo: ListType) => void;
}) => {
  const [title, setTitle] = useState(list.title);
  const [content, setContent] = useState(list.content);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    setTitle(list.title);
    setContent(list.content);
  }, [list]);

  const onhandleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const onhandleUpdate = () => {
    onhandleDisabled();
    const todo = {
      ...list,
      title,
      content,
    };
    !isDisabled && handleUpdate(todo);
    ToDoAPI.update(list.id, token, todo).then((res) => handleUpdate(res.data));
  };

  const onhandleDelete = () => {
    handleDelete(list.id);
    ToDoAPI.del(list.id, token);
  };

  return (
    <ListContainer>
      <ListTitle
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        spellCheck={false}
        disabled={isDisabled}
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
        disabled={isDisabled}
      />
      <ButtonContainer>
        <BasicButton onClick={onhandleUpdate}>
          {isDisabled ? "Update" : "Activated"}
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
