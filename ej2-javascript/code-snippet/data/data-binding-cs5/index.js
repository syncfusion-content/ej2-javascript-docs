var localData = [
  { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
  { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];

let chartData = new ej.data.DataManager(localData);

new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'Category'
  },
  series: [{
    dataSource: chartData,
    xName: 'month',
    yName: 'sales',
    type: 'Column'
  }]
}, '#element');
