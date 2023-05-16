import React, {
  Dispatch,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { ActionProps, ChessInitialState, ChildrenProps } from "./utils/types";
import { ChessReducer, chessInitialState } from "./ChessReducer";

interface ChessContextProps {
  chessState: ChessInitialState;
  chessDispatch: Dispatch<ActionProps>;
}

const ChessContext = createContext<ChessContextProps | null>(null);

export const useChess = () => {
  const chess = useContext(ChessContext);
  if (!chess) {
    throw new Error("useChess must be wrapped inside the ChessProvider");
  }

  return chess;
};

export const ChessProvider = ({ children }: ChildrenProps) => {
  const [chessState, chessDispatch] = useReducer(
    ChessReducer,
    chessInitialState
  );
  const value = useMemo(() => {
    return {
      chessState,
      chessDispatch,
    };
  }, [chessState, chessDispatch]);

  return (
    <ChessContext.Provider value={value}>{children}</ChessContext.Provider>
  );
};
