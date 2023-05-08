


import {
  Chart, DateTime, SplineAreaSeries,
} from '@syncfusion/ej2-charts';
Chart.Inject(SplineAreaSeries, DateTime);

let chart: Chart = new Chart(
  {
    series: [
      {
        type: 'SplineArea',
        dataSource: [
          { x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 },
          { x: 2003, y: 500 }, { x: 2004, y: 449 }, { x: 2005, y: 470 },
          { x: 2006, y: 437 }, { x: 2007, y: 458 }, { x: 2008, y: 500 },
          { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 520 }
        ],
        fill: 'blue', xName: 'x', yName: 'y',
      },
    ],
  },
  '#element'
);



