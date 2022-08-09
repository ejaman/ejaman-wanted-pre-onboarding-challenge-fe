import styled from "styled-components";
export const Container = styled.section`
  background-color: white;
  border-radius: 10px;
  width: 25rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.4rem;
  margin: auto;
`;

export const LoginInput = styled.input`
  width: 90%;
  border: none;
  border-bottom: 2px solid;
  outline: none;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const PText = styled.div`
  height: 1rem;
  font-size: 0.9rem;
  margin: 1rem;
`;
export const BasicBtn = styled.button`
  padding: 0.6rem;
  margin-top: 0.5rem;
  background-color: black;
  color: white;
  border: thin;
  border-radius: 5px;
  width: 95%;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid;
  &:hover {
    border: 2px solid;
    background-color: white;
    color: black;
  }
`;
