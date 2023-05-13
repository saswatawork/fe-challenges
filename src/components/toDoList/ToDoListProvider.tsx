import React, { useState } from "react";

interface ToDoListProps {
  toDoList: string[];
  setToDoList: (v: string[]) => void;
}

const ToDoListContext = React.createContext<ToDoListProps | null>(null);

export const useToDoList = () => {
  const toDoList = React.useContext(ToDoListContext);

  if (!toDoList) {
    throw new Error("useToDoList must be wrapped inside the ToDoListProvider");
  }
  return toDoList;
};

export const ToDoListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const value = React.useMemo(() => {
    return {
      toDoList,
      setToDoList,
    };
  }, [toDoList]);

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};
