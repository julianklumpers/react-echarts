import React from "react";
import * as echarts from "echarts/core";
import { LegendComponent, LegendComponentOption } from "echarts/components";
import { useChart } from "../../Chart";

echarts.use([LegendComponent]);

const Legend: React.FC<LegendComponentOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useLayoutEffect(() => {
    addOption("legend", options);
    return () => removeOption("legend");
  }, [options]);

  return null;
};

export default Legend;
