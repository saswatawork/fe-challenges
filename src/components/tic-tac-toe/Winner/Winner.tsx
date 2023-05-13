import React from "react";
import { useTTT } from "../TTTProvider";
import { SELECTION_TYPE } from "../utils/interface";

export const Winner = () => {
  const { winner, isXSelected, resetGame } = useTTT();

  return (
    <div>
      {!winner &&
        (isXSelected
          ? `${SELECTION_TYPE.X}'s turn`
          : `${SELECTION_TYPE.O}'s
              turn`)}
      {winner && `${winner} win the game`}

      {winner && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
};
