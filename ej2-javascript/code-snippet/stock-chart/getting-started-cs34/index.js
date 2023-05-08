var stockChart = new ej.charts.StockChart({
    title: 'Sales Analysis'
    series:[{
        dataSource: chartData, type: 'Candle'
    }],
});
stockChart.appendTo('#element');

