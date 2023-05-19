import { getDefaultBoard } from "./utils/getDefaultBoard";
import { ActionProps, ChessInitialState } from "./utils/types";

console.log("getDefaultBoard", getDefaultBoard());

export const chessInitialState: ChessInitialState = {
  chessBoard: getDefaultBoard(),
};

export const ChessReducer = (
  state: ChessInitialState,
  { type, payload }: ActionProps
) => {
  switch (type) {
    default:
      return state;
  }
};
