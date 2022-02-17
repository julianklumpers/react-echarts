import { GridComponentOption } from "echarts";
import React from "react";
import { useChart } from "../../Chart";

const Grid: React.FC<GridComponentOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useEffect(() => {
    addOption("grid", options);
    return () => removeOption("grid");
  }, [options]);

  return null;
};

export default Grid;
