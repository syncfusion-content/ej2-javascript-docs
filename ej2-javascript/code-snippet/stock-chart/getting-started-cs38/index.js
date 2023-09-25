let datetimeCategoryData = [
  { x: new Date(2021, 1, 11) }, { x: new Date(2021, 1, 12) }, { x: new Date(2021, 1, 13) }, { x: new Date(2021, 1, 14) }, { x: new Date(2021, 1, 15) },
  { x: new Date(2021, 1, 19) }, { x: new Date(2021, 1, 20) }, { x: new Date(2021, 1, 21) }, { x: new Date(2021, 1, 22) }, { x: new Date(2021, 3, 1) },
  { x: new Date(2021, 3, 2) }, { x: new Date(2021, 4, 1) }, { x: new Date(2021, 4, 5) }, { x: new Date(2021, 4, 6) }, { x: new Date(2021, 4, 7) },
  { x: new Date(2021, 4, 11) }, { x: new Date(2021, 4, 13) }, { x: new Date(2021, 4, 15) }, { x: new Date(2021, 4, 16) }, { x: new Date(2021, 4, 17) },
  { x: new Date(2021, 4, 18) }, { x: new Date(2021, 4, 20) }, { x: new Date(2021, 4, 21) }, { x: new Date(2021, 4, 23) }, { x: new Date(2021, 4, 25) },
  { x: new Date(2021, 5, 1) }, { x: new Date(2021, 5, 2) }, { x: new Date(2021, 5, 6) }, { x: new Date(2021, 5, 7) }, { x: new Date(2021, 5, 8) },
  { x: new Date(2021, 5, 11) }, { x: new Date(2021, 5, 15) }, { x: new Date(2021, 5, 18) }, { x: new Date(2021, 5, 20) }, { x: new Date(2021, 5, 25) },
  { x: new Date(2021, 6, 1) }, { x: new Date(2021, 6, 2) }, { x: new Date(2021, 6, 3) }, { x: new Date(2021, 6, 4) }, { x: new Date(2021, 6, 5) },
  { x: new Date(2021, 6, 10) }, { x: new Date(2021, 6, 11) }, { x: new Date(2021, 6, 12) }, { x: new Date(2021, 6, 13) }, { x: new Date(2021, 6, 15) },
  { x: new Date(2021, 6, 16) }, { x: new Date(2021, 6, 17) }, { x: new Date(2021, 6, 18) }, { x: new Date(2021, 6, 19) }, { x: new Date(2021, 6, 20) }
]

let series2 = [];
let point2;
for (var i = 1; i < 46; i++) {
  point2 = {
    x: datetimeCategoryData[i],
    y: parseInt((Math.floor(Math.random() * (130 - 120 + 1)) + 120).toString(), 10),
    High: parseInt((Math.floor(Math.random() * (92 - 88 + 1)) + 88).toString(), 10),
    Low: parseInt((Math.floor(Math.random() * (86 - 76 + 1)) + 76).toString(), 10),
    Open: parseInt((Math.floor(Math.random() * (85 - 75 + 1)) + 75).toString(), 10),
    Close: parseInt((Math.floor(Math.random() * (90 - 85 + 1)) + 85).toString(), 10),
    Volume: parseInt((Math.floor(Math.random() * (965935749 - 660187068 + 1)) + 660187068).toString(), 10)
  };
  series2.push(point2);
}

var stockChart = new ej.charts.StockChart({
  primaryXAxis: { valueType: 'DateTimeCategory', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } },
  series: [
    {
      dataSource: series2,
      type: 'Line', xName: 'x', yName: 'y'
    },
  ],
  tooltip: {
    enable: true, header: 'AAPL Stock Price'
  },
  crosshair: {
    enable: true
  },
});
stockChart.appendTo('#element');

