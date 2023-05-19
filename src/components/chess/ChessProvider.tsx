import React, {
  Dispatch,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  ActionProps,
  BoardItem,
  ChessInitialState,
  ChildrenProps,
} from "./utils/types";
import { ChessReducer, chessInitialState } from "./ChessReducer";
import { ChessBoardClass } from "./utils/pieces/ChessBoardClass";

interface ChessContextProps {
  chessState: ChessInitialState;
  chessDispatch: Dispatch<ActionProps>;
  onBoardItemSelect(currentBoardItem: BoardItem): void;
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

  useEffect(() => {}, []);

  const onBoardItemSelect = useCallback(
    (boardItem: BoardItem) => {
      const chessBoard = new ChessBoardClass(chessState.chessBoard, boardItem);
      console.log({ boardItem });
    },
    [chessState.chessBoard]
  );

  const value = useMemo(() => {
    return {
      chessState,
      chessDispatch,
      onBoardItemSelect,
    };
  }, [chessState, chessDispatch, onBoardItemSelect]);

  return (
    <ChessContext.Provider value={value}>{children}</ChessContext.Provider>
  );
};
