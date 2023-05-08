/**
 * Sample for Pareto chart
 */

    var chart = new ej.charts.Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            interval: 1,
            valueType: 'Category',labelIntersectAction: 'Rotate45',
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
                    { x: 'Coller Defect', y: 10 }, { x: 'Cuff Defect', y: 7 },
                    { x: 'Sleeve Defect', y: 6 }
                ], marker: { visible: true },
                xName: 'x', yName: 'y', name: 'Defect', width: 2
            }
        ],
        width: ej.base.Browser.isDevice ? '100%' : '75%',
        //Initializing Chart Title
        title: 'Pareto chart - Defects in Shirts',
        legendSettings: { visible: false },
        //Initializing Tooltip
        tooltip: {
            enable: true,
            shared: false
        },

    });
    chart.appendTo('#element');


