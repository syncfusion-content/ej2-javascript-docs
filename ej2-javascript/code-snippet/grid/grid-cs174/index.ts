

import { Grid, Sort, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Sort, Page);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowSorting: true,
    allowPaging: true,
    pageSettings: { pageSize: 7 }
});

grid.appendTo('#Grid');




