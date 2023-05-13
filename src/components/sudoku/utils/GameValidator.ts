import { CONFIG } from "./config";
import { BoxItem, SUDOKU_BOARD, SudokuItem } from "../interface";

export class SudokuGameValidator {
  board: SUDOKU_BOARD;
  boxItem: BoxItem;
  isGameWon: boolean;

  constructor(board: SUDOKU_BOARD, activeBoxItem: BoxItem) {
    this.board = board;
    this.boxItem = activeBoxItem;
    this.isGameWon = true;
  }

  validateSelectedBoxItem(boxItem: BoxItem): boolean {
    if (
      this.validateRow(boxItem) &&
      this.validateCol(boxItem) &&
      this.validateSubGrid(boxItem)
    ) {
      return true;
    }
    return false;
  }

  validateRow({ row, col }: BoxItem): boolean {
    for (let boardCol = 0; boardCol < CONFIG.GRID.COLUMN; boardCol++) {
      if (
        this.board[row][boardCol].val &&
        boardCol !== col &&
        this.board[row][col].val === this.board[row][boardCol].val
      ) {
        return false;
      }
    }

    return true;
  }

  validateCol({ row, col }: BoxItem): boolean {
    for (let boardRow = 0; boardRow < CONFIG.GRID.ROW; boardRow++) {
      if (
        this.board[boardRow][col].val &&
        boardRow !== row &&
        this.board[row][col].val === this.board[boardRow][col].val
      ) {
        return false;
      }
    }
    return true;
  }

  validateSubGrid({ row, col }: BoxItem): boolean {
    const startColItem =
      Math.floor(col / CONFIG.SUB_GRID.COLUMN) * CONFIG.SUB_GRID.COLUMN;
    const startRowItem =
      Math.floor(row / CONFIG.SUB_GRID.ROW) * CONFIG.SUB_GRID.ROW;
    const maxBoardRow = startRowItem + CONFIG.SUB_GRID.ROW;
    const maxBoardCol = startColItem + CONFIG.SUB_GRID.COLUMN;
    for (let boardRow = startRowItem; boardRow < maxBoardRow; boardRow++) {
      for (let boardCol = startColItem; boardCol < maxBoardCol; boardCol++) {
        if (
          boardRow !== row &&
          this.board[boardRow][boardCol].val &&
          this.board[row][col].val === this.board[boardRow][boardCol].val
        ) {
          this.board[row][col].isValid = false;
          return false;
        }
      }
    }
    return true;
  }

  validateBoard(): boolean {
    const boardCopy = [...this.board];
    this.board.forEach((boardItemArray: SudokuItem[], row) => {
      boardItemArray.forEach(({ val }: SudokuItem, col) => {
        if (val === null) {
          this.isGameWon = false;
        }
        const boxItem = { row, col, val };
        const isCurrentItemValid = this.validateSelectedBoxItem(boxItem);
        boardCopy[row][col].isValid = isCurrentItemValid;
        if (isCurrentItemValid) {
          return true;
        } else {
          this.isGameWon = false;
        }
      });
    });
    this.board = boardCopy;
    return false;
  }
}
