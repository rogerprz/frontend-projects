import './KanbanBoard.css';
import React, { useState } from 'react';
import { columns, SANITIZED_COL_NAMES, BOARDS } from '../data/kanbanData.js';

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(BOARDS);

  function onButtonHandler(id, currColIdx, nextColIdx) {
    const moveToCol = SANITIZED_COL_NAMES[nextColIdx];
    const currCol = SANITIZED_COL_NAMES[currColIdx];
    setTasks((prev) => {
      const task = prev[currCol].filter((t) => t.id === id);
      const remainingTasks = prev[currCol].filter((t) => t.id !== id);
      const updatedCol = [...prev[moveToCol], ...task];

      return { ...prev, [currCol]: remainingTasks, [moveToCol]: updatedCol };
    });
  }
  return (
    <section className="board-container">
      <Columns columns={columns} tasks={tasks} onButtonHandler={onButtonHandler} />
    </section>
  );
}

function Columns({ columns, tasks, onButtonHandler }) {
  return (
    <section className="cols-container">
      {columns.map((col, colIdx) => {
        const sanitizedColName = col.name.toLowerCase().replace(' ', '');

        return (
          <div className="col-container" key={col.id}>
            <h2 className="col-header">
              {col.name} ({tasks[sanitizedColName].length})
            </h2>
            {tasks[sanitizedColName].length == 0
              ? []
              : tasks[sanitizedColName].map((task) => {
                  return (
                    <Card
                      key={task.id}
                      task={task}
                      onButtonHandler={onButtonHandler}
                      columnName={sanitizedColName}
                      colIdx={colIdx}
                    />
                  );
                })}
          </div>
        );
      })}
    </section>
  );
}

function Card({ task, onButtonHandler, colIdx }) {
  return (
    <div className="card-container">
      <h4>{task.title}</h4>
      <div className="description-container">
        <div>Description</div>
        <div className="card-description">{task.description}</div>
      </div>
      <div className="card-nav-container">
        <button onClick={() => onButtonHandler(task.id, colIdx, colIdx - 1)} disabled={colIdx === 0}>
          {'< '} Left
        </button>
        <button onClick={() => onButtonHandler(task.id, colIdx, colIdx + 1)} disabled={colIdx === 2}>
          Right{' >'}
        </button>
      </div>
    </div>
  );
}
