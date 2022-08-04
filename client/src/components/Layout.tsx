import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const ContentWrapper = styled.div`
  flex: 1;
`;

export default function Layout() {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </div>
  );
}
