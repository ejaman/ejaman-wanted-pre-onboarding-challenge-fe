import React, { useRef } from "react";
import { createTodo } from "../apis";

const AddTodo = () => {
  const token = localStorage.getItem("token") || "";
  const TitleRef = useRef<HTMLInputElement>(null);
  const ContentRef = useRef<HTMLInputElement>(null);

  const onhandleAdd = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const todo = {
      title: TitleRef.current!.value,
      content: ContentRef.current!.value,
    };
    createTodo(token, todo);
  };

  return (
    <div>
      <h3>add todo</h3>
      <input ref={TitleRef} placeholder="title" />
      <input ref={ContentRef} placeholder="content" />
      {/* TODO: input, textarea 차이? */}
      <button onClick={onhandleAdd}>add</button>
    </div>
  );
};

export default AddTodo;
