import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
const Background = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 375px;
  margin: auto;

  @media screen and (max-width: 62.5rem) {
    width: 100%;
    box-sizing: border-box;
    padding-right: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

export default function Layout() {
  return (
    <Background>
      <Container>
        <Header />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Container>
    </Background>
  );
}
