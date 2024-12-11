import { Chart, HiloOpenCloseSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(HiloOpenCloseSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Price in Dollar', 
        minimum: 60, 
        maximum: 200, 
        interval: 20,
        labelFormat: '${value}'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', open: 'open', 
            close: 'close', high: 'high', low: 'low',
            type: 'HiloOpenClose',
            accessibility: {
                accessibilityDescription: 'This chart displays the high, low, opening, and closing prices of financial data for each month from January to May.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the opening price was ${point.open}, the closing price was ${point.close}, the highest price was ${point.high}, and the lowest price was ${point.low}.'
            }
        }
    ],
    title: 'Financial Analysis'
}, '#element');