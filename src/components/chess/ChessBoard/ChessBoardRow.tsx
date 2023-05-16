import React from "react";
import { ChildrenProps } from "../utils/types";
import "./chessBoardRow.css";

export const ChessBoardRow = ({ children }: ChildrenProps): JSX.Element => (
  <div className="chess-board__row">{children}</div>
);
