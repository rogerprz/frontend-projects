import { useEffect, useState } from 'react';
import { tasksAPI } from '../data/kanbanData.js';
import './KanbanBoardOptSolution.css';

export default function KanbanBoardOptSolution() {
  const [columns, setColumns] = useState([]);
  const [tasks, setTasks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const data = await tasksAPI();
        if (active) {
          setColumns(data.columns);
          setTasks(data.tasks);
        }
      } catch {
        if (active) setError('Could not load tasks. Refresh to try again.');
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

  function addTask(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setTitleError('Enter a task title.');
      return;
    }
    // Create IDs outside state updaters to keep the updaters pure.
    const task = { id: crypto.randomUUID(), title: trimmedTitle, description: '' };
    setTasks((prev) => ({ ...prev, todo: [...prev.todo, task] }));
    setTitle('');
    setTitleError('');
  }

  function moveTask(id, from, to) {
    if (!to) return;
    setTasks((prev) => {
      const task = prev[from].find((item) => item.id === id);
      if (!task) return prev;
      return {
        ...prev,
        [from]: prev[from].filter((item) => item.id !== id),
        [to]: [...prev[to], task],
      };
    });
  }

  function deleteTask(id, columnKey) {
    setTasks((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].filter((task) => task.id !== id),
    }));
  }

  if (loading) return <p role="status">Loading tasks…</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section className="opt-kanban" aria-label="Kanban board">
      <form onSubmit={addTask}>
        <label htmlFor="opt-task-title">Task title</label>
        <input
          id="opt-task-title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setTitleError('');
          }}
          aria-invalid={Boolean(titleError)}
          aria-describedby={titleError ? 'opt-title-error' : undefined}
        />
        <button type="submit">Add task</button>
        {titleError && <p id="opt-title-error" role="alert">{titleError}</p>}
      </form>
      <div className="opt-kanban-columns">
        {columns.map((column, index) => (
          <section className="opt-kanban-column" key={column.id} aria-labelledby={`opt-${column.key}`}>
            <h2 id={`opt-${column.key}`}>{column.name} ({tasks[column.key].length})</h2>
            {tasks[column.key].length === 0 && <p>No tasks</p>}
            {tasks[column.key].map((task) => (
              <article className="opt-kanban-card" key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className="opt-kanban-controls">
                  <button
                    type="button"
                    disabled={index === 0}
                    aria-label={`Move ${task.title} left`}
                    onClick={() => moveTask(task.id, column.key, columns[index - 1]?.key)}
                  >Left</button>
                  <button
                    type="button"
                    aria-label={`Delete ${task.title}`}
                    onClick={() => deleteTask(task.id, column.key)}
                  >Delete</button>
                  <button
                    type="button"
                    disabled={index === columns.length - 1}
                    aria-label={`Move ${task.title} right`}
                    onClick={() => moveTask(task.id, column.key, columns[index + 1]?.key)}
                  >Right</button>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
