var data = [
    { x: 2005, y: 90, y1: 40, y2: 70, y3: 120 },
    { x: 2006, y: 80, y1: 90, y2: 110, y3: 70 },
    { x: 2007, y: 50, y1: 80, y2: 120, y3: 50 },
    { x: 2008, y: 70, y1: 30, y2: 60, y3: 180 },
    { x: 2009, y: 30, y1: 80, y2: 80, y3: 30 },
    { x: 2010, y: 10, y1: 40, y2: 30, y3: 270 },
    { x: 2011, y: 100, y1: 30, y2: 70, y3: 40 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2004, maximum: 2012, interval: 1
    },
    primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%',
    },
    series:[{
        dataSource: data,
        fill: 'green',width: 2,
        dashArray: '2',xName: 'x',marker: {visible: true},
        yName: 'y',type: 'StackingLine100',
      },
      {
        dataSource: data,
        fill: 'pink',width: 2,
        dashArray: '2',xName: 'x',marker: {visible: true},
        yName: 'y1',type: 'StackingLine100',
      },
      {
        dataSource: data,
        fill: 'yellow',width: 2,
        dashArray: '2',xName: 'x',marker: {visible: true},
        yName: 'y2',type: 'StackingLine100',
      },
      {
        dataSource: data,
        fill: 'red',width: 2,
        dashArray: '2',xName: 'x',marker: {visible: true},
        yName: 'y3',type: 'StackingLine100',
      }],
    title: 'Efficiency of oil-fired power production'
}, '#element');

