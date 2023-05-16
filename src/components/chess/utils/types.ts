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
}

export interface ChessInitialState {
  chessBoard: Array<Array<null>>;
}
