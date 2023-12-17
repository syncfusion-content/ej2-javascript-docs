let count = 0;
document.getElementById('btn').onclick = () => {

    //Create div element dynamically and append to DOM
    var chartEle = document.createElement('div');
    chartEle.id = 'chartContainer' + count;
    document.getElementsByTagName('body')[0].appendChild(chartEle);

    //Created chart here
    var chart = new ej.charts.Chart({
        series: [{
            type: 'Line', xName: 'x', width: 2, marker: { visible: true },
            yName: 'y', name: 'Germany',
            dataSource: [{ x: 1, y: 21 }, { x: 2, y: 24 }, { x: 3, y: 36 },
            { x: 4, y: 38 }, { x: 5, y: 54 }, { x: 6, y: 57 }, { x: 7, y: 70 }],
        }],
        title: 'Inflation - Consumer Price', tooltip: { enable: true }, height: '400', width: '800'
    });
    chart.appendTo('#' + chartEle.id);
    count++;
}



