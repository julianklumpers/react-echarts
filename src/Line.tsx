import React from 'react'
import { useChart } from './Chart';

const Line = () => {

    const { chart } = useChart()

    React.useEffect(() => {
        const option = {
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            yAxisIndex: 1,
          },
          {
            data: [15, 23, 124, 418, 35, 247, 360],
            type: 'line',
            yAxisIndex: 0,
          }
        ]
      };

      chart.setOption(option, {lazyUpdate: true})

    }, [chart])

    return null
}

export default Line