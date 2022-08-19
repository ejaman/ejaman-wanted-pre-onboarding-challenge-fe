import React, { useRef } from "react";
import styled from "styled-components";
import { ToDoAPI } from "../apis/ToDo";

// TODO: type 해결하기
const AddTodo = ({ handleAddList }: any) => {
  const token = localStorage.getItem("token") || "";
  const TitleRef = useRef<HTMLTextAreaElement>(null);
  const ContentRef = useRef<HTMLTextAreaElement>(null);

  const onhandleAdd = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const todo = {
      title: TitleRef.current!.value,
      content: ContentRef.current!.value,
    };
    await ToDoAPI.create(token, todo) //
      .then((res) => handleAddList(res.data.data));

    TitleRef.current!.value = "";
    ContentRef.current!.value = "";
  };

  return (
    <AddContainer>
      <Text>New Task</Text>
      <Title ref={TitleRef} placeholder="Title" spellCheck={false} />
      <Textarea ref={ContentRef} placeholder="Content" spellCheck={false} />
      <AlignButton>
        <BasicButton onClick={onhandleAdd}>ADD</BasicButton>
      </AlignButton>
    </AddContainer>
  );
};
export const AddContainer = styled.section`
  border-top: 2px solid;
  height: 14rem;
  margin-right: 1rem;
  width: 90%;
`;
const Text = styled.header`
  font-weight: 600;
  font-size: 2rem;
  text-align: left;
  padding: 0.5rem 0rem;
`;

const AlignButton = styled.div`
  text-align: left;
`;

export const Input = styled.textarea`
  display: flex;
  border: none;
  background: none;
  outline: none;
  width: 30rem;
  font-family: sans-serif;
  resize: none;
  overflow: hidden;
  padding: 0.2rem;
  ::placeholder {
    color: black;
    font-family: sans-serif;
  }
  &:disabled {
    color: black;
  }
`;

export const Title = styled(Input)`
  font-size: 1rem;
  font-weight: bold;
  height: 1.5rem;
`;

export const Textarea = styled(Input)`
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  height: 4rem;
`;
export const BasicButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  &:hover {
    opacity: 0.6;
  }
`;
export default AddTodo;
