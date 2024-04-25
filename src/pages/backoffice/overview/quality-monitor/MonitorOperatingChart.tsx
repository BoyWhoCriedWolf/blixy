import { PieChart } from '@mui/x-charts';
import React from 'react'

const data = [
  { label: 'Other company', value: 2400 },
  { label: 'Personnel costs', value: 10000 },
  { label: 'Car costs', value: 1398 },
  { label: 'Cost of sales', value: 100 },
];

const MonitorOperatingChart = () => {
  return (
    <PieChart
      series={[
        {
          data: data,
          cx: 300,
          cy: 145,
          innerRadius: 70,
          outerRadius: 150,
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: false },
      }}
    />
  )
}

export default MonitorOperatingChart
