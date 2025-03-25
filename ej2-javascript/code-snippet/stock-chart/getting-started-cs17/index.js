var stockChart = new ej.charts.StockChart({
    series:[{
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Candle'
    }]
});
stockChart.appendTo('#element');

