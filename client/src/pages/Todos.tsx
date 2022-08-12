import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";
import { ToDoAPI, ListType } from "../apis/ToDo";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const [list, setList] = useState<ListType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인이 되어있다면 바로 리다이렉트되도록
    !token && navigate("/auth/login");
  }, [token, navigate]); // TODO: navigate를 Deps으로..?

  useEffect(() => {
    ToDoAPI.getTodos(token).then((res) => {
      setList(res.data.data);
    });
  }, [token]);

  const handleAddList = (todo: ListType) => {
    const newList = [...list, todo];
    setList(newList);
  };

  const handleDelete = (id: string) => {
    const newList = [...list].filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <Container id="top">
      <Nav>
        {list.map((list, idx) => (
          <Li key={idx}>
            <Link to={list.id} spy={true} smooth={true}>
              {list.title}
            </Link>
          </Li>
        ))}
        <TopButton>
          <Link to="top" spy={true} smooth={true}>
            TOP
          </Link>
        </TopButton>
      </Nav>
      <Content>
        <Title>WANTED PREONBOARDING CHALLENGE FE 1</Title>
        <section>
          <AddTodo handleAddList={(todo: ListType) => handleAddList(todo)} />
        </section>
        <section>
          {list.map(
            (list, idx) => (
              console.log(list.title),
              (
                <TodoList
                  list={list}
                  key={idx}
                  handleDelete={(id: string) => handleDelete(id)}
                />
              )
            )
          )}
        </section>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
  display: flex;
`;

const Title = styled.header`
  width: 60%;
  font-weight: 800;
  font-size: 4rem;
  text-align: left;
`;

const Nav = styled.nav`
  flex: 25%;
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem;
`;

const TopButton = styled.p`
  background: none;
  font-weight: bold;
  border: none;
  font-size: 1.2rem;
  position: fixed;
  bottom: 0;
  margin-bottom: 3rem;
  &:hover {
    opacity: 0.5;
  }
`;

const Li = styled.li`
  list-style: none;
  font-weight: 500;
`;
const Content = styled.div`
  flex: 75%;
`;

export default Todos;
