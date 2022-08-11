import React, { useRef } from "react";
import styled from "styled-components";
import { ToDoAPI } from "../apis/ToDo";

const AddTodo = () => {
  const token = localStorage.getItem("token") || "";
  const TitleRef = useRef<HTMLInputElement>(null);
  const ContentRef = useRef<HTMLInputElement>(null);

  const onhandleAdd = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const todo = {
      title: TitleRef.current!.value,
      content: ContentRef.current!.value,
    };
    ToDoAPI.create(token, todo);
    TitleRef.current!.value = "";
    ContentRef.current!.value = "";
  };

  return (
    <AddContainer>
      <h3>new task</h3>
      <Title ref={TitleRef} placeholder="Title" />
      <Input ref={ContentRef} placeholder="Content" />
      {/* TODO: input, textarea 차이? */}
      <BasicButton onClick={onhandleAdd}>ADD</BasicButton>
    </AddContainer>
  );
};
export const AddContainer = styled.section`
  padding: 1rem;
  padding-bottom: 2rem;
  color: #ffffffca;
`;

export const Input = styled.input`
  display: flex;
  margin: auto;
  text-align: center;
  border: none;
  background: none;
  padding: 0.3rem;
  margin-bottom: 1rem;
  outline: none;
  width: 30rem;
  color: #ffffffca;
`;
export const Title = styled(Input)`
  font-size: 1rem;
  font-weight: bold;
  color: #ffffffca;
`;

export const BasicButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  color: #ffffffca;

  &:hover {
    opacity: 0.6;
  }
`;
export default AddTodo;
