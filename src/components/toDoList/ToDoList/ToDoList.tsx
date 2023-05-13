import React from "react";
import "./toDoList.css";
import { useToDoList } from "../ToDoListProvider";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const { toDoList } = useToDoList();

  return (
    <ul className="to-do-list">
      {toDoList.map((toDoListItem, index) => (
        <ToDoListItem value={toDoListItem} itemNo={index} />
      ))}
    </ul>
  );
};
