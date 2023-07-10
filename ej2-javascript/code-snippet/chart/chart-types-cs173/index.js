/**
 * Sample for Pareto chart
 */

var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        interval: 1,
        valueType: 'Category', labelIntersectAction: 'Rotate45',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
    },
    //Initializing Primary X Axis
    primaryYAxis: {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Pareto',
            dataSource: [
                { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
                { x: 'Collar Defect', y: 10 }, { x: 'Cuff Defect', y: 7 },
                { x: 'Sleeve Defect', y: 6 }, { x: 'Other Defect', y: 2 }
            ],
            xName: 'x', yName: 'y', name: 'Defect', width: 2, opacity: 0.75, columnWidth: 0.4,
            paretoOptions: {
                marker: { visible: true, isFilled: true, width: 7, height: 7 },
                dashArray: '3,2',
                width: 2,
                fill: '#F7523F'
            },
            cornerRadius: { topLeft: ej.base.Browser.isDevice ? 4 : 6, topRight: ej.base.Browser.isDevice ? 4 : 6 }
        }
    ],
    //Initializing Chart Title
    title: 'Defects in Shirts',
    legendSettings: { visible: true, enableHighlight: true },
    //Initializing Tooltip
    tooltip: {
        enable: true,
        shared: true,
        format: '${series.name} : <b>${point.y}</b>'
    }

});
chart.appendTo('#element');