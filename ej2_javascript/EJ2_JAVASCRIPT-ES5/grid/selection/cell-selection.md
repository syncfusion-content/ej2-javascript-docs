# Cell Selection

Cell selection can be done through simple mouse down or arrow keys (up, down, left, and right).

The grid supports two types of cell selection mode that can be set by using
the [`selectionSettings.cellSelectionMode`](../../api/grid/selectionSettings/#cellselectionmode). They are:

* **`Flow`**: The `Flow` value is set by default. The range of cells are selected between the start index and end index that includes in between cells of rows.
* **`Box`**: Range of cells are selected from the start and end column indexes that includes in between cells of rows within the range.

{% tab template="grid/grid", es5Template="cellselection" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    selectionSettings: { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell' },
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

> Cell selection requires the [`selectionSettings.mode`](../../api/grid/selectionSettings/#mode) to be `Cell` or  `Both`, and
[`type`](../../api/grid/selectionSettings/#type) should be `Multiple`.

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