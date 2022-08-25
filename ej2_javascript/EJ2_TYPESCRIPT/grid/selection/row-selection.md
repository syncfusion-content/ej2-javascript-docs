# Row Selection

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](../../api/grid/#selectedrowindex) value.

 {% tab template="grid/grid", es5Template="initselect" %}

```typescript
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: { type: 'Multiple', mode: 'Both' },
    selectedRowIndex: 1,
    columns: [
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

## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](../../api/grid/#getselectedrowindexes) method.

{% tab template="grid/selected-index", es5Template="getindex" %}

```typescript
import { Grid, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {type: 'Multiple'},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 315,
    rowSelected: rowSelected
});
grid.appendTo('#Grid');

function rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = grid.getSelectedRowIndexes();  // get the selected row indexes.
    alert(selectedrowindex); // to alert the selected row indexes.
    let selectedrecords: Object[] = grid.getSelectedRecords();  // get the selected records.
}

```

{% endtab %}

## Simple multiple row selection

You can select multiple rows by clicking on rows one by one. This will not deselect the previously selected rows. To deselect the previously selected row, you can click on the  selected row. You can enable this behavior by using [`selectionSettings.enableSimpleMultiRowSelection`](../../api/grid/selectionSettings/#enablesimplemultirowselection) property.

{% tab template="grid/selected-index", es5Template="multiselect" %}

```typescript
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { sdata } from './datasource.ts';

Grid.Inject(Selection);

let grid: Grid = new Grid({
    dataSource: sdata,
    selectionSettings: {type: 'Multiple', enableSimpleMultiRowSelection: true},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
     ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell or column. To enable toggle selection, set [`enableToggle`](../../api/grid/selectionSettings/#enabletoggle) property of the selectionSettings as true. If you click on the selected row or cell or column then it will be unselected and vice versa.

{% tab template="grid/grid", es5Template="toggleselection" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    selectionSettings: {enableToggle: true},
    columns: [
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

> * If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.

## Clear selection programmatically

You can clear the Grid selection programmatically by using the [clearSelection](./api-grid.html#clearSelection) method.

In the demo below, we initially selected the third row using [selectedRowIndex](./api-grid.html#selectedrowindex-number). You can clear this selection by calling the [clearSelection](./api-grid.html#clearSelection) method in the button click event.

{% tab template="grid/clear-selection", es5Template="clearselection" %}

```typescript
import { Grid, Selection, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple' },
    selectedRowIndex: 2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    pageSettings: { pageSizes: true, pageSize: 5 }
});
grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');
document.getElementById('show').onclick = () => {
    let grid = document.getElementById('Grid').ej2_instances[0];
    grid.clearSelection();
}
```

{% endtab %}

## Get selected records on various pages

Enabling the [selectionSettings.persistSelection](./api-selectionSettings.html#persistselection-boolean) property will persist the selection in all Grid operations.

So the selection will be maintained on every page even after navigating to another page.

You can get the selected records using the [getSelectedRecords](./api-grid.html#getSelectedRecords) method.

{% tab template="grid/selected-records", es5Template="selectedRecords" %}

```typescript
import { Grid, Selection, RowSelectEventArgs, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Page, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    allowSelection: true,
    allowPaging: true,
    selectionSettings: { type: 'Multiple', persistSelection: true },
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 130 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 100 }
    ],
    pageSettings: { pageSizes: true, pageSize: 5 }
});
grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');
document.getElementById('show').onclick = () => {
    let grid = document.getElementById('Grid').ej2_instances[0];
    let selectedrecords: Object[] = grid.getSelectedRecords();
    let selectedRecordsCount: number = selectedrecords.length;
    alert(selectedRecordsCount);
}
```

{% endtab %}

> * To persist the grid selection, it is necessary to define any one of the columns as a primary key using the [columns.isPrimaryKey](./api-column.html#isprimarykey-boolean) property.