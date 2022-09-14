import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Container = styled.div`
  width: 100vw;
  @media screen and (max-width: 62.5rem) {
    width: 100%;
    padding-right: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
}
