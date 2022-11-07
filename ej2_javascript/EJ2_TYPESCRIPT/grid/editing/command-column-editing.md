# Command Column Editing

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`column.commands`](../../api/grid/column/#commands) property.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tab template="grid/command-column", sourceFiles="index.ts,index.html",es5Template="commandcolumn" %}

```typescript
import { Grid, CommandColumn, Edit } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);

let grid: Grid = new Grid({
    dataSource: employeeData,
    editSettings: { allowEditing: true, allowDeleting: true },
    columns: [
        { field: 'EmployeeID', isPrimaryKey: 'true', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 },
        { headerText: 'Commands', width: 120, commands: [{ type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
            { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' } },
            { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
            { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }]}
    ],
    height: 310
});
grid.appendTo('#Grid');

```

{% endtab %}

## Custom command column

 The custom command buttons can be added in a column by using the [`column.commands`](../../api/grid/column/#commands) property and
the action for the custom buttons can be defined in the [`commandClick`](../../api/grid/#commandClick) event.

{% tab template="grid/command-column", sourceFiles="index.ts,index.html", es5Template="customcommand" %}

```typescript
import { Grid, CommandColumn, Edit, IRow, Column, CommandClickEventArgs } from '@syncfusion/ej2-grids';
import { closest } from '@syncfusion/ej2-base';
import { employeeData } from './datasource.ts';

Grid.Inject(CommandColumn, Edit);

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 },
        { headerText: 'Commands', width: 120, commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat' } }]},
        ],
    commandClick: (args: CommandClickEventArgs) => {
        alert(JSON.stringify(args.rowData));
    },
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}