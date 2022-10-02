import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";
import { IList } from "../apis/ToDo";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useGetTodos } from "../hooks/useTodoQuery";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const navigate = useNavigate();
  const { isLoading, data, isError } = useGetTodos(token);

  useEffect(() => {
    // 로그인이 되어있다면 바로 리다이렉트되도록
    !token && navigate("/auth/login");
  }, [token, navigate]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>error occur</h2>;
  }

  return (
    <Container id="top">
      <Nav>
        {data?.data.map((list: IList, idx: number) => (
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
        <Title>WANTED PREONBOARDING CHALLENGE</Title>
        <section>
          <AddTodo />
        </section>
        <section>
          {data ? (
            data?.data.map((list: IList, idx: number) => (
              <TodoList list={list} key={idx} id={list.id} />
            ))
          ) : (
            <div>todo가 없습니다!</div>
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
  @media screen and (max-width: 62.5rem) {
    width: 100%;
    margin: 0;
    padding-left: 1.5rem;
  }
`;

const Title = styled.header`
  flex: 60%;
  font-weight: 800;
  font-size: 4rem;
  text-align: left;
  @media screen and (max-width: 62.5rem) {
    font-size: 3rem;
    flex: 1;
  }
`;

const Nav = styled.nav`
  flex: 25%;
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  @media screen and (max-width: 62.5rem) {
    display: none;
  }
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
const Content = styled.div`
  flex: 75%;
  @media screen and (max-width: 62.5rem) {
    flex: 1;
    width: 100%;
  }
`;
const Li = styled.li`
  list-style: none;
  font-weight: 500;
  @media screen and (max-width: 62.5rem) {
    width: 100%;
  }
`;

export default Todos;
