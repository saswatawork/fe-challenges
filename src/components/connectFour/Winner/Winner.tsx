import React, { useCallback } from "react";
import { useConnectFour } from "../ConnectFourProvider";
import { PLAYERS } from "../interface";
import { CONNECT_FOUR_ACTION } from "../constant";
import "./winner.css";

export const Winner = () => {
  const {
    connectFourState: { playerTurn },
    dispatch,
  } = useConnectFour();

  const playAgain = useCallback(() => {
    dispatch({ type: CONNECT_FOUR_ACTION.PLAY_AGAIN });
  }, [dispatch]);

  return (
    <div className="cf-winner">
      <h5>{playerTurn === PLAYERS.RED ? PLAYERS.YELLOW : PLAYERS.RED} Win</h5>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};
