import { CONFIG } from "./config";

export const getDefaultBoard = () => {
  return Array.from({ length: CONFIG.ROW }, () =>
    Array.from({ length: CONFIG.COL }, () => null)
  );
};
