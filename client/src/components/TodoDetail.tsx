import React, { useState } from "react";
import { deleteTodo, ListProps, updateTodo } from "../apis";

const TodoDetail = ({ list }: ListProps) => {
  const token = localStorage.getItem("token") || "";
  const [title, setTitle] = useState<string>(list.title);
  const [content, setContent] = useState<string>(list.content);

  return (
    <div>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.currentTarget.value);
        }}
      />
      <input
        value={content}
        onChange={(event) => {
          setContent(event.currentTarget.value);
        }}
      />
      <p>{list.updatedAt}</p>
      <button
        onClick={() => {
          updateTodo(list.id, `Bearer ${token}`, { title, content });
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          deleteTodo(list.id, `Bearer ${token}`);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoDetail;
