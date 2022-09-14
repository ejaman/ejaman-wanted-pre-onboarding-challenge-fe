import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ToDoAPI, IList } from "../apis/ToDo";
import { BasicButton, Textarea, Title } from "./AddTodo";
import AlertDialog from "./AlertDialog";
import SimpleSnackbar from "./SimpleSnackbar";

const TodoList = ({
  list,
  id,
  handleDelete,
  handleUpdate,
}: {
  list: IList;
  id: string;
  handleDelete: (id: string) => void;
  handleUpdate: (todo: IList) => void;
}) => {
  const [title, setTitle] = useState(list.title);
  const [content, setContent] = useState(list.content);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string>();

  const token = localStorage.getItem("token") || "";

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
      handleUpdate(todo);
      try {
        await ToDoAPI.update(list.id, token, todo).then((res) => {
          handleUpdate(res.data);
          setOption("update"); // success alert
          setIsAlertOpen(true);
        });
      } catch (err) {
        setOption("fail"); // error alert
      }
    }
  };

  const onhandleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ListContainer id={id}>
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
        <BasicButton onClick={onhandleClick}>Delete</BasicButton>
        <AlertDialog
          list={list.id}
          token={token}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDelete={handleDelete}
        />
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
