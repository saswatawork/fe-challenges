import React from "react";
import { Navigation } from "./Navigation";
import { GameSection } from "./GameSection";
import "./Home.css";

export const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Welcome to challenges</h1>
      <main className="main-content">
        <Navigation />
        <GameSection />
      </main>
    </div>
  );
};
