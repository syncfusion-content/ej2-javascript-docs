import { Chart, CandleSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(CandleSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Date',
        majorGridLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Price',
        minimum: 80,
        maximum: 200,
        interval: 20
    },
    series:[
        {
            dataSource: chartData, 
            width: 2,
            xName: 'x', 
            open: 'open', 
            close: 'close', 
            high: 'high', 
            low: 'low',
            type: 'Candle',
            accessibility: {
                accessibilityDescription: 'This series displays the monthly stock performance of Shirpur Gold Refinery, showcasing open, high, low, and close prices.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For ${point.x}, the stock opened at ${point.open} USD, reached a high of ${point.high} USD, a low of ${point.low} USD, and closed at ${point.close} USD.'
            }
        }
    ],
    title: 'Shirpur Gold Refinery Share Price'
}, '#element');