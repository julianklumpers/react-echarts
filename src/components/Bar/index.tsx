import React from "react";
import * as echarts from "echarts/core";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { useChart } from "../../Chart";

echarts.use([BarChart]);

const Bar: React.FC<BarSeriesOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useLayoutEffect(() => {
    addOption("series", {
      type: "bar",
      ...options,
    });
    return () => removeOption("series");
  }, [options]);

  return null;
};

export default Bar;
