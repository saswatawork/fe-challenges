import React from "react";
import { Board } from "./Board/Board";
import { ConnectFourProvider } from "./ConnectFourProvider";

export const ConnectFour = () => {
  return (
    <div>
      <h3>Connect Four</h3>
      <ConnectFourProvider>
        <Board />
      </ConnectFourProvider>
    </div>
  );
};
