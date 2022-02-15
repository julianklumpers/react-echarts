import React from "react";
import Chart from "./Chart";
import Line from "./Line";
import Yaxis from "./Yaxis";

function App() {
  return (
    <Chart>
      <Line />
      <Yaxis position="left" />
      <Yaxis position="right" />
    </Chart>
  );
}

export default App;
