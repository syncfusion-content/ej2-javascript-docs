let heatmapData = [
    [0, 0, [4, 39]], [0, 1, [3, 8]], [0, 2, [1, 3]], [0, 3, [1, 10]], [0, 4, [4, 4]], [0, 5, [2, 15]],
    [1, 0, [4, 28]], [1, 1, [5, 92]], [1, 2, [5, 73]], [1, 3, [3, 1]], [1, 4, [3, 4]], [1, 5, [4, 126]],
    [2, 0, [4, 45]], [2, 1, [5, 152]], [2, 2, [0, 44]], [2, 3, [4, 54]], [2, 4, [5, 243]], [2, 5, [2, 45]]
];

let heatmap = new ej.heatmap.HeatMap({
    titleSettings: {
        text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    xAxis: {
        labels: ['2017', '2016', '2015']
    },
    yAxis: {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
    },
    paletteSettings: {
        palette: [
            { color: '#C06C84' },
            { color: '#6C5B7B' },
            { color: '#355C7D' }
        ],
        type: "Gradient"
    },
    cellSettings: {
        border: {
            width: 1
        },
        tileType: 'Bubble',
        bubbleType: 'SizeAndColor'
    },
    dataSource: heatmapData,
    dataSourceSettings: {
        isJsonData: false,
        adaptorType: 'Cell'
    },
    legendSettings: {
        visible: true
    },
    tooltipRender: function (args) {
        args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'
            + 'Accidents ' + ' : ' + args.value[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '
            + args.value[1].bubbleData];
    }
});
heatmap.appendTo('#element');

