---
title: "Row"
component: "Grid"
description: "Documentation for row templates (custom row content), detail templates, and DataGrid row styles."
---

# Row

The row represents record details fetched from data source.

## Row customization

### Using event

You can customize the appearance of a row by using the [`rowDataBound`](../../api/grid/#rowdatabound) event.
The [`rowDataBound`](../../api/grid/#rowdatabound) event triggers for every row. In the event handler, you can get the
[`RowDataBoundEventArgs`](../../api/grid/rowDataBoundEventArgs) that contains details of the row.

{% tab template="grid/custom-row", sourceFiles="index.ts,index.css,index.html",es5Template="custom" %}

```typescript
import { Grid, RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2' },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    rowDataBound: rowBound,
    height: 280
});
grid.appendTo('#Grid');

function rowBound(args: RowDataBoundEventArgs) {
    if (args.data['Freight'] < 30) {
        args.row.classList.add('below-30');
    } else if (args.data['Freight'] < 80) {
        args.row.classList.add('below-80');
    } else {
        args.row.classList.add('above-80');
    }
}

```

{% endtab %}

### Using CSS customize alternate rows

 You can change the grid's alternative rows' background color by overriding the **.e-altrow** class.

```css
.e-grid .e-altrow {
    background-color: #fafafa;
}
```

Please refer to the following example.

{% tab template="grid/how-to-alt-row", isDefaultActive=true,es5Template="altrow" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data.slice(0, 8),
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');


```

{% endtab %}

### See Also

* [How to get Data table row value on onclick event using JavaScript?](https://www.syncfusion.com/kb/11797/how-to-get-data-table-row-value-on-onclick-event-using-javascript)
* [How to maintain selected rows after adding new record](https://www.syncfusion.com/kb/11691/how-to-maintain-selected-rows-after-adding-new-record)
* [How to select the specific record in the grid using its primary key value](https://www.syncfusion.com/kb/11399/how-to-select-the-specific-record-in-the-grid-using-its-primary-key-value)
* [How to achieve drag and drop the rows in Grid with custom data binding](https://www.syncfusion.com/kb/11325/how-to-achieve-drag-and-drop-the-rows-in-grid-with-custom-data-binding)
* [How to get selected records on custom toolbar click](https://www.syncfusion.com/kb/11296/how-to-get-selected-records-on-custom-toolbar-click)