


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

// Specify the type of the Spinner to be displayed in the Grid.

setSpinner({ type: 'Bootstrap'});



