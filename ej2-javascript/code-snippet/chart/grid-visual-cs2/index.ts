

import { Grid, Selection, Page,  ActionEventArgs } from '@syncfusion/ej2-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { orderData } from './datasource.ts';
import { Chart, ColumnSeries, DateTime } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DateTime);
Grid.Inject(Selection,Page);
    let chart: Chart;
    let data: Object = new DataManager(orderData as JSON[]).executeLocal(new Query().take(100));
    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true,
            pageSettings: { pageSize: 10 },
            columns: [
                { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'right' },
                { field: 'Freight', width: 120, format: 'C2', textAlign: 'right' }
            ],
        dataBound: () => {
        chart = new Chart({
            //Initializing Primary X Axis
            primaryXAxis: {
            valueType: 'DateTime',
            },
            series: [
            {
                type: 'Column',
                dataSource: grid.getCurrentViewRecords(),
                xName: 'OrderDate', width: 2, marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },
                yName: 'Freight', name: 'Germany',
            },
        ],

          });
          chart.appendTo('#Chart');
        },
         actionComplete: (args: ActionEventArgs) => {
                if (args.requestType === 'paging') {
                 chart.series[0].dataSource =  grid.getCurrentViewRecords();
                   chart.refresh();
                }
        });
    grid.appendTo('#Grid');


