import React from "react";
import { BoardItem } from "../utils/types";
import { useChess } from "../ChessProvider";
import "./chessBoardItem.css";

export const ChessBoardItem = ({ row, col, val }: BoardItem): JSX.Element => {
  const { onBoardItemSelect } = useChess();

  return (
    <button
      className={`chess-board__item ${val.player}-${val.piece}`}
      data-chess={`${val.player}-${val.piece}-${row}-${col}`}
      onClick={() => onBoardItemSelect({ row, col, val })}
      key={`board-item-${row}-${col}`}
    >
      {`${row}-${col}`}
    </button>
  );
};
