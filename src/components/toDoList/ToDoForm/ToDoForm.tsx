import React, { useState } from "react";
import "./toDoForm.css";
import { useToDoList } from "../ToDoListProvider";

export const ToDoForm = () => {
  const [toDo, setTodo] = useState("");
  const { toDoList, setToDoList } = useToDoList();

  const addToDo = React.useCallback(() => {
    const toDoListCopy = Array.from(toDoList);
    toDoListCopy.push(toDo);
    setToDoList(toDoListCopy);
    setTodo("");
  }, [setToDoList, toDo, toDoList]);

  return (
    <div className="to-do-form">
      <input
        type="text"
        placeholder="Add a todo"
        name="add-todo"
        value={toDo}
        onChange={(e) => setTodo(e.target.value)}
        required={true}
      />
      <button onClick={addToDo}>Add ToDo</button>
    </div>
  );
};
