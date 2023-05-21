import { baseItem } from "../getDefaultBoard";
import {
  BoxItem,
  ChessBoard,
  Col,
  Player,
  Row,
  SelectedBoardItem,
} from "../types";

interface PawnMove {
  normal: number;
  base: number;
  diagonal: number;
}

export class PawnClass {
  board: ChessBoard;
  boardItem: SelectedBoardItem;
  baseItem;
  player: Player;
  row: Row;
  col: Col;
  move: PawnMove;
  playerTurn: Player;

  constructor(
    board: ChessBoard,
    boardItem: SelectedBoardItem,
    playerTurn: Player
  ) {
    this.board = board;
    this.boardItem = boardItem;
    this.baseItem = baseItem();
    this.player = this.boardItem.val.player;
    this.playerTurn = playerTurn;
    this.row = this.boardItem.row;
    this.col = this.boardItem.col;
    this.move = {
      normal: 1,
      base: 2,
      diagonal: 1,
    };
  }

  moveIncrease() {
    let maxMove = this.move.normal;
    const updatedBoard = [...this.board];
    if (this.row === this.baseItem[this.player] + 1) {
      maxMove = this.move.base;
    }
    for (let move = 1; move <= maxMove; move++) {
      const newRow = this.row + move;
      if (!updatedBoard[newRow][this.col].player) {
        updatedBoard[this.row + move][this.col].valid = true;
      }
    }

    console.log("this.playerTurn", this.playerTurn);
    if (
      updatedBoard[this.row + 1] &&
      updatedBoard[this.row + 1][this.col + 1] &&
      updatedBoard[this.row + 1][this.col + 1].player &&
      updatedBoard[this.row + 1][this.col + 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row + 1][this.col + 1].valid = true;
    }

    if (
      updatedBoard[this.row + 1] &&
      updatedBoard[this.row + 1][this.col + 1] &&
      updatedBoard[this.row + 1][this.col + 1].player &&
      updatedBoard[this.row + 1][this.col + 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row + 1][this.col + 1].valid = true;
    }

    if (
      updatedBoard[this.row + 1] &&
      updatedBoard[this.row + 1][this.col - 1] &&
      updatedBoard[this.row + 1][this.col - 1].player &&
      updatedBoard[this.row + 1][this.col - 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row + 1][this.col - 1].valid = true;
    }

    return updatedBoard;
  }

  moveDecrease() {
    let maxMove = this.move.normal;

    if (this.row === this.baseItem[this.player] - 1) {
      maxMove = this.move.base;
    }
    const updatedBoard = [...this.board];
    for (let move = 1; move <= maxMove; move++) {
      const newRow = this.row - move;
      if (!updatedBoard[newRow][this.col].player) {
        updatedBoard[this.row - move][this.col].valid = true;
      }
    }

    console.log("this.playerTurn", this.playerTurn);
    if (
      updatedBoard[this.row - 1] &&
      updatedBoard[this.row - 1][this.col + 1] &&
      updatedBoard[this.row - 1][this.col + 1].player &&
      updatedBoard[this.row - 1][this.col + 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row - 1][this.col + 1].valid = true;
    }

    if (
      updatedBoard[this.row - 1] &&
      updatedBoard[this.row - 1][this.col + 1] &&
      updatedBoard[this.row - 1][this.col + 1].player &&
      updatedBoard[this.row - 1][this.col + 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row - 1][this.col + 1].valid = true;
    }

    if (
      updatedBoard[this.row - 1] &&
      updatedBoard[this.row - 1][this.col - 1] &&
      updatedBoard[this.row - 1][this.col - 1].player &&
      updatedBoard[this.row - 1][this.col - 1].player !== this.playerTurn
    ) {
      updatedBoard[this.row - 1][this.col - 1].valid = true;
    }
    return updatedBoard;
  }

  getMove() {
    if (this.player) {
      if (this.baseItem[this.player] === 0) {
        return this.moveIncrease();
      } else {
        return this.moveDecrease();
      }
    }
  }

  movePawn({ row, col }: BoxItem) {
    const boardCopy = [...this.board];
    boardCopy[row][col].piece = this.board[this.row][this.col].piece;
    boardCopy[row][col].player = this.board[this.row][this.col].player;
    boardCopy[row][col].valid = false;
    boardCopy[this.row][this.col].piece = null;
    boardCopy[this.row][this.col].player = null;
    boardCopy[this.row][this.col].valid = false;
    this.board = boardCopy;
    return this.board;
  }

  // basePosition() {}

  // move() {}
}
