


import { Chart, RangeAreaSeries, DateTime } from '@syncfusion/ej2-charts';
Chart.Inject(RangeAreaSeries, DateTime);

let series: Object[] = [];
let value: number = 70;
let point: Object;

for (let i: number = 1; i < 70; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point = { x: new Date(1930 + i, 5, i), high: value, low: value - 25 };
    series.push(point);
}

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
    },
    series: [
        {
            type: 'RangeArea', opacity: 0.7,
            dataSource: series, fill: 'blue',
            xName: 'x', high: 'high', low: 'low',
        }],
}, '#element');



