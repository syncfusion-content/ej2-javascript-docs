

import { Chart, ColumnSeries, Category, Legend, Export } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, Legend, Export);
import { EmitType } from '@syncfusion/ej2-base';

let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Manager',
            valueType: 'Category',
            majorGridLines: { width: 0 }

        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Sales',
            minimum: 0,
            maximum: 20000,
            majorGridLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                type: 'Column',
                dataSource: [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
                { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }],
                xName: 'x', width: 2,
                yName: 'y'
            }
        ],
        beforeExport: function (args) {
            args.excelProperties.rows[0].cells[0].value = 'Changed Title';
            args.excelProperties.rows[1].cells[0].value = 'X Title';
            args.excelProperties.rows[1].cells[1].value = 'Y Title';
            args.excelProperties.rows[2].cells[1].value = args.excelProperties.rows[2].cells[1].value + 2;
        },
        //Initializing Chart title
        title: 'Sales Comparision',
    }, '#element');


    document.getElementById('print').onclick = () => {
        chart.exportModule.export('XLSX', 'result');
    };


