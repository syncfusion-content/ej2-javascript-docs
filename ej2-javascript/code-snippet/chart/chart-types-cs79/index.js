var chart = new ej.charts.Chart({
     primaryXAxis: {
            valueType: 'Category',
        },
        series: [
            {
                type: 'Bar', xName: 'x', width: 2, yName: 'y', groupName: 'USA', columnWidth: 0.7,
                dataSource: [{ x: '2012', y: 104 }, { x: '2016', y: 121 }, { x: '2020', y: 113 }], columnSpacing: 0.1,
                
            },
            {
                type: 'Bar', xName: 'x', width: 2, yName: 'y', groupName: 'USA', columnWidth: 0.5,
                dataSource: [{ x: '2012', y: 46 }, { x: '2016', y: 46 }, { x: '2020', y: 39 }], columnSpacing: 0.1,
               
            },
            {
                type: 'Bar', xName: 'x', width: 2, yName: 'y', groupName: 'UK', columnWidth: 0.7, 
                dataSource: [{ x: '2012', y: 65 }, { x: '2016', y: 67 },{ x: '2020', y: 65 }], columnSpacing: 0.1,
               
            },
            {
                type: 'Bar', xName: 'x', width: 2, yName: 'y', groupName: 'UK', columnWidth: 0.5,
                dataSource: [{ x: '2012', y: 29 }, { x: '2016', y: 27 },{ x: '2020', y: 22 }], columnSpacing: 0.1,
                
            },
        ],
}, '#element');

