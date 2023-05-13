import React, { useCallback } from "react";
import { useToDoList } from "../ToDoListProvider";

type Props = {
  value: string;
  itemNo: number;
};

export const ToDoListItem = ({ value, itemNo }: Props) => {
  const { toDoList, setToDoList } = useToDoList();

  const deleteLIstItem = useCallback(
    (itemNo: number) => {
      const toDoListCopy = [...toDoList];
      toDoListCopy.splice(itemNo, 1);
      setToDoList(toDoListCopy);
    },
    [setToDoList, toDoList]
  );

  return (
    <li>
      {value} <button onClick={() => deleteLIstItem(itemNo)}>X</button>
    </li>
  );
};
