import React from "react";
import { useConnectFour } from "../ConnectFourProvider";
import { CONNECT_FOUR_ACTION } from "../constant";
import { PLAYERS } from "../interface";
import "./box.css";

type Props = {
  row: number;
  col: number;
};

export const Box = ({ row, col }: Props) => {
  const {
    connectFourState: { board, playerTurn, winner },
    dispatch,
  } = useConnectFour();

  const onSelection = React.useCallback(() => {
    if (winner) {
      return null;
    }
    const boardCopy = [...board];
    for (let i = board.length - 1; i >= 0; i--) {
      if (!boardCopy[i][col]) {
        boardCopy[i][col] = playerTurn;
        break;
      }
    }
    dispatch({
      type: CONNECT_FOUR_ACTION.SET_BOARD,
      payload: {
        board: boardCopy,
        boxItem: { row, col },
        playerTurn: playerTurn === PLAYERS.RED ? PLAYERS.YELLOW : PLAYERS.RED,
      },
    });
  }, [board, col, dispatch, playerTurn, row, winner]);

  return (
    <button
      key={`row-${row}-col-${col}`}
      className={`cf-box ${board[row][col]}`}
      onClick={onSelection}
      value={`${row}-${col}  `}
    ></button>
  );
};
