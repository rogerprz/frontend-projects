import React from "react";
import document from "./document.json";
export default function DocumentRenderer({ nodes = document }) {
  return nodes.map((node) => <Node key={node.id} node={node} />);
}
function Node({ node }) {
  const { type, attrs = {}, children = [], value } = node;
  const content = <DocumentRenderer nodes={children} />;
  switch (type) {
    case "text":
      return value ?? "";
    case "heading":
      return React.createElement(
        `h${Math.min(6, Math.max(1, Number(attrs.level) || 1))}`,
        null,
        content,
      );
    case "image":
      return (
        <img
          src={attrs.src}
          alt={attrs.alt ?? ""}
          width={attrs.width}
          height={attrs.height}
        />
      );
    case "unordered-list":
      return <ul>{content}</ul>;
    case "list-item":
      return <li>{content}</li>;
    default:
      return content;
  }
}
