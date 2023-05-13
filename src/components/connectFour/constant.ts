export const BOARD = {
  ROW: 6,
  COLUMN: 7,
};

export const NUMBER_OF_ITEMS_TO_MATCH = 4;

export const CONNECT_FOUR_ACTION = {
  SET_WINNER: "SET_WINNER",
  SET_BOX_ITEM: "SET_BOX_ITEM",
  SET_PLAYER_TURN: "SET_PLAYER_TURN",
  SET_BOARD: "SET_BOARD",
  PLAY_AGAIN: "PLAY_AGAIN",
};

export const DEFAULT_BOARD = Array.from({ length: BOARD.ROW }, () => {
  return Array.from({ length: BOARD.COLUMN }, () => "");
});
