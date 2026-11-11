import './KanbanBoard.css';
import React, { useState } from 'react';
import { columns, SANITIZED_COL_NAMES, BOARDS } from '../data/kanbanData.js';

export default function KanbanBoardSolution() {
  const [tasks, setTasks] = useState(BOARDS);
  const [showAddTaskModal, setShowAddTaskModel] = useState(false);

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

  function onDeleteClick(id, currColIdx) {
    const currCol = SANITIZED_COL_NAMES[currColIdx];

    console.log('DEL:', id, currCol);
    setTasks((prev) => {
      const tasks = prev[currCol].filter((task) => task.id !== id);
      return { ...prev, [currCol]: tasks };
    });
  }

  function addTaskClick(currColIdx) {
    console.log('ADD:', currColIdx);
    setShowAddTaskModel((prev) => !prev);
  }
  return (
    <section className="board-container">
      {showAddTaskModal ? <AddTaskModal /> : null}
      <Columns
        columns={columns}
        tasks={tasks}
        onButtonHandler={onButtonHandler}
        onDeleteClick={onDeleteClick}
        addTaskClick={addTaskClick}
      />
    </section>
  );
}

function Columns({ columns, tasks, onButtonHandler, onDeleteClick, addTaskClick }) {
  return (
    <section className="cols-container">
      {columns.map((col, colIdx) => {
        const sanitizedColName = col.name.toLowerCase().replace(' ', '');

        return (
          <div className="col-container" key={col.id}>
            <h2 className="col-header">
              {col.name} ({tasks[sanitizedColName].length}){' '}
              <button className="add-task-button" onClick={() => addTaskClick(colIdx)}>
                +
              </button>
            </h2>
            {tasks[sanitizedColName].length == 0
              ? []
              : tasks[sanitizedColName].map((task) => {
                  return (
                    <Card
                      key={task.id}
                      task={task}
                      onButtonHandler={onButtonHandler}
                      onDeleteClick={onDeleteClick}
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

function Card({ task, onButtonHandler, colIdx, onDeleteClick }) {
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
        <button id={'delete-button'} onClick={() => onDeleteClick(task.id, colIdx)}>
          Delete
        </button>
        <button onClick={() => onButtonHandler(task.id, colIdx, colIdx + 1)} disabled={colIdx === 2}>
          Right{' >'}
        </button>
      </div>
    </div>
  );
}

function AddTaskModal() {
  return <section>ADD TASK</section>;
}
