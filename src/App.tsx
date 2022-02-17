import React from "react";
import Chart from "./Chart";

import {
  Grid,
  Xaxis,
  Yaxis,
  Legend,
  Line,
  Bar,
  Tooltip,
  Dataset,
} from "./components";
import { Card, Spin } from "antd";
import styled from "styled-components";

const getContent = async (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(params);
    }, 1000);
  });
};

const TooltipContent = ({ params, loading, result }) => {
  return (
    <Card title="Card title" style={{ width: 200 }} size="small">
      {params.map(({ value }) => (
        <p>{value}</p>
      ))}
    </Card>
  );
};

function App() {
  const chartRef = React.useRef(null);

  const source = [
    ["records", "Whitefly", "Thrips"],
    ["Wk 1", 43.3, 85.8],
    ["Wk 2", 83.1, 73.4],
    ["Wk 3", 86.4, 65.2],
    ["Wk 4", 72.4, 53.9],
    ["Wk 5", 72.4, 53.9],
  ];

  return (
    <Chart ref={chartRef}>
      <Grid left="20%" />
      <Dataset source={source} />
      <Legend />
      <Tooltip trigger="axis" />
      <Xaxis type="category" />
      <Yaxis
        position="left"
        id="0"
        axisLabel={{ color: "red", formatter: (v: string) => `${v}%` }}
      />
      <Yaxis position="right" id="1" />
      <Line smooth yAxisId="0" color="red" />
      <Line smooth yAxisId="1" />
    </Chart>
  );
}

export default App;
