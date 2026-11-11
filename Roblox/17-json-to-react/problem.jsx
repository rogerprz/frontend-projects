/*
JSON to React — recursive document renderer
Suggested time: 45 minutes
Adapted from your saved NestedComponents exercise. The fixture contains an
Atlassian logo; official Atlassian interview provenance is unconfirmed.

Implement DocumentRenderer using document.json. Each node has an id and type.
Supported nodes:
- heading: render h1–h6 based on attrs.level, with recursively rendered children.
- text: render value as text, including inline text inside headings/list items.
- image: render img using attrs.src, attrs.alt, attrs.width, attrs.height.
- unordered-list: render ul with recursively rendered children.
- list-item: render li with recursively rendered children.

Requirements:
1. Render all root nodes in order and support arbitrary nesting.
2. Use stable node IDs as keys and preserve valid HTML structure.
3. Do not mutate the input document or replace data nodes with React elements.
4. Handle empty children and an empty document; choose an unknown-type fallback.
5. Use React rendering, without injecting raw HTML.

Try the supplied fixture, nested lists, and rendering the same input twice.
Follow-up: load nested-components.js asynchronously and handle loading/errors.
The existing reference is an earlier attempt, not a verified solution.
*/
import React from 'react';
import document from './document.json';

export default function DocumentRenderer({ nodes = document }) {
  // TODO: Recursively convert document nodes into React elements.
  return null;
}
