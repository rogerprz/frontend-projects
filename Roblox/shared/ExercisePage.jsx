import React, { useEffect, useState } from "react";
import "./exercise.css";

export default function ExercisePage({
  title,
  prompt,
  Starter,
  Solution,
  product = false,
  practiceFile = "problem.jsx",
  solutionFile = "solution.jsx",
}) {
  const storageKey = `roblox:exercise-view:${title}`;
  const [mode, setMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem(storageKey);
      return savedMode === "starter" ? "starter" : "solution";
    } catch {
      return "solution";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, mode);
    } catch {
      // Keep the view switch usable when browser storage is unavailable.
    }
  }, [mode, storageKey]);
  const [productId, setProductId] = useState("A");
  const Component = mode === "solution" ? Solution : Starter;
  const requirements = prompt.match(/\/\*([\s\S]*?)\*\//)?.[1] ?? prompt;

  return (
    <main>
      <nav aria-label="Exercise view">
        <button
          aria-pressed={mode === "solution"}
          onClick={() => setMode("solution")}
        >
          Solution
        </button>
        <button
          aria-pressed={mode === "starter"}
          onClick={() => setMode("starter")}
        >
          Practice
        </button>
      </nav>
      <h1>{title}</h1>
      <p>
        Solution shows the completed core exercise. Practice runs your editable{" "}
        <code>{practiceFile}</code>. Optional follow-ups are listed separately
        in the requirements.
      </p>
      <p>
        Switching views resets the displayed exercise’s state. Editing a file
        updates its corresponding view through Vite. Your selected view is
        remembered for this exercise when you refresh.
      </p>
      <details open>
        <summary>Exercise requirements</summary>
        <pre>{requirements}</pre>
      </details>
      {product && (
        <p>
          <label htmlFor="product">Product fixture </label>
          <select
            id="product"
            value={productId}
            onChange={(event) => setProductId(event.target.value)}
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>{" "}
          A: slow successful requests · B: reviews always fail, including
          retries · C: empty reviews and related products. Switch quickly from A
          to B to check stale-response handling.
        </p>
      )}
      <h2>
        {mode === "solution" ? "Solution output" : "Your practice output"}
      </h2>
      <p>
        Running <code>{mode === "solution" ? solutionFile : practiceFile}</code>
        . A starter that returns <code>null</code> displays no exercise content
        until you implement it.
      </p>
      <Component key={mode} productId={productId} />
      <details>
        <summary>Where to work and what to check</summary>
        <p>
          Edit <code>{practiceFile}</code> for your attempt. Compare it with{" "}
          <code>{solutionFile}</code> using the buttons at the top.
        </p>
        <p>
          Try the examples and edge cases in the requirements. Use Tab and Enter
          to exercise controls. A successful build checks compilation; it does
          not verify every behavior.
        </p>
      </details>
    </main>
  );
}
