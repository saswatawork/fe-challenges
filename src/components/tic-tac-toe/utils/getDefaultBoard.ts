import { CONFIG } from "./config";
import { BoardItem } from "./interface";

export const getDefaultBoard = () => {
  return Array.from({ length: CONFIG.GRID.ROW }, () => {
    return Array.from({ length: CONFIG.GRID.COLUMN }, () => "" as BoardItem);
  });
};
