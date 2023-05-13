import { CONFIG } from "./config";
import { Board, BoardItemSelection } from "./interface";

export class TTTValidator {
  board: Board;
  activeItem: BoardItemSelection;

  constructor(board: Board, activeItem: BoardItemSelection) {
    this.board = board;
    this.activeItem = activeItem;
  }

  validateRow(): boolean {
    const { row, col } = this.activeItem;
    for (let colIndex = 0; colIndex < CONFIG.GRID.COLUMN; colIndex++) {
      if (!this.board[row][colIndex]) {
        return false;
      }
      if (this.board[row][colIndex] !== this.board[row][col]) {
        return false;
      }
    }

    return true;
  }

  validateCol(): boolean {
    const { row, col } = this.activeItem;
    for (let rowIndex = 0; rowIndex < CONFIG.GRID.ROW; rowIndex++) {
      if (!this.board[rowIndex][col]) {
        return false;
      }
      if (this.board[rowIndex][col] !== this.board[row][col]) {
        return false;
      }
    }

    return true;
  }

  rightDiagonalCheck(): boolean {
    const { row, col } = this.activeItem;
    for (let rowIndex = 0; rowIndex < CONFIG.GRID.ROW; rowIndex++) {
      if (!this.board[rowIndex][rowIndex]) {
        return false;
      }
      if (this.board[rowIndex][rowIndex] !== this.board[row][col]) {
        return false;
      }
    }
    return true;
  }

  leftDiagonalCheck(): boolean {
    const { row, col } = this.activeItem;
    for (let rowIndex = 0; rowIndex < CONFIG.GRID.ROW; rowIndex++) {
      let colIndex = CONFIG.GRID.ROW - 1 - rowIndex;
      if (!this.board[rowIndex][colIndex]) {
        return false;
      }
      if (this.board[rowIndex][colIndex] !== this.board[row][col]) {
        return false;
      }
    }
    return true;
  }

  validateDiagonal(): boolean {
    if (this.rightDiagonalCheck() || this.leftDiagonalCheck()) {
      return true;
    }
    return false;
  }

  validateGame(): boolean {
    if (this.validateRow() || this.validateCol() || this.validateDiagonal()) {
      return true;
    }
    return false;
  }
}
