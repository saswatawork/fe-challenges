export enum SELECTION_TYPE {
  X = "X",
  O = "O",
}

export type BoardItem = SELECTION_TYPE | "";
export type BoardRow = Array<BoardItem>;
export type Board = Array<BoardRow>;
export interface BoardItemSelection {
  row: number;
  col: number;
}
