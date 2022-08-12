import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// TODO: 나중에 질문하기 -> 타입스크립트 사용때문에 생기는 에러
// import { ReactQueryDevtools } from "react-query/devtools";

// const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    <App />
    {/* </QueryClientProvider> */}
  </React.StrictMode>
);
