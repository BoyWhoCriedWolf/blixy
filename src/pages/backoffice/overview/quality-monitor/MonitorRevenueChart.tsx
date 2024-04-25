import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  // yAxis: [
  //   {
  //     label: 'rainfall (mm)',
  //   },
  // ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-120px, 0)',
    },
  },
};
const dataset = [
  {
    revenue: 10,
    month: 'Jan',
  },
  {
    revenue: 0,
    month: 'Feb',
  },
  {
    revenue: 30,
    month: 'Mar',
  },
  {
    revenue: 35,
    month: 'Apr',
  },
  {
    revenue: 0,
    month: 'May',
  },
  {
    revenue: 0,
    month: 'Jun',
  },
  {
    revenue: 45,
    month: 'Jul',
  },
  {
    revenue: 10,
    month: 'Aug',
  },
  {
    revenue: 0,
    month: 'Sep',
  },
  {
    revenue: 10,
    month: 'Oct',
  },
  {
    revenue: 55,
    month: 'Nov',
  },
  {
    revenue: 300,
    month: 'Dec',
  },
];
const valueFormatter = (value: number | null) => `${value}€`;

const MonitorRevenueChart = () => {
  return (
    <BarChart
      grid={{ horizontal: true }}
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'revenue', label: 'revenue', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}

export default MonitorRevenueChart;
