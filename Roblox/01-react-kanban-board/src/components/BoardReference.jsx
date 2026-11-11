import { useEffect, useState } from 'react';
import { tasksAPI } from '../data/kanbanData.js';
export default function BoardReference() {
  const [board, setBoard] = useState(null);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [title, setTitle] = useState('');
  const [validation, setValidation] = useState('');
  useEffect(() => {
    let active = true;
    setError('');
    tasksAPI().then(data => { if (active) setBoard(data); }, err => { if (active) setError(err.message); });
    return () => { active = false; };
  }, [attempt]);
  function move(id, from, to) {
    setBoard(previous => {
      const task = previous.tasks[from].find(item => item.id === id);
      if (!task) return previous;
      return { ...previous, tasks: { ...previous.tasks, [from]: previous.tasks[from].filter(item => item.id !== id), [to]: [...previous.tasks[to], task] } };
    });
  }
  if (error) return <p role="alert">{error} <button onClick={() => setAttempt(value => value + 1)}>Retry</button></p>;
  if (!board) return <p role="status">Loading board…</p>;
  return <section><form onSubmit={event => {
    event.preventDefault();
    if (!title.trim()) return setValidation('Enter a task title.');
    const task = { id: crypto.randomUUID(), title: title.trim(), description: '' };
    setBoard(previous => ({ ...previous, tasks: { ...previous.tasks, todo: [...previous.tasks.todo, task] } }));
    setTitle(''); setValidation('');
  }}><label htmlFor="task-title">Task title</label><input id="task-title" value={title} onChange={event => setTitle(event.target.value)} aria-describedby="validation" /><button>Add task</button><p id="validation" role="alert">{validation}</p></form><div className="reference-board">{board.columns.map((column, index) => <section key={column.id}><h2>{column.name} ({board.tasks[column.key].length})</h2>{!board.tasks[column.key].length && <p>No tasks</p>}{board.tasks[column.key].map(task => <article key={task.id}><h3>{task.title}</h3><p>{task.description}</p><button disabled={index === 0} aria-label={`Move ${task.title} left`} onClick={() => move(task.id, column.key, board.columns[index - 1].key)}>← Left</button><button onClick={() => setBoard(previous => ({ ...previous, tasks: { ...previous.tasks, [column.key]: previous.tasks[column.key].filter(item => item.id !== task.id) } }))}>Delete {task.title}</button><button disabled={index === board.columns.length - 1} aria-label={`Move ${task.title} right`} onClick={() => move(task.id, column.key, board.columns[index + 1].key)}>Right →</button></article>)}</section>)}</div></section>;
}
