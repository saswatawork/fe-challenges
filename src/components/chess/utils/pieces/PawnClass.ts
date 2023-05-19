import { Player } from "../types";

export class PawnClass {
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  basePosition() {}

  move() {}
}
