import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

export interface ActionProps {
  type: string;
  payload: any;
}

export interface BoardItem {
  row: number;
  col: number;
  val: ChessBoardItem;
}

export interface ChessBoardItem {
  player: Player | null;
  piece: ChessPieces | null;
}

export type ChessBoard = Array<Array<ChessBoardItem>>;

export interface ChessInitialState {
  chessBoard: ChessBoard;
}

export enum Player {
  WHITE = "white",
  BLACK = "black",
}

export enum ChessPieces {
  PAWN = "pawn",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  KING = "king",
  QUEEN = "queen",
}
