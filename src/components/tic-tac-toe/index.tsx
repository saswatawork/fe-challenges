import React from "react";
import { Board } from "./Board/Board";
import { TTTProvider } from "./TTTProvider";

export const TicTacToe = () => {
  return (
    <div>
      <TTTProvider>
        <h3>Tic Tac Toe</h3>
        <Board />
      </TTTProvider>
    </div>
  );
};
