import React from 'react'
import { useChart } from './Chart';

const Yaxis = ({...options}) => {
    const { chart } = useChart()

    React.useEffect(() => {
      chart.setOption({
        yAxis: [
            {
              type: 'value',
              ...options,
            }
          ]
      }, {lazyUpdate: true})

    }, [chart])

    return null
}

export default Yaxis