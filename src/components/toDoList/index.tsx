import React from "react";
import { ToDoListProvider } from "./ToDoListProvider";
import { ToDo } from "./ToDo/ToDo";

export const ToDoList = () => {
  return (
    <div>
      <ToDoListProvider>
        <ToDo />
      </ToDoListProvider>
    </div>
  );
};
