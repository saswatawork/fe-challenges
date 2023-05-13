import React from "react";
import "./boardRow.css";

type BoardRowProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const BoardRow = ({ children }: BoardRowProps): JSX.Element => {
  return <div className="sudoku-board__row">{children}</div>;
};
