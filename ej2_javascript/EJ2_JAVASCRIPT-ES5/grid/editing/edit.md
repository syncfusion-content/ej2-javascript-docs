---
title: "Editing"
component: "Grid"
description: "Learn how to perform CRUD operations in various edit modes, use different cell editors, and persist data on the server side in the Essential JS 2 DataGrid control."
---

# Editing

The Grid component has options to dynamically insert, delete and update records.
Editing feature requires a primary key column for CRUD operations.
To define the primary key, set [`columns.isPrimaryKey`](../../api/grid/column/#isprimarykey) to `true` in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on `Edit` button in the toolbar. Similarly, you can add a new record to grid either by clicking on `Add` button in the toolbar or on an external button which is bound to invoke the [`addRecord`](../../api/grid/edit/#addrecord) method of the grid, `Save` and `Cancel` while in edit mode is possible using respective toolbar icon in grid.

Deletion of the record is possible by selecting the required row and click on `Delete` button in the toolbar.

To use CRUD, inject the [`Edit`](../../api/grid/edit) module in grid.

{% tab template="grid/grid",es5Template="editing" %}

```typescript
import { Grid, Edit } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit);

let grid: Grid = new Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

> * If [`columns.isIdentity`](../../api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying
[`columns.allowEditing`](../../api/grid/column/#allowediting) to `false`.

## Toolbar with edit option

The grid toolbar has the [built-in items](../tool-bar) to execute Editing actions.
You can define this by using the [`toolbar`](../../api/grid/edit/#toolbar) property.

{% tab template="grid/grid",es5Template="toolbaredit" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](../../api/grid/column/#allowediting).

In the following demo, editing is disabled for the `CustomerID` column.

{% tab template="grid/grid",es5Template="disableedit" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, allowEditing: false },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Disable editing for a particular row or cell

You can disable the editing for a particular row by using the [`actionBegin`](../../api/grid/#actionbegin) event of Grid based on `requestType` as `beginEdit`.

In the below demo, the rows which are having the value for `ShipCountry` column as "France" is prevented from editing.

{% tab template="grid/grid",es5Template="disableediting" %}

```typescript
import { Grid, Edit, Toolbar, EditEventArgs, EJ2Intance } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    actionBegin: (args: EditEventArgs) => {
        if (args.requestType === 'beginEdit') {
            if (args.rowData.ShipCountry == "France") {
                args.cancel = true;
            }
        }
    },
    toolbar: ['Edit', 'Update', 'Cancel'],
    editSettings: { allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

For batch mode of editing, you can use [`cellEdit`](../../api/grid/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tab template="grid/grid",es5Template="disableeditingbatch" %}

```typescript
import { Grid, Edit, Toolbar, EditEventArgs, EJ2Intance } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    cellEdit: (args: EditEventArgs) => {
        if (args.value == "France") {
            args.cancel = true;
        }
    },
    toolbar: ['Edit', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Editing template column

You can edit the template column value by defining the `field` for that particular column.

In the below demo, the `ShipCountry` column is rendered with the template.

{% tab template="grid/edit-column-template",es5Template="template" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', template: '#template', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```

{% endtab %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If `primaryKey` is not defined in the grid, then edit or delete action take places the first row.

## How to make a Grid column always editable

Make the Grid column always editable using the column template feature of the Grid.

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](../../api/grid#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](../../api/grid#updaterow) method of the Grid.

{% tab template="grid/grid",es5Template="grid-edit" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, textAlign: 'Right', format:'yMd' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 },
        { field: 'Freight', headerText: 'Receipt Amount', width: 150, template:'#template' }
    ],
    height: 315,
    created: (args) => {
        grid.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if ((e.target as any).classList.contains('custemp')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target as any, 'e-row');
                var rowIndex = (row as any).rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                (rowData as any).Freight = (e.target as any).value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

## See Also

* [Customize dialog when editing](../how-to/customize-the-edit-dialog)
* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list-with-grid-editing)
* [Customize the Edit Dialog](../how-to/customize-the-edit-dialog)
* [Tab Inside the Dialog Template](../how-to/using-the-tab-inside-the-dialog-template)
* [How to bulk edit columns in Grid](https://www.syncfusion.com/blogs/post/bulk-edit-columns-in-javascript-datagrid.aspx)
* [How to use Document Editor as an edit field in Data Grid](https://www.syncfusion.com/kb/11722/how-to-use-document-editor-as-an-edit-field-in-data-grid)
* [How to render custom confirmation dialog while updating edit operations](https://www.syncfusion.com/kb/11695/how-to-render-custom-confirmation-dialog-while-updating-edit-operations)
* [How to render ColorPicker component for particular column while editing a record](https://www.syncfusion.com/kb/11569/how-to-render-colorpicker-component-for-particular-column-while-editing-a-record)
* [How to positioning the validation error message](https://www.syncfusion.com/kb/11217/how-to-positioning-the-validation-error-message)