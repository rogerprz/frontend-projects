import React, { useState } from 'react';

const COLUMN_NAMES = [
  { id: 'col-1', name: 'To do' },
  { id: 'col-2', name: 'In progress' },
  { id: 'col-3', name: 'Done' }
];
const TASKS = [
  { id: 'task-1', title: 'Write tests', status: 'todo' },
  { id: 'task-2', title: 'Build search', status: 'in-progress' },
  { id: 'task-3', title: 'Update docs', status: 'todo' }
];
export default function KanbanBoard() {
  const [columns, setColumns] = useState(COLUMN_NAMES);
  const [tasks, setTasks] = useState(TASKS);
  return (
    <>
      <Columns columns={columns} />
      {tasks.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
    </>
  );
}

function Columns({ columns }) {
  return (
    <section className="cols-container">
      {columns.map((col) => {
        return (
          <div className="col-container" key={col.id}>
            <div className="col-header">{col.name}</div>
          </div>
        );
      })}
    </section>
  );
}

function TaskCard() {}
