import React, { useState, useEffect } from 'react';
import './KanbanBoard.css';
import { tasksAPI } from '../data/kanbanData.js';

export default function KanbanBoard() {
  const [data, setData] = useState({});

  return (
    <section className="board-container">
      Start on src/components/KanbanBoard.jsx
      {/* TODO: Add the task form and board state. */}
      <section className="cols-container"></section>
    </section>
  );
}
