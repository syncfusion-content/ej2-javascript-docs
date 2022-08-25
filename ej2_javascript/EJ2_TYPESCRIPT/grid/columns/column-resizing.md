# Column Resizing

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To enable column resize, set the [`allowResizing`](../../api/grid/#allowresizing) property to true.

To use the column resize, inject **Resize** module in the grid.

{% tab template="grid/row-template", es5Template="resize" %}

```typescript
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width:150 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

> * You can disable resizing for a particular column by setting the [`columns.allowResizing`](../../api/grid/column/#allowresizing) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.

## Column resizing externally

To resize a column, set width to that particular column and then refresh the grid header by using the [`refreshHeader()`](../../api/grid/#refreshheader) method. Please refer the below code

```typescript

var grid = document.getElementById('Grid').ej2_instances[0]; //Grid Instance

var columns = grid.columns;

columns[0].width = 150;

grid.refreshHeader();

```

## Min and max width

Column resize can be restricted between minimum and maximum width by defining the [`columns->minWidth`](../../api/grid/column/#minwidth) and [`columns->maxWidth`](../../api/grid/column/#maxwidth).

In the following sample, minimum and maximum width are defined for **OrderID**, **Ship Name**, and **Ship Country** columns.

{% tab template="grid/row-template", es5Template="minmax" %}

```typescript
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', minWidth: 100, width: 150, maxWidth: 300 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name',  minWidth: 120, width: 150, maxWidth: 250  },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country',  minWidth: 150, width: 200, maxWidth: 350  },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for any particular stacked column by setting [`allowResizing`](../../api/grid/#allowresizing) as **false** to its columns.

In this example, we have disabled resize for **Ship City** column.

{% tab template="grid/row-template", es5Template="stackedresize" %}

```typescript
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, minWidth: 10 },
            {
                headerText: 'Order Details', columns: [
                    { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 125, minWidth: 10, format: 'yMd' },
                    { field: 'Freight', headerText: 'Freight($)', textAlign: 'Right', width: 100, format: 'C2', minWidth: 10 },
                ]
            },
            {
                headerText: 'Ship Details', columns: [
                    { field: 'ShipCity', headerText: 'Ship City', width: 100, minWidth: 10, allowResizing: false },
                    { field: 'ShipCountry', headerText: 'Ship Country', width: 120, minWidth: 10 },
                ]
            }
        ]
});
grid.appendTo('#Grid');

```

{% endtab %}

## Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed. You can autoFit a column by using the Column menu of the grid.

The following screenshot represents the column resizing in touch device.

![Touch interaction image](../images/column-resizing.jpg)

## Resizing events

During the resizing action, the grid component triggers the below three events.

1. The [`resizeStart`](../../api/grid/#resizestart) event triggers when column resize starts.
2. The [`resizing`](../../api/grid/#resizing) event triggers when column header element is dragged (moved) continuously..
3. The [`resizeStop`](../../api/grid/#resizestop) event triggers when column resize ends.

{% tab template="grid/row-template", es5Template="resizeevents" %}

```typescript
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    allowResizing: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width:150 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 150 }
    ],
    height: 315,
    resizeStart: () => {
        alert('resizeStart event is Triggered');
    },
    resizing: () => {
        alert('Resizing event is Triggered');
    },
    resizeStop: () => {
        alert('resizeStop event is Triggered');
    }
});
grid.appendTo('#Grid');

```

{% endtab %}