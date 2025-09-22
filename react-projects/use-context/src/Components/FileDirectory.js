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
      console.log("R:", res);
      setData(res);
    } catch (err) {
      console.log("E:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      {data.length > 0 &&
        data.map((item, index) => {
          return <ExtractData key={index} item={item} tabSize={0} />;
        })}
    </div>
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
  //   console.log("T:", tabSize, tabSize * 4);/
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

  return (
    <ul>
      <div
        style={{ paddingLeft: `${tabSize * 20}px` }}
        className="directory-row"
      >
        {isExpanded ? (
          <>
            <ChevronDown
              size={16}
              onClick={() => setIsExpanded((prev) => !prev)}
            />
            <FolderOpen size={16} />
          </>
        ) : (
          <>
            <ChevronRight
              size={16}
              onClick={() => setIsExpanded((prev) => !prev)}
            />
            <Folder size={16} />
          </>
        )}
        <span>{item.name}</span>
      </div>
      {isExpanded === true &&
        item.children.length > 0 &&
        item.children.map((child) => {
          return (
            <ExtractData key={child.id} item={child} tabSize={tabSize + 1} />
          );
        })}
    </ul>
  );
}
