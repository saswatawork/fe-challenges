import React from "react";

type BoardColProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const BoardCol = ({ children }: BoardColProps): JSX.Element => {
  return <div className="sudoku-board__col">{children}</div>;
};
