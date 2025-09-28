import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  File,
} from "lucide-react";
import "./../Styles/file-directory.css";
import { getDirectoryData } from "./../data/file-structure";

export const FileDirectory = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await getDirectoryData();
      setData(res);
    } catch (err) {
      console.log("E:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className="main-container">
      {data.length > 0 &&
        data.map((item) => {
          return <ExtractData key={item.id} item={item} tabSize={0} />;
        })}
    </ul>
  );
};

function ExtractData({ item, tabSize }) {
  if (item.type === "folder") {
    return <Directory item={item} tabSize={tabSize} />;
  } else if (item.type === "file") {
    return <FileRow item={item} tabSize={tabSize} />;
  }
}

function FileRow({ item, tabSize }) {
  return (
    <li style={{ paddingLeft: `${tabSize * 20}px` }} className="file-container">
      <>
        <File size={16} />
        {item.name}
      </>
    </li>
  );
}

function Directory({ item, tabSize }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <li style={{ paddingLeft: `${tabSize * 20}px` }}>
      <div className="directory-row">
        {isExpanded ? (
          <>
            <ChevronDown
              size={16}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ")
                  setIsExpanded((prev) => !prev);
              }}
              onClick={toggleExpand}
            />
            <FolderOpen size={16} />
          </>
        ) : (
          <>
            <ChevronRight
              size={16}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ")
                  setIsExpanded((prev) => !prev);
              }}
              onClick={toggleExpand}
            />
            <Folder size={16} />
          </>
        )}
        <span>{item.name}</span>
      </div>
      {isExpanded === true && item.children.length > 0 && (
        <ul>
          {item.children.map((child) => {
            return (
              <ExtractData key={child.id} item={child} tabSize={tabSize + 1} />
            );
          })}
        </ul>
      )}
    </li>
  );
}
