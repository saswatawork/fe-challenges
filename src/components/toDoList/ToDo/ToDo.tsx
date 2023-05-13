import React from "react";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import "./todo.css";

export const ToDo = () => {
  return (
    <div className="todo">
      <h3>What's your plan for today?</h3>
      <ToDoForm />
      <ToDoList />
    </div>
  );
};
