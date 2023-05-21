import {
  BoxItem,
  ChessBoard,
  ChessPieces,
  Player,
  SelectedBoardItem,
} from "../types";
import { PawnClass } from "./PawnClass";

export class ChessBoardClass {
  boardItem: SelectedBoardItem | null;
  board: ChessBoard;
  _pawn: PawnClass | null;
  _playerTurn: Player;

  constructor(board: ChessBoard) {
    this.board = board;
    this.boardItem = null;
    this._pawn = null;
    this._playerTurn = Player.WHITE;
  }

  set playerTurn(player: Player) {
    this._playerTurn = player;
  }

  set activeBoardItem(boardItem: SelectedBoardItem | null) {
    if (boardItem) {
      this.boardItem = boardItem;
      this.pawn = new PawnClass(
        this.board,
        this.activeBoardItem,
        this._playerTurn
      );
    } else {
      this.boardItem = null;
      this.pawn = null;
    }
  }

  get activeBoardItem(): SelectedBoardItem {
    if (!this.boardItem) {
      throw new Error("Active board Item item can not be null");
    }
    return this.boardItem;
  }

  set pawn(pawn: PawnClass | null) {
    this._pawn = pawn;
  }

  get pawn(): PawnClass {
    if (!this._pawn) {
      throw new Error("Active board Item item can not be null");
    }
    return this._pawn;
  }

  getValidMove() {
    switch (this.activeBoardItem.val.piece) {
      case ChessPieces.PAWN:
        return this.pawn.getMove();

      default:
        break;
    }
  }

  moveChessPiece(moveTo: BoxItem) {
    switch (this.activeBoardItem.val.piece) {
      case ChessPieces.PAWN:
        return this.pawn.movePawn(moveTo);

      default:
        break;
    }
  }

  cleanActiveBoardItem() {
    let boardCopy = [...this.board];
    this.board.forEach((boardRow, row) =>
      boardRow.forEach((boardItem, col) => {
        boardCopy[row][col].valid = false;
      })
    );
    this.board = boardCopy;
    this.activeBoardItem = null;
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
