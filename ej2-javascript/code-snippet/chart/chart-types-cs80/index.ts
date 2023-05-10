

import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';

Chart.Inject(BarSeries, Category);

export let numData: object[] = [
  { x: 2005, y: 28 }, { x: 2006, y: 25 },
  { x: 2007, y: 26 }, { x: 2008, y: 27 },
  { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }];

let chart: Chart = new Chart(
  {
    series: [
      {
        dataSource: numData,
        xName: 'x',
        yName: 'y',
        opacity: 0.5,
        border: { width: 4, color: 'red' },
        dashArray: '2',
        fill: 'blue',
        // Series type as bar series
        type: 'Bar',
      },
    ],
  },
  '#element'
);


