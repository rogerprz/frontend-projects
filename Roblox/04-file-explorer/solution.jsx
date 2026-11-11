import React, { useState } from "react";
const tree = [
  {
    id: "src",
    name: "src",
    children: [
      {
        id: "components",
        name: "components",
        children: [{ id: "app", name: "App.jsx" }],
      },
      { id: "index", name: "index.js" },
    ],
  },
  { id: "readme", name: "README.md" },
  { id: "empty", name: "empty", children: [] },
];
export default function Explorer({ data = tree }) {
  const [expanded, setExpanded] = useState({});
  function render(nodes) {
    return (
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            {Array.isArray(node.children) ? (
              <>
                <button
                  aria-expanded={!!expanded[node.id]}
                  onClick={() =>
                    setExpanded((previous) => ({
                      ...previous,
                      [node.id]: !previous[node.id],
                    }))
                  }
                >
                  {expanded[node.id] ? "▾" : "▸"} 📁 {node.name}
                </button>
                {expanded[node.id] &&
                  (node.children.length ? (
                    render(node.children)
                  ) : (
                    <p>Empty folder</p>
                  ))}
              </>
            ) : (
              <span>📄 {node.name}</span>
            )}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section>
      <h2>Files</h2>
      {data.length ? render(data) : <p>No files</p>}
    </section>
  );
}
