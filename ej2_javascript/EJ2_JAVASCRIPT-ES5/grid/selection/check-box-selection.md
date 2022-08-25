# Checkbox Selection

Checkbox selection provides an option to select multiple grid records with help of checkbox in each row.

To render the checkbox in each grid row, you need to use checkbox column with type as `checkbox` using the  column [`type`](../../api/grid/column/#type) property.

{% tab template="grid/grid", es5Template="checkboxselection" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { type: 'checkbox' },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

> * By default, selection is allowed by clicking a grid row or checkbox in that row. To allow selection only through checkbox, you can set the
[`selectionSettings.checkboxOnly`](../../api/grid/selectionSettings/#checkboxonly) property to true.
> * Selection can be persisted in all the operations using the [`selectionSettings.persistSelection`](../../api/grid/selectionSettings/#persistselection) property.
For persisting selection on the grid, any one of the columns should be defined as a primary key using the [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API,
[`selectionSettings.checkboxMode`](../../api/grid/selectionSettings/#checkboxmode). The modes are;

* **`Default`**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **`ResetOnRowClick`**: In ResetOnRowClick mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press
and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% tab template="grid/grid",es5Template="windowslikeselection" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {checkboxMode: 'ResetOnRowClick'},
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Prevent specific rows from being selected in checkbox selection

You can prevent specific rows from being selected in the checkbox selection mode by hiding the checkboxes using the [rowDataBound](../../api/grid/#rowdatabound) event. You achieve this by setting the `isSelectable` argument as false in the `rowDataBound` event based on certain conditions as per the needs of the application.

In the following sample, the selection of specific rows has been prevented based on the `isSelectable` argument in the `rowDataBound` event.

{% tab template="grid/grid", es5Template="prevent-selection" %}

```typescript
import { Grid, Edit, Page, Filter, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Page, Filter, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { persistSelection: true },
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    pageSettings: { pageSize: 20 },
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    rowDataBound: rowDataBound,
    columns: [
        { type: 'checkbox', width: 120 },
        { field: 'List', headerText: 'List',  width: 120 },
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID',  width: 150 },
        { field: 'CustomerID', headerText: 'CustomerID',  width: 150 },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 }
    ]
});
grid.appendTo('#Grid');

for (let i = 0; i < data.length; i++) {
    data[i]['List'] = i + 1;
}
function rowDataBound(args): void {
    args.isSelectable = args.data.List % 5 === 0;
}

```

{% endtab %}