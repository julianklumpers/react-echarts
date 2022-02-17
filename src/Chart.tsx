import React from "react";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from "echarts/features";

echarts.use([CanvasRenderer, UniversalTransition]);

interface IChartContext {
  chart?: echarts.ECharts;
  addOption: (optionKey: string, option: any) => void;
  removeOption: (optionKey: string) => void;
}

const ChartContext = React.createContext<IChartContext>({
  chart: undefined,
  addOption: () => null,
  removeOption: () => null,
});

const Chart: React.FC = React.forwardRef(({ children }, chartRef) => {
  const [chart, setChart] = React.useState<echarts.ECharts>();
  const chartDOMRef = React.useRef<HTMLDivElement>(null);
  const [optionsMap, setOptionsMap] = React.useState<Map<string, any>>(
    new Map()
  );

  React.useLayoutEffect(() => {
    if (chartDOMRef.current) {
      const initChart = echarts.init(chartDOMRef.current);
      if (!chartRef?.current) {
        chartRef.current = initChart;
      }
      setChart(initChart);
    }

    return () => {
      chart?.dispose();
      if (chartRef?.current) chartRef.current = null;
    };
  }, [chartRef]);

  React.useEffect(() => {
    if (optionsMap.size > 0) {
      console.log(Object.fromEntries(optionsMap));
      chart?.setOption(Object.fromEntries(optionsMap), {
        lazyUpdate: true,
        notMerge: true,
      });
    }
  }, [optionsMap]);

  const addOption = React.useCallback((optionKey: string, options: any) => {
    setOptionsMap((prev) => {
      if (prev.has(optionKey)) {
        return new Map([
          ...prev,
          [optionKey, [...prev.get(optionKey), options]],
        ]);
      } else {
        return new Map([...prev, [optionKey, [options]]]);
      }
    });
  }, []);

  const removeOption = React.useCallback((optionKey: string) => {
    setOptionsMap((prev) => {
      const newState = new Map(prev);
      newState.delete(optionKey);
      return newState;
    });
  }, []);

  const ctxValue = React.useMemo(
    () => ({
      // chart,
      addOption,
      removeOption,
    }),
    [
      // chart,
      addOption,
      removeOption,
    ]
  );

  return (
    <ChartContext.Provider value={ctxValue}>
      <div ref={chartDOMRef} style={{ width: 1000, height: 500 }} />
      {chart && children}
    </ChartContext.Provider>
  );
});

export const useChart = () => React.useContext(ChartContext);
export default Chart;
