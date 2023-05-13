import React from "react";
import { Box } from "../Box/Box";
import { BoardRow } from "./BoardRow";
import { useConnectFour } from "../ConnectFourProvider";
import { PLAYER_TURN } from "../interface";
import "./board.css";
import { Winner } from "../Winner/Winner";

export const Board = () => {
  const {
    connectFourState: { board, winner },
  } = useConnectFour();
  return (
    <>
      {winner && <Winner />}
      <div className="cf-board">
        {board.map((boardRow: PLAYER_TURN[], rowIndex: number) => (
          <BoardRow boardRowkey={`row-${rowIndex}`}>
            {boardRow.map((_, colIndex) => (
              <Box col={colIndex} row={rowIndex} />
            ))}
          </BoardRow>
        ))}
      </div>
    </>
  );
};
