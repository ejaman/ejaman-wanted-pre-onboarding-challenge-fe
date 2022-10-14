import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // 리액트 쿼리의 개발도구
import { RecoilRoot } from "recoil";

const querClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      // staleTime은 기본 0
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={querClient}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route element={<Layout />}>
                <Route path="/todo" element={<Todos />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
        {/* 디퐅트로 열리지 않게 하기 위해서 */}
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
