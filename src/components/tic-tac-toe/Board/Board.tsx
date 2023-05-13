import React from "react";
import { Box } from "../Box/Box";
import { useTTT } from "../TTTProvider";
import { Winner } from "../Winner/Winner";
import { BoardItem, BoardRow } from "../utils/interface";
import "./board.css";

export const Board = () => {
  const { board } = useTTT();
  return (
    <>
      <Winner />
      <div className="ttt-board">
        {board.map((boardRow: BoardRow, row: number) => {
          return (
            <div className="ttt-row">
              {boardRow.map((boardItem: BoardItem, col: number) => (
                <Box val={boardItem} row={row} col={col} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
