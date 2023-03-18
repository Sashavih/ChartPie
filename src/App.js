import "./App.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import PieChart from "./components/PieChart/PieChart.tsx";
import DATA from "./utils/data";
import { PieChartState } from "./components/PieChart/PieChart.enums.ts";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function App() {
  return (
    <div className="App">
      <h1 className="title">PieChart</h1>
      <div className="chartBox">
        <div className="chartBox__item chartBox__small">
          <PieChart pieData={DATA} state={PieChartState.SMALL}></PieChart>
        </div>
        <div className="chartBox__item chartBox__middle">
          <PieChart pieData={DATA} state={PieChartState.MEDIUM}></PieChart>
        </div>
        <div className="chartBox__item chartBox__big">
          <PieChart pieData={DATA} state={PieChartState.BIG}></PieChart>
        </div>
      </div>
    </div>
  );
}

export default App;
