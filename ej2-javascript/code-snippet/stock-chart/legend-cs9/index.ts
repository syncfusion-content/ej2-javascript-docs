import {  StockChart, StockLegend } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
import { DateTime, AreaSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, Logarithmic } from '@syncfusion/ej2-charts';
import { SplineAreaSeries, SplineSeries } from '@syncfusion/ej2-charts';
import { AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator } from '@syncfusion/ej2-charts';
import { MacdIndicator, RsiIndicator, Trendlines, SmaIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-charts';
import { TmaIndicator, RangeTooltip, Tooltip, Crosshair } from '@syncfusion/ej2-charts';
StockChart.Inject(DateTime, Logarithmic, AreaSeries, HiloOpenCloseSeries, HiloSeries, LineSeries, SplineAreaSeries, SplineSeries);
StockChart.Inject(AccumulationDistributionIndicator, AtrIndicator, BollingerBands, EmaIndicator, MomentumIndicator);
StockChart.Inject(MacdIndicator, RsiIndicator, SmaIndicator, StochasticIndicator);
StockChart.Inject(Trendlines, TmaIndicator, StockLegend, RangeTooltip, Tooltip, Crosshair, Export);

const iconMap: { [key: string]: string } = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};

const stockChart: StockChart = new StockChart({
    width: '1100px',
    height: '455px',
    primaryYAxis: {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 }
    },
    primaryXAxis: {
         majorTickLines: { color: 'transparent', width: 0 },
    },
    series: [
        { dataSource: chartData, xName: 'x', yName: 'low', type: 'Line', name: 'Google' },
        { dataSource: chartData, xName: 'x', yName: 'high', type: 'Line', name: 'MicrosoftEdge' }
    ],
    title: 'AAPL Stock Price',
    legendSettings: {
        visible: true,
        template: (data: { series: { name: string } }) => {
            const icon: string = iconMap[data.series.name] || '';
            return '<div style="display:flex;align-items:center;gap:4px;">' +
                '<img src="' + icon + '" width="30" height="30"/>' +
                '<span>' + data.series.name + '</span>' +
                '</div>';
        }
    }
});
stockChart.appendTo('#element');
