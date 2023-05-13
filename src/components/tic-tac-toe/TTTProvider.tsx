import React, { ReactNode, useCallback, useState } from "react";
import {
  Board,
  BoardItem,
  BoardItemSelection,
  SELECTION_TYPE,
} from "./utils/interface";
import { TTTValidator } from "./utils/TTTValidator";
import { getDefaultBoard } from "./utils/getDefaultBoard";

interface TTTContextProps {
  handleBoxSelection: (v: BoardItemSelection) => void;
  board: Board;
  winner: BoardItem;
  isXSelected: boolean;
  setBoard: (v: Board) => void;
  resetGame: () => void;
}

const TTTContext = React.createContext<TTTContextProps | null>(null);

export const useTTT = () => {
  const game = React.useContext(TTTContext);
  if (!game) {
    throw new Error("useGame should be wrapped under GameContext");
  }
  return game;
};

type Props = {
  children: ReactNode;
};

export const TTTProvider: React.FC<Props> = ({ children }) => {
  const [isXSelected, setIsXSelected] = useState(true);
  const [board, setBoard] = useState(getDefaultBoard());
  const [winner, setWinner] = useState<BoardItem>("");

  const handleBoxSelection = useCallback(
    ({ row, col }: BoardItemSelection) => {
      const updatedBoxItems = [...board];
      updatedBoxItems[row][col] = isXSelected
        ? SELECTION_TYPE.X
        : SELECTION_TYPE.O;
      const tttValidator = new TTTValidator(updatedBoxItems, { row, col });
      const gameWinner = tttValidator.validateGame();
      setIsXSelected(!isXSelected);
      setBoard(updatedBoxItems);
      if (gameWinner) {
        setWinner(isXSelected ? SELECTION_TYPE.X : SELECTION_TYPE.O);
      }
    },
    [board, isXSelected]
  );

  const resetGame = useCallback(() => {
    setBoard(getDefaultBoard());
    setWinner("");
    setIsXSelected(true);
  }, [setBoard]);

  const value = React.useMemo(() => {
    return {
      isXSelected,
      handleBoxSelection,
      winner,
      board,
      setBoard,
      resetGame,
    };
  }, [handleBoxSelection, winner, board, isXSelected, resetGame]);

  return <TTTContext.Provider value={value}>{children}</TTTContext.Provider>;
};
