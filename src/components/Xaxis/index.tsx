import React from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";

import { useChart } from "../../Chart";

echarts.use([GridComponent]);

const Xaxis = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useLayoutEffect(() => {
    addOption("xAxis", options);
    return () => removeOption("xAxis");
  }, [options]);

  return null;
};

export default Xaxis;
