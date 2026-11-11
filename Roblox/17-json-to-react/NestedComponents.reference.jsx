import React, { useState, useEffect, createElement } from 'react';
import data from './nested-components';

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
        console.log('ERROR:', err);
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
  console.log(item);
  const { type, children, attrs, value } = item;

  let content = [];
  if (children && children?.length > 0) {
    content = children.map((child) => {
      return <CreateElement key={child.id} item={child} />;
    });
  }
  if (type === 'heading') {
    return React.createElement(`h${attrs.level}`, null, content);
  } else if (type === 'text') {
    return item.value;
  } else if (type === 'image') {
    return <img {...attrs} />;
  } else if (type === 'unordered-list') {
    return React.createElement('ul', null, content);
  } else if (type === 'list-item') {
    return React.createElement('li', null, content);
  }
  return item.value ?? 'empty';
}
function Header({ item }) {
  return React.createElement(`h${item.attrs.level}`, null, item.children);
}

function UnorderedList({ item }) {
  // console.log('ULL:', item);
  return React.createElement('ul', null, item.children);
}

function ListItem({ item }) {
  return React.createElement('li', null, item.children);
}
