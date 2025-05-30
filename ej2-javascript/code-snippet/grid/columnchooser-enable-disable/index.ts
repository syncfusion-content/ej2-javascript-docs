import { Grid, Toolbar, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';

Grid.Inject(Toolbar, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columnChooserSettings: {
        enableSearching: false,
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right'},
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }
    ],
    height: 235
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    checked:true,
    change: change,
 });
toggle.appendTo('#switch');

function change(args: ChangeEventArgs){
    grid.columnChooserSettings.enableSearching=args.checked;
}
