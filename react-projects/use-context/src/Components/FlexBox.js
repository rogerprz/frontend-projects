import React from "react";
import "./../Styles/flexbox.css";
export const FlexBox = ({ children }) => {
  return (
    <>
      <div className="flex-box-container">
        <div id="first">first is this word</div>
        <div id="second">second other</div>
        <div id="third">third third third</div>
      </div>
      <div className="grid-container">
        <div className="item1">First grid</div>

        <div>First grid</div>
        <div>First grid</div>
      </div>
    </>
  );
};
