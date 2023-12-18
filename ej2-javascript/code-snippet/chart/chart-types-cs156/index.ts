


import { Chart, DateTime, StepAreaSeries } from '@syncfusion/ej2-charts';
Chart.Inject(StepAreaSeries, DateTime);

let chart: Chart = new Chart(
  {
    series: [
      {
        type: 'StepArea',
        dataSource: [
          { x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 },
          { x: 2003, y: 500 }, { x: 2004, y: 449 }, { x: 2005, y: 470 },
          { x: 2006, y: 437 }, { x: 2007, y: 458 }, { x: 2008, y: 500 },
          { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 520 }
        ],
        fill: 'blue', xName: 'x', yName: 'y', border: { width:2, color: 'red'},
        opacity: 0.4, step: 'Right', dashArray: '5,5'
      },
    ],
  },
  '#element'
);



