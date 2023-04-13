


import { Grid, Freeze } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Freeze);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    enableHover: false,
    frozenRows: 2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 120 }
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, freeze: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, freeze: 'Left' }
    ]
});
grid.appendTo('#Grid');



