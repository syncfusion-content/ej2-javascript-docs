---
title: "Cell"
component: "Grid"
description: "Learn how to customize the Essential JS 2 DataGrid cells with styling, text wrapping, adding custom attributes and tooltips."
---

# Cell

## Cell customization

The appearance of cells can be customized by using the [`queryCellInfo`](../../api/grid/#querycellinfo) event.
The [`queryCellInfo`](../../api/grid/#querycellinfo) event triggers for every cell. In that event handler, you can get
[`QueryCellInfoEventArgs`](../../api/grid/queryCellInfoEventArgs) that contains the details of the cell.

{% tab template="grid/custom-cell", sourceFiles="index.ts,index.html,index.css",es5Template="customcell" %}

```typescript
import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd'},
        { field: 'Freight', headerText: 'Freight', width: 100, format: 'C2'},
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315,
    queryCellInfo: customiseCell
});
grid.appendTo('#Grid');

function customiseCell(args: QueryCellInfoEventArgs) {
    if(args.column.field === 'Freight') {
        if (args.data['Freight'] < 30){
            args.cell.classList.add('below-30');
        } else if(args.data['Freight'] < 80 ) {
            args.cell.classList.add('below-80');
        } else {
            args.cell.classList.add('above-80');
        }
    }
}

```

{% endtab %}

## Custom attributes

You can customize the grid cells by adding a CSS class to the [`customAttribute`](../../api/grid/column#customattributes) property of the column.

```CSS
.e-attr {
    background: '#d7f0f4';
}
```

```typescript
{
    field: "ShipCity", headerText: "Ship City", customAttributes: {class: "e-attr"}, width: "120"
}
```

In the below example, we have customized the cells of **OrderID** and **ShipCity** columns.

{% tab template="grid/custom-attribute", es5Template="cellstyle" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', customAttributes: {class: "e-attr"}, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: "e-attr"}, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Grid lines

The [`gridLines`](../../api/grid/#gridlines) have option to display cell border and it can be defined by the
[`gridLines`](../../api/grid/#gridlines) property.

The available modes of grid lines are:

| Modes | Actions |
|-------|---------|
| Both | Displays both the horizontal and vertical grid lines.|
| None | No grid lines are displayed.|
| Horizontal | Displays the horizontal grid lines only.|
| Vertical | Displays the vertical grid lines only.|
| Default | Displays grid lines based on the theme.|

{% tab template="grid/row-template", es5Template="gridlines" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    gridLines: 'Both',
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

>By default, the grid renders with **Default** mode.

## See Also

* [How to get the clicked Grid cell details](https://www.syncfusion.com/kb/11537/how-to-get-the-clicked-grid-cell-details)
* [How to customize the Grid cell values while exporting](https://www.syncfusion.com/kb/11324/how-to-customize-the-grid-cell-values-while-exporting)