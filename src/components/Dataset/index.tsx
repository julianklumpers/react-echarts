import React from "react";
import * as echarts from "echarts/core";
import { DatasetComponent, DatasetComponentOption } from "echarts/components";
import { useChart } from "../../Chart";

echarts.use([DatasetComponent]);

const Dataset: React.FC<DatasetComponentOption> = ({ ...options }) => {
  const { addOption, removeOption } = useChart();

  React.useLayoutEffect(() => {
    addOption("dataset", options);
    return () => removeOption("dataset");
  }, [options]);

  return null;
};

export default Dataset;
