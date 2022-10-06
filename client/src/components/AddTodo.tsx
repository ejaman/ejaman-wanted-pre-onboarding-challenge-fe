import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useCreateTodo } from "../hooks/useTodoQuery";
import SimpleSnackbar from "./SimpleSnackbar";

// TODO: type 해결하기

const AddTodo = () => {
  const create = useCreateTodo();
  const { mutateAsync, isLoading } = create;

  console.log(mutateAsync, isLoading);

  const TitleRef = useRef<HTMLTextAreaElement>(null);
  const ContentRef = useRef<HTMLTextAreaElement>(null);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>();

  const onhandleAdd = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const todo = {
      title: TitleRef.current!.value,
      content: ContentRef.current!.value,
    };

    try {
      await mutateAsync(todo);
      setOption("success"); // success alert
    } catch (err) {
      setOption("fail"); // error alert
    }

    TitleRef.current!.value = "";
    ContentRef.current!.value = "";
    setIsAlertOpen(true);
  };

  return (
    <AddContainer>
      <Text>New Task</Text>
      <Title ref={TitleRef} placeholder="Title" spellCheck={false} />
      <Textarea ref={ContentRef} placeholder="Content" spellCheck={false} />
      <AlignButton>
        <BasicButton onClick={onhandleAdd}>ADD</BasicButton>
      </AlignButton>
      {isAlertOpen && (
        <SimpleSnackbar
          option={option}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
        />
      )}
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
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
export default AddTodo;
