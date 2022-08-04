import React, { useRef } from "react";
import styled from "styled-components";
import { createTodo } from "../apis";

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
    createTodo(token, todo);
    TitleRef.current!.value = "";
    ContentRef.current!.value = "";
  };

  return (
    <AddContainer>
      <h3>new task</h3>
      <Title ref={TitleRef} placeholder="Title" />
      <Input ref={ContentRef} placeholder="Content" />
      {/* TODO: input, textarea 차이? */}
      <BasicBtn onClick={onhandleAdd}>ADD</BasicBtn>
    </AddContainer>
  );
};
const AddContainer = styled.form`
  padding: 1rem;
  padding-bottom: 2rem;
  border: 1px solid;
`;

export const Input = styled.input`
  display: flex;
  margin: auto;
  text-align: center;
  border: none;
  /* border-bottom: 1px solid; */
  padding: 0.3rem;
  margin-bottom: 1rem;
  outline: none;
  width: 30rem;
`;
export const Title = styled(Input)`
  font-size: 1rem;
  font-weight: bold;
`;

export const BasicBtn = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
  }
`;
export default AddTodo;
