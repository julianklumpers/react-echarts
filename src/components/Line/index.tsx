import React from "react";
import * as echarts from "echarts/core";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { useChart } from "../../Chart";

echarts.use([LineChart]);

const Line: React.FC<LineSeriesOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useLayoutEffect(() => {
    addOption("series", {
      type: "line",
      ...options,
    });
    return () => removeOption("series");
  }, [options]);

  return null;
};

export default Line;
