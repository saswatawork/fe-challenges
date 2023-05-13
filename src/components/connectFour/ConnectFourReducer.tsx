import { BOARD, CONNECT_FOUR_ACTION, DEFAULT_BOARD } from "./constant";
import { ActionProps, ConnectFourState, PLAYERS } from "./interface";

export const connectFourInitialState: ConnectFourState = {
  winner: false,
  boxItem: {
    row: 0,
    col: 0,
  },
  playerTurn: PLAYERS.RED,
  board: DEFAULT_BOARD,
};

export const ConnectFourReducer = (
  state: ConnectFourState,
  action: ActionProps
) => {
  const { SET_WINNER, SET_BOX_ITEM, SET_PLAYER_TURN, SET_BOARD, PLAY_AGAIN } =
    CONNECT_FOUR_ACTION;
  switch (action.type) {
    case PLAY_AGAIN:
      return {
        ...state,
        ...connectFourInitialState,
        board: Array.from({ length: BOARD.ROW }, () => {
          return Array.from({ length: BOARD.COLUMN }, () => "");
        }),
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case SET_BOX_ITEM:
      return {
        ...state,
        boxItem: action.payload,
      };
    case SET_PLAYER_TURN:
      return {
        ...state,
        playerTurn: action.payload,
      };
    case SET_BOARD:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return connectFourInitialState;
  }
};
