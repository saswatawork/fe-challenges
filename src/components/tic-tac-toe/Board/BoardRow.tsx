import React from "react";
import "./boardRow.css";

export const BoardRow = ({ children }: { children: React.ReactNode }) => {
  return <div className="ttt-board__row">{children}</div>;
};
