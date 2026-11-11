import React from "react";
import { createRoot } from "react-dom/client";
import Starter from "../problem.jsx";
import Solution from "../solution.jsx";
import prompt from "../problem.jsx?raw";
import ExercisePage from "../../shared/ExercisePage.jsx";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExercisePage
      title="Country and capital matching"
      prompt={prompt}
      Starter={Starter}
      Solution={Solution}
    />
  </React.StrictMode>,
);
