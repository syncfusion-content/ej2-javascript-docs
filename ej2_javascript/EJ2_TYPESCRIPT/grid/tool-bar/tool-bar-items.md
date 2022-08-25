# Toolbar Items

## Built-in toolbar items

Built-in toolbar items execute standard actions of the grid, and it can be added by defining the [`toolbar`](../../api/grid/#toolbar)
as a collection of built-in items. It renders the button with icon and text.

The following table shows built-in toolbar items and its actions.

| Built-in Toolbar Items | Actions |
|------------------------|---------|
| Add | Adds a new record.|
| Edit | Edits the selected record.|
| Update | Updates the edited record.|
| Delete | Deletes the selected record.|
| Cancel | Cancels the edit state.|
| Search | Searches the records by the given key.|
| Print | Prints the grid.|
| ExcelExport | Exports the grid to Excel.|
| PdfExport | Exports the grid to PDF.|
| WordExport | Exports the grid to Word.|
| ColumnChooser | Choose the column’s visibility.|

{% tab template="grid/grid", es5Template="toolbar" %}

```typescript
import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Print', 'Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 270
});
grid.appendTo('#Grid');

```

{% endtab %}

> * The [`toolbar`](../../api/grid/#toolbar) has options to define both built-in and custom toolbar items.

## Custom toolbar items

Custom toolbar items can be added by defining the [`toolbar`](../../api/grid/#toolbar) as a collection of
[`ItemModels`](../../api/toolbar/itemModel).
Actions for this customized toolbar items are defined in the [`toolbarClick`](../../api/grid/#toolbarclick) event.

By default, Custom toolbar items are in position **Left**. You can change the position by using the [`align`](../../api/toolbar/itemModel) property. In the below sample, we have applied position **Right** for the **Collapse All** toolbar item.

{% tab template="grid/custom-toolbar", sourceFiles="index.ts,index.css", es5Template="customitems" %}

```typescript
import { Grid, Toolbar, Group } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Toolbar, Group);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'expandall') {
        grid.groupModule.expandAll();
    }
    if (args.item.id === "collapseall") {
        grid.groupModule.collapseAll();
    }
};
let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    toolbar: [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' }, { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align:'Right' }],
    toolbarClick: clickHandler,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 200,
});
grid.appendTo('#Grid');

```

{% endtab %}

> * The [`toolbar`](../../api/grid/#toolbar) has options to define both built-in and custom toolbar items.
> * If a toolbar item does not match the built-in items, it will be treated as a custom toolbar item.

## Both built-in and custom items in toolbar

Grid have an option to use both built-in and custom toolbar items at same time.

In the below example, `Add`, `Edit`, `Delete`, `Update`, `Cancel` are built-in toolbar items and `Click` is custom toolbar item.

{% tab template="grid/grid",es5Template="builtincustomitems" %}

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'Click') {
        alert("Custom toolbar click...");
    }
};

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }],
    toolbarClick: clickHandler,
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

## Custom toolbar component in a specific position

By default, Custom toolbar items are in the Left position. You can change the position by using the [align](../../api/toolbar/itemModel) property. In the following sample, we have applied the Right position for the Collapse All toolbar item, Left for the Expand All toolbar item, and Center for the Search toolbar item.

{% tab template="grid/custom-toolbar", sourceFiles="index.ts,index.css", es5Template="toolbaritems" %}

```typescript
import { Grid, Toolbar, Group } from '@syncfusion/ej2-grids';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { employeeData } from './datasource.ts';

Grid.Inject(Toolbar, Group);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'expandall') {
        grid.groupModule.expandAll();
    }
    if (args.item.id === "collapseall") {
        grid.groupModule.collapseAll();
    }
};
let grid: Grid = new Grid({
    dataSource: employeeData,
    allowGrouping: true,
    groupSettings: { columns: ['FirstName'] },
    toolbar: [{ text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall', align: 'Left'}, { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' }, { text: 'Search', align: 'Center'}],
    toolbarClick: clickHandler,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'FirstName', width: 140, headerText: 'First Name', type: 'string' },
        { field: 'Country', headerText: 'Country', textAlign: 'Right', width: 120, country: 'string' },
        { field: 'PostalCode', headerText: 'Postal Code', textAlign: 'Right', width: 140, type:'string' }
    ],
    height: 200,
});
grid.appendTo('#Grid');

```

{% endtab %}