import React, { useState, useEffect, createElement } from "react";
import data from "./../data/nested-components";

export const NestedComponents = () => {
  const [content, setContent] = useState([]);
  const getData = async () => {
    const response = await data();
    return response;
  };
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const result = await getData();
        if (isMounted) setContent(result);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  if (content.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {content.length > 0 &&
        content.map((item, index) => {
          return <CreateElement key={index} item={item} />;
        })}
    </div>
  );
};

function CreateElement({ item }) {
  const { type, attrs, children } = item;

  if (children && children.length > 0) {
    item.children = children.map((child, index) => {
      return <CreateElement key={index} item={child} />;
    });
  }
  if (type === "heading") {
    return React.createElement(`h${attrs.level}`, null, item.children);
  } else if (type === "text") {
    return <div>{item.value}</div>;
  } else if (type === "image") {
    return <img {...attrs} />;
  } else if (type === "unordered-list") {
    return React.createElement("ul", null, item.children);
  } else if (type === "list-item") {
    return React.createElement("li", null, item.children);
  }
}
