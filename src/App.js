import "./App.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import PieChart from "./components/PieChart/PieChart";
import DATA from "./utils/data";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

function App() {
  return (
    <div className="App">
      <h1 className="title">PieChart</h1>
      <div className="chartBox">
        <div >
          <PieChart pieData={DATA} state={1}></PieChart>
        </div>
        <div>
          <PieChart pieData={DATA} state={2}></PieChart>
        </div>
        <div >
          <PieChart pieData={DATA} state={3}></PieChart>
        </div>
      </div>
    </div>
  );
}

export default App;
