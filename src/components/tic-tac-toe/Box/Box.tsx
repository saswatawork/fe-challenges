import React from "react";
import { useTTT } from "../TTTProvider";
import { BoardItem } from "../utils/interface";
import "./box.css";

type Props = {
  val: BoardItem;
  row: number;
  col: number;
};

export const Box = ({ val, row, col }: Props) => {
  const { handleBoxSelection } = useTTT();

  return (
    <div
      key={`box-${row}-${col}`}
      className="ttt-box"
      onClick={() => handleBoxSelection({ row, col })}
    >
      {val}
    </div>
  );
};
