import './KanbanBoard.css';
import React, { useState } from 'react';

const COLUMN_NAMES = [
  { id: 'col-1', name: 'To do' },
  { id: 'col-2', name: 'In progress' },
  { id: 'col-3', name: 'Done' }
];
const BOARDS = {
  todo: [
    { id: 'task-1', title: 'Write tests', description: 'This is a card description' },
    { id: 'task-2', title: 'Build search', description: 'We have to search before we build' },
    { id: 'task-3', title: 'Update docs', description: 'update the docs or else' }
  ],
  inprogress: [
    {
      id: 'task-11',
      title: 'Write tests',
      description: 'Let write some test now. This is a very long sentence for some reason.'
    },
    {
      id: 'task-12',
      title: 'Build search',
      description: 'We will be building multiple search features here. That is a good thing'
    },
    { id: 'task-13', title: 'Update docs', description: 'todo' }
  ],
  done: [
    { id: 'task-21', title: 'Write tests', description: 'todo' },
    {
      id: 'task-22',
      title: 'Build search',
      description: 'We will be building multiple search features here. That is a good thing'
    },
    { id: 'task-23', title: 'Update docs', description: 'todo' }
  ]
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(COLUMN_NAMES);
  const [tasks, setTasks] = useState(BOARDS);

  function onButtonHandler(id, direction) {
    console.log('CLICK', id, direction);
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
      {columns.map((col) => {
        const sanitizedColName = col.name.toLowerCase().replace(' ', '');

        return (
          <div className="col-container" key={col.id}>
            <h2 className="col-header">{col.name}</h2>
            {tasks[sanitizedColName].length == 0
              ? []
              : tasks[sanitizedColName].map((task) => {
                  return (
                    <Card key={task.id} task={task} onButtonHandler={onButtonHandler} columnName={sanitizedColName} />
                  );
                })}
          </div>
        );
      })}
    </section>
  );
}

function Card({ task, onButtonHandler, columnName }) {
  return (
    <div className="card-container">
      <h4>{task.title}</h4>
      <div className="description-container">
        <div>Description</div>
        <div className="card-description">{task.description}</div>
      </div>
      <div className="card-nav-container">
        <button onClick={() => onButtonHandler(task.id, 'left')} disabled={columnName === 'todo'}>
          Left
        </button>
        <button onClick={() => onButtonHandler(task.id, 'right')} disabled={columnName === 'done'}>
          Right
        </button>
      </div>
    </div>
  );
}
