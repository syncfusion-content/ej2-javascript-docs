import { Grid, Edit, Page, ContextMenu } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Switch, ChangeEventArgs } from '@syncfusion/ej2-buttons';

Grid.Inject( Edit, Page, ContextMenu);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    allowPaging: true,
    contextMenuItems: ['Copy', 'Edit', 'Delete'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 90, textAlign: 'Right', isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer Name', width: 100 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', textAlign: 'Right', editType: 'numericedit', width: 90 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

let toggle: Switch = new Switch({
    change: onSwitchChange,
});
toggle.appendTo('#switch');

function onSwitchChange(args: ChangeEventArgs) {
    if (args.checked) {
        grid.contextMenuModule.contextMenu.enableItems(['Copy'], false);
    } else {
        grid.contextMenuModule.contextMenu.enableItems(['Copy'], true);
    }
}