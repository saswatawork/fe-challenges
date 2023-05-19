import { BoardItem, ChessBoard } from "../types";

type selectedBoardItem = BoardItem | null;

export class ChessBoardClass {
  boardItem: BoardItem;
  board: ChessBoard;

  constructor(board: ChessBoard, boardItem: BoardItem) {
    this.board = board;
    this.boardItem = boardItem;
  }

  //   set board(board: ChessBoard) {
  //     this._board = board;
  //   }

  //   get board(): ChessBoard {
  //     if (!this._board) {
  //       throw new Error("Board whould be an array");
  //     }
  //     return this._board;
  //   }

  //   set boardItem(boardItem: BoardItem) {
  //     this.boardItem = boardItem;
  //   }

  //   get boardItem(): BoardItem {
  //     if (!this._boardItem) {
  //       throw new Error("No board item selected");
  //     }
  //     return this._boardItem;
  //   }
}
