import { Grid, Page,HeaderCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true,
            headerCellInfo:onHeaderCellInfo,
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120},
                { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 120},
                { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 135, format: 'yMd' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2'},
                { field: 'ShippedDate', headerText: 'Shipped Date', textAlign: 'Right', width: 145, format: 'yMd'},
            ]
        });
    grid.appendTo('#Grid');

function onHeaderCellInfo(args: HeaderCellInfoEventArgs)
{
    if (args.cell.column.field == 'OrderDate') {
        args.node.classList.add('customcss');
        }
}