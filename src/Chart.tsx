import React from 'react'
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, GridComponent, CanvasRenderer, UniversalTransition]);

const ChartContext = React.createContext<{chart: echarts.ECharts}>({})

const App: React.FC = ({children}) => {
  const [chart, setChart] = React.useState<echarts.ECharts>()
  const chartDOMRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if(chartDOMRef.current) {
        const _chart = echarts.init(chartDOMRef.current)
        _chart.setOption({
            xAxis: [],
            yAxis: [],
            series:[]
        })
        setChart(_chart)
    }
  }, [])

  const ctxValue = React.useMemo(() => ({chart}), [chart])

  return (
      <ChartContext.Provider value={ctxValue}>
        <div ref={chartDOMRef} style={{width: 500, height: 500}} />
        {chart && children}
      </ChartContext.Provider>
  )
}

export const useChart = () => React.useContext(ChartContext)
export default App
