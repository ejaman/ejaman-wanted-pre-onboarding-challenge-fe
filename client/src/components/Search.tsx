import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 1px solid #eceae7;
  border-radius: 10px;
`;

const Title = styled.p`
  flex: 20%;
  padding: 0 0.8rem;
  border: none;
  border-radius: 10px;
  background: none;
  color: #eceae7;
  font-size: 0.8rem;
  font-weight: 700;
`;

const Input = styled.input`
  flex: 50%;
  padding: 0.3rem;
  border: none;
  outline: none;
  background: none;
  color: #eceae7;
`;

const Button = styled.button`
  flex: 30%;
  padding: 0 0.8rem;
  border: none;
  background: none;
  font-weight: 600;
  color: #eceae7;
  &:hover {
    opacity: 0.5;
  }
`;

const Search = ({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    setSearchValue(InputRef.current?.value || "");
  };
  return (
    <Container>
      <Title>제목</Title>
      <Input type="search" ref={InputRef} />
      <Button onClick={onButtonClick}>Search</Button>
    </Container>
  );
};

export default Search;
