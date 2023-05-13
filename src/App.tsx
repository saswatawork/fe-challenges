import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TicTacToe } from "./components/tic-tac-toe";
import { ToDoList } from "./components/toDoList";
import { ConnectFour } from "./components/connectFour";
import { Sudoku } from "./components/sudoku";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index path="tic-tac-toe" element={<TicTacToe />} />
            <Route path="to-do-list" element={<ToDoList />} />
            <Route path="connect-four" element={<ConnectFour />} />
            <Route path="sudoku" element={<Sudoku />} />
            <Route path="*" element={<h1>Wrong URL</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
