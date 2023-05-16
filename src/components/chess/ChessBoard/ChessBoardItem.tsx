import React from "react";
import { BoardItem as BoardItemType } from "../utils/types";
import "./chessBoardItem.css";

export const ChessBoardItem = ({ row, col }: BoardItemType): JSX.Element => {
  return <div className="chess-board__item">{`${row}-${col}`}</div>;
};
