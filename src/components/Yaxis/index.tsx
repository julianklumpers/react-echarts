import React from "react";
import { useChart } from "../../Chart";
import { CartesianAxisOption } from "echarts";

const Yaxis: React.FC<CartesianAxisOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useEffect(() => {
    addOption("yAxis", options);
    return () => removeOption("yAxis");
  }, [options]);

  return null;
};

export default Yaxis;
