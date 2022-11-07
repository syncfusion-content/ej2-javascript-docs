# Column Reorder

Reordering can be done by drag and drop of a particular column header from one index to another index within the grid. To enable reordering, set the [`allowReordering`](../../api/grid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](../../api/grid/reorder) module in the grid.

{% tab template="grid/row-template" , es5Template="reorder" %}

```typescript
import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](../../api/grid/column/#allowreordering) to **false**.

## Reorder single column

Grid have option to reorder Columns either by Interaction or by using the [`reorderColumns`](../../api/grid/reorder/#reordercolumns)method. In the below sample, **ShipCity** column is reordered to last column position by using the method.

{% tab template="grid/reorder-single-column" , es5Template="reorderSingleColumn" %}

```typescript
import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let reorderSingleColsBtn: Button = new Button();
reorderSingleColsBtn.appendTo('#reorderSingleCol');

document.getElementById('reorderSingleCol').addEventListener('click', () => {
    grid.reorderColumns('ShipCity','ShipName');
});

```

{% endtab %}

## Reorder multiple columns

User can reorder a single column at a time by Interaction. Sometimes we need to have reorder multiple columns at the same time, It can be achieved through programmatically by using [`reorderColumns`](../../api/grid/reorder/#reordercolumns) method.

In the below sample, **Ship City** and **Ship Region** column is reordered to last column position.

{% tab template="grid/reorder-column" , es5Template="reorderbyColumn" %}

```typescript
import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let reorderMultipleColsBtn: Button = new Button();
reorderMultipleColsBtn.appendTo('#reorderMultipleCols');

document.getElementById('reorderMultipleCols').addEventListener('click', () => {
    grid.reorderColumns(['ShipCity','ShipRegion'],'ShipName');
});

```

{% endtab %}

## Reorder events

During the reorder action, the grid component triggers the below three events.

1. The [`columnDragStart`](../../api/grid/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](../../api/grid/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](../../api/grid/#columndrop) event triggers when a column header element is dropped on the target column.

{% tab template="grid/row-template" , es5Template="reorderEvents" %}

```typescript
import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    columnDragStart: () => {
        alert('columnDragStart event is Triggered');
    },
    columnDrag: () => {
        alert('columnDrag event is Triggered');
    },
    columnDrop: () => {
        alert('columnDrop event is Triggered');
    }
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}