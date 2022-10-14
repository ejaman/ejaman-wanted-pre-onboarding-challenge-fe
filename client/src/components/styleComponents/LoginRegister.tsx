import styled from "styled-components";
export const Container = styled.section`
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
  color: #e9e4dd;
`;

export const LoginInput = styled.input`
  width: 90%;
  border: none;
  background: none;
  border-bottom: 2px solid #e9e4dd;
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
export const BasicButton = styled.button`
  padding: 0.6rem;
  margin-top: 0.5rem;
  background-color: #e9e4dd;

  border: thin;
  border-radius: 5px;
  width: 95%;
  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.5;
  }
`;
