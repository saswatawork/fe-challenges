import React from "react";
import { Outlet } from "react-router-dom";
import "./GameSection.css";

export const GameSection = (): JSX.Element => {
  return (
    <section className="game-container">
      <Outlet />
    </section>
  );
};
