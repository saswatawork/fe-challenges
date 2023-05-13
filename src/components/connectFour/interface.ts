export enum PLAYERS {
  RED = "red",
  YELLOW = "yellow",
}

export type PLAYER_TURN = PLAYERS | "";

export interface BoxItem {
  row: number;
  col: number;
}

export interface ConnectFourState {
  winner: boolean;
  boxItem: BoxItem;
  playerTurn: PLAYER_TURN;
  board: any;
}

export interface ActionProps {
  type: string;
  payload?: any;
}
