var iconMap = {
    'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
    'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
};
var stockChart = new ej.charts.StockChart({
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
        template: (data) => {
            const icon = iconMap[data.series.name] || '';
            return '<div style="display:flex;align-items:center;gap:4px;">' +
                '<img src="' + icon + '" width="30" height="30"/>' +
                '<span>' + data.series.name + '</span>' +
                '</div>';
        }
    }
});
stockChart.appendTo('#element');

