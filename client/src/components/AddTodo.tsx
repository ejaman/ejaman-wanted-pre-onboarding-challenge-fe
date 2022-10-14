import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useCreateTodo } from "../hooks/useTodoQuery";
import Modal from "./Modal";
import SimpleSnackbar from "./SimpleSnackbar";

// TODO: type 해결하기

const AddTodo = ({
  setIsAddOpen,
}: {
  setIsAddOpen: (bool: boolean) => void;
}) => {
  const create = useCreateTodo();
  const { mutateAsync, isLoading } = create;

  const TitleRef = useRef<HTMLInputElement>(null);
  const ContentRef = useRef<HTMLInputElement>(null);
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
    setIsAddOpen(false);
  };

  return (
    <Modal
      _handleModal={() => {
        setIsAddOpen(false);
      }}
    >
      <AddContainer>
        <Button
          onClick={() => {
            setIsAddOpen(false);
          }}
        >
          x
        </Button>
        <Text>New Task</Text>
        <Title ref={TitleRef} placeholder="Title" spellCheck={false} />
        <Textarea ref={ContentRef} placeholder="Content" spellCheck={false} />
        <AlignButton>
          <AddButton onClick={onhandleAdd}>ADD</AddButton>
        </AlignButton>
        {isAlertOpen && (
          <SimpleSnackbar
            option={option}
            isAlertOpen={isAlertOpen}
            setIsAlertOpen={setIsAlertOpen}
          />
        )}
      </AddContainer>
    </Modal>
  );
};

export const AddContainer = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: black;
  margin-left: auto;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
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

export const Input = styled.input`
  display: flex;
  border: none;
  background: none;
  outline: none;
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
  margin-bottom: 1rem;
`;
export const BasicButton = styled.button`
  margin: auto;
  background: none;
  border: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const AddButton = styled(BasicButton)`
  color: black;
`;
export default AddTodo;
