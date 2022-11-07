# AutoFit specific columns

The [`autoFitColumns`](../../api/grid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method in [`dataBound`](../../api/grid/#dataBound) event.

To use the [`autoFitColumns`](../../api/grid/#autofitcolumns) method, inject the **Resize** module in the grid.

{% tab template="grid/autofit-columns", es5Template="autofit" %}

```typescript
import { Grid, Resize } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Resize);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 140 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 150 }
    ],
    dataBound: () => grid.autoFitColumns(['ShipName', 'ShipAddress']),
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

> You can autofit all the columns by invoking the [`autoFitColumns`](../../api/grid/#autofitcolumns) method without column names.