import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IList } from "../apis/ToDo";
import AddTodo from "../components/AddTodo";
import Search from "../components/Search";
import Sort from "../components/Sort";
import TodoList from "../components/TodoList";
import { useGetTodos } from "../hooks/useTodoQuery";

const Todos = () => {
  const token = localStorage.getItem("token") || "";
  const navigate = useNavigate();
  const { isLoading, data } = useGetTodos(token);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>("title");

  useEffect(() => {
    // 로그인이 되어있다면 바로 리다이렉트되도록
    !token && navigate("/auth/login");
  }, [token, navigate]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const searchResult = data?.data
    .filter((list: IList) =>
      list.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a: IList, b: IList) => {
      if (sortValue === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortValue === "content") {
        return a.content.localeCompare(b.content);
      } else if (sortValue === "date") {
        return a.updatedAt.localeCompare(b.updatedAt);
      }
    });

  return (
    <Container id="top">
      <Content>
        <Section>
          <Search
            setSearchValue={(value: string) => {
              setSearchValue(value);
            }}
          />
          <Button
            onClick={() => {
              setIsAddOpen(true);
            }}
          >
            Add Todo
          </Button>

          {isAddOpen && (
            <AddTodo
              setIsAddOpen={() => {
                setIsAddOpen(false);
              }}
            />
          )}
        </Section>
        <Sort
          setSortValue={(value: string) => {
            setSortValue(value);
          }}
        />
        <section>
          {data ? (
            searchResult.map((list: IList, idx: number) => (
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
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 1rem;
  @media screen and (max-width: 62.5rem) {
    width: 100%;
    margin: 0;
    padding-left: 1.5rem;
  }
`;

const Section = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0 0 2rem 0;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 2px solid white;
  background: none;
  color: white;
  font-weight: 600;
  width: 3rem;
  text-align: center;
  margin-left: auto;
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

export default Todos;
