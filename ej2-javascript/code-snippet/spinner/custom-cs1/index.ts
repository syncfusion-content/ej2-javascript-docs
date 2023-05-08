


import { createSpinner, setSpinner , showSpinner } from '@syncfusion/ej2-popups';
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let gridData: Object[] = data.slice(0, 7);

// By default, Spinner is rendered with specified theme inside the Grid component.

let grid: Grid = new Grid({
    dataSource: gridData,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

grid.hideSpinner = () => true;

// Specify the template content to be displayed in the Spinner

setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>'});

let gridData2: Object[] = data.slice(0, 7);

// Spinner is rendered with template specified in the setSpinner method.

let grid2: Grid = new Grid({
    dataSource: gridData2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid2.appendTo('#Grid2');

grid2.hideSpinner = () => true;



