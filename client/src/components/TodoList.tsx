import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IList } from "../apis/ToDo";
import { useUpdateToDo } from "../hooks/useTodoQuery";
import { BasicButton } from "./AddTodo";
import AlertDialog from "./AlertDialog";
import SimpleSnackbar from "./SimpleSnackbar";

const TodoList = ({ list, id }: { list: IList; id: string }) => {
  const [title, setTitle] = useState(list.title);
  const [content, setContent] = useState(list.content);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>();

  const update = useUpdateToDo(id);
  const { mutateAsync, isLoading } = update;

  useEffect(() => {
    setTitle(list.title);
    setContent(list.content);
  }, [list]);

  const onhandleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const onhandleUpdate = async () => {
    onhandleDisabled();
    const todo = {
      ...list,
      title,
      content,
    };
    if (!isDisabled) {
      try {
        await mutateAsync(todo);
        setOption("update"); // success alert
        setIsAlertOpen(true);
      } catch (err) {
        setOption("fail"); // error alert
      }
    }
  };

  const onhandleClick = () => {
    setIsOpen(!isOpen);
  };

  const date = new Date(list.updatedAt).toDateString();

  return (
    <ListContainer id={id}>
      <Title
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        spellCheck={false}
        disabled={isDisabled}
      />
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        spellCheck={false}
        disabled={isDisabled}
      />

      <ButtonContainer>
        <P>{date}</P>
        <Wrapper>
          <BasicButton onClick={onhandleUpdate}>
            {isDisabled ? "Update" : "Activated"}
          </BasicButton>
          <BasicButton onClick={onhandleClick}>Delete</BasicButton>
        </Wrapper>
        <AlertDialog list={list.id} isOpen={isOpen} setIsOpen={setIsOpen} />
      </ButtonContainer>
      <SimpleSnackbar
        option={option}
        isAlertOpen={isAlertOpen}
        setIsAlertOpen={setIsAlertOpen}
      />
    </ListContainer>
  );
};

const ListContainer = styled.section`
  margin-top: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  background-color: #ffffff19;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 62.5rem) {
    width: 100%;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  padding: 0.2rem;
  font-size: 1rem;
  color: black;
  color: white;
`;

const Title = styled(Input)`
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 0.5rem;
`;

const Wrapper = styled.div``;

const P = styled.div`
  color: white;
  font-size: 0.7rem;
  margin-right: auto;
`;

export default TodoList;
