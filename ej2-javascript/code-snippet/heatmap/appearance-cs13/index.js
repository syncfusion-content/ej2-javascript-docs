var heatmapData = [
    {
        Year: '2017',
        image:
            'https://ej2.syncfusion.com/demos/src/circular-gauge/images/golfball.png',
        'Jan-Feb': [4, 39],
        'Mar-Apr': [3, 8],
        'May-Jun': [1, 3],
        'Jul-Aug': [1, 10],
        'Sep-Oct': [4, 4],
        'Nov-Dec': [2, 15]
    },
    {
        Year: '2016',
        image:
            'https://ej2.syncfusion.com/demos/src/circular-gauge/images/basketball.png',
        'Jan-Feb': [4, 28],
        'Mar-Apr': [5, 92],
        'May-Jun': [5, 73],
        'Jul-Aug': [3, 1],
        'Sep-Oct': [3, 4],
        'Nov-Dec': [4, 126]
    },
    {
        Year: '2015',
        image:
            'https://ej2.syncfusion.com/demos/src/circular-gauge/images/football.png',
        'Jan-Feb': [4, 45],
        'Mar-Apr': [5, 152],
        'May-Jun': [0, 44],
        'Jul-Aug': [4, 54],
        'Sep-Oct': [5, 243],
        'Nov-Dec': [2, 45]
    },
];

var heatmap = new ej.heatmap.HeatMap({
    titleSettings: {
        text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit'
        },
    },
    xAxis: {
        labels: ['2015', '2016', '2017']
    },
    yAxis: {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
    },
    cellSettings: {
        labelTemplate:
            "<div><img style='width:20px;height:20px;' src='${image}'/> </div>"
    },
    paletteSettings: {
        palette: [{ color: '#C06C84' }, { color: '#6C5B7B' }, { color: '#355C7D' }],
        type: 'Gradient',
    },
    dataSourceSettings: {
        isJsonData: true,
        adaptorType: 'Table',
        xDataMapping: 'Year'
    },
    dataSource: heatmapData
});
heatmap.appendTo('#element');  