import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Select = styled.select`
  background-color: #ffffff19;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 0.2rem 0.5rem;
  outline: none;
`;

const Sort = ({ setSortValue }: { setSortValue: (value: string) => void }) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  };

  return (
    <Container>
      <Select onChange={onChange} name="sort" id="sort">
        <option value="title">제목</option>
        <option value="content">내용</option>
        <option value="date">날짜</option>
      </Select>
    </Container>
  );
};

export default Sort;
