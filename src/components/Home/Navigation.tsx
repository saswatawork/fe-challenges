import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <h3>JavaScript</h3>
          <ul>
            <li>Debounce</li>
            <li>Throttle</li>
            <li>Curry</li>
            <li>Deep Equals</li>
            <li>Promises</li>
            <li>Flatten</li>
            <li>Memoize</li>
            <li>The Binding</li>
          </ul>
        </li>
        <li>
          <h3>Dom Manipulation</h3>
          <ul>
            <li>
              <Link to="/tic-tac-toe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/to-do-list">To Do List</Link>
            </li>
            <li>
              <Link to="/connect-four">Connect Four</Link>
            </li>
            <li>
              <Link to="/sudoku">Sudoku</Link>
            </li>
            <li>
              <Link to="/chess">Chess</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
