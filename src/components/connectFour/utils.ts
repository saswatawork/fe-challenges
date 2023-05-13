import { BOARD, NUMBER_OF_ITEMS_TO_MATCH } from "./constant";
import { BoxItem } from "./interface";

const columnMatchCheck = (board: any, boxItem: BoxItem): boolean => {
  let itemMatched = 0;
  for (let col = 0; col < BOARD.COLUMN; col++) {
    if (
      board[boxItem.row][col] &&
      board[boxItem.row][boxItem.col] === board[boxItem.row][col]
    ) {
      itemMatched++;
    } else if (itemMatched > 0) {
      break;
    }
    if (itemMatched === NUMBER_OF_ITEMS_TO_MATCH) {
      return true;
    }
  }
  return false;
};

const rowMatchCheck = (board: any, boxItem: BoxItem): boolean => {
  let itemMatched = 0;
  for (let row = boxItem.row; row < BOARD.ROW; row++) {
    if (
      board[row][boxItem.col] &&
      board[boxItem.row][boxItem.col] === board[row][boxItem.col]
    ) {
      itemMatched++;
    } else {
      break;
    }
    if (itemMatched === NUMBER_OF_ITEMS_TO_MATCH) {
      return true;
    }
  }
  return false;
};

const diagonalMatchCheckRight = (board: any, boxItem: BoxItem): boolean => {
  let itemMatched = 0;
  for (let item = 0; item < NUMBER_OF_ITEMS_TO_MATCH; item++) {
    const rowItem = boxItem.row + item;
    const colItem = boxItem.col - item;
    if (
      rowItem < BOARD.ROW &&
      colItem >= 0 &&
      board[rowItem][colItem] &&
      board[boxItem.row][boxItem.col] === board[rowItem][colItem]
    ) {
      itemMatched++;
    } else {
      break;
    }

    if (itemMatched === NUMBER_OF_ITEMS_TO_MATCH) {
      return true;
    }
  }
  return false;
};

const diagonalMatchCheckLeft = (board: any, boxItem: BoxItem): boolean => {
  let itemMatched = 0;
  for (let item = 0; item < NUMBER_OF_ITEMS_TO_MATCH; item++) {
    const rowItem = boxItem.row + item;
    const colItem = boxItem.col + item;
    if (
      rowItem < BOARD.ROW &&
      colItem < BOARD.COLUMN &&
      board[rowItem][colItem] &&
      board[boxItem.row][boxItem.col] === board[rowItem][colItem]
    ) {
      itemMatched++;
    } else {
      break;
    }

    if (itemMatched === NUMBER_OF_ITEMS_TO_MATCH) {
      return true;
    }
  }
  return false;
};

export const checkWinner = (board: any, boxItem: BoxItem): boolean => {
  if (
    columnMatchCheck(board, boxItem) ||
    rowMatchCheck(board, boxItem) ||
    diagonalMatchCheckRight(board, boxItem) ||
    diagonalMatchCheckLeft(board, boxItem)
  ) {
    return true;
  }
  return false;
};
