import React, { useState, useEffect } from "react";
import "./KanbanBoard.css";
import { tasksAPI } from "../data/kanbanData.js";

export default function KanbanBoard() {
  const [data, setData] = useState({});
  React.useEffect(() => {
    console.log("EFFECT");

    tasksAPI().then((data) => {
      console.log("D:", data);
      setData(data);
    });
  }, []);
  return (
    <section className="board-container">
      {/* TODO: Add the task form and board state. */}
      <section className="cols-container"></section>
    </section>
  );
}
