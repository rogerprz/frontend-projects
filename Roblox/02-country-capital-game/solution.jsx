import React, { useState } from "react";
const sample = { Japan: "Tokyo", France: "Paris", Italy: "Rome" };
function shuffle(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export default function Game({ data = sample }) {
  return <Round key={JSON.stringify(data)} data={data} />;
}
function Round({ data }) {
  const [labels, setLabels] = useState(() =>
    shuffle(Object.entries(data).flat()),
  );
  const [selected, setSelected] = useState([]);
  const wrong = selected.length === 2;
  function choose(label) {
    if (wrong || selected.length === 0) return setSelected([label]);
    if (selected[0] === label) return;
    const first = selected[0];
    if (data[first] === label || data[label] === first) {
      setLabels((previous) =>
        previous.filter((item) => item !== first && item !== label),
      );
      setSelected([]);
    } else setSelected([first, label]);
  }
  return (
    <section>
      <h2>Match each country to its capital</h2>
      <div className="choices">
        {labels.map((label) => (
          <button
            key={label}
            aria-pressed={selected.includes(label)}
            className={
              selected.includes(label) ? (wrong ? "incorrect" : "selected") : ""
            }
            onClick={() => choose(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <p role="status">
        {labels.length === 0
          ? "Complete! All pairs matched."
          : wrong
            ? "Incorrect pair. Select any button to try again."
            : "Select two matching labels."}
      </p>
      <button
        onClick={() => {
          setLabels(shuffle(Object.entries(data).flat()));
          setSelected([]);
        }}
      >
        Reset game
      </button>
    </section>
  );
}
