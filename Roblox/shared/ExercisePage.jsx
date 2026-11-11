import React, { useState } from 'react';
import './exercise.css';
export default function ExercisePage({ title, prompt, Starter, Solution, product = false }) {
  const [mode, setMode] = useState('solution');
  const [productId, setProductId] = useState('A');
  const Component = mode === 'solution' ? Solution : Starter;
  const requirements = prompt.match(/\/\*([\s\S]*?)\*\//)?.[1] ?? prompt;
  return <main><nav aria-label="Exercise view"><button aria-pressed={mode === 'solution'} onClick={() => setMode('solution')}>Solution</button><button aria-pressed={mode === 'starter'} onClick={() => setMode('starter')}>Practice</button></nav><h1>{title}</h1><p>Read the requirements, try the starter, and compare your work with the interactive solution. Your starter file is preserved.</p><details open><summary>Exercise requirements</summary><pre>{requirements}</pre></details>{product && <p><label htmlFor="product">Product fixture </label><select id="product" value={productId} onChange={event => setProductId(event.target.value)}><option>A</option><option>B</option><option>C</option></select> A: slow requests · B: failed reviews · C: empty lists. Switch quickly to check cancellation.</p>}<Component key={mode} productId={productId} /><details><summary>Where to work and what to check</summary><p>Edit the local problem file (Kanban: src/components/KanbanBoard.jsx). The completed reference is in solution.jsx (Kanban: src/components/BoardReference.jsx). Switch views to compare behavior.</p><p>Try the examples and edge cases in the requirements. Use Tab and Enter to exercise controls.</p></details></main>;
}
