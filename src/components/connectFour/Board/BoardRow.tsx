import React from "react";
import "./boardRow.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  boardRowkey: string;
}

export const BoardRow = ({ children, boardRowkey }: Props) => {
  return (
    <div className="cf-row" key={boardRowkey}>
      {children}
    </div>
  );
};
