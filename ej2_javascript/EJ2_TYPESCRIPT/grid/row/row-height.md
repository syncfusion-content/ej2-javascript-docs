# Row Height

You can customize the row height of grid rows through the [`rowHeight`](../../api/grid/#rowheight) property. The **rowHeight** property
is used to change the row height of entire grid rows.

In the below example, the **rowHeight** is set as '60px'.

{% tab template="grid/custom-row", sourceFiles="index.ts,index.css,index.html",es5Template="height" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data, RowDataBoundEventArgs } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data.slice(0, 8),
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    rowHeight: 60
});

grid.appendTo('#Grid');

```

{% endtab %}

## Customize row height for particular row

Grid row height for particular row can be customized using the [`rowDataBound`](../../api/grid/#rowdatabound)
event by setting the **rowHeight** in arguments for each row based on the requirement.

In the below example, the row height for the row with OrderID as '10249' is set as '90px' using the **rowDataBound** event.

{% tab template="grid/custom-row", sourceFiles="index.ts,index.css,index.html",es5Template="particular" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { Query, DataManager } from '@syncfusion/ej2-data';
import { data, RowDataBoundEventArgs } from './datasource.ts';

let gridData: Object = new DataManager(data).executeLocal(new Query().take(8));

let grid: Grid = new Grid({
    dataSource: gridData,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
            { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    rowDataBound: rowDataBound
});

function rowDataBound(args: RowDataBoundEventArgs) {
    if((args.data as OrderDetails).OrderID === 10249){
        args.rowHeight = 90;
    }
}

interface OrderDetails {
    OrderID ?: number;
}

grid.appendTo('#Grid');

```

{% endtab %}

> * In virtual scrolling mode, it is not applicable to set the **rowHeight** using the **rowDataBound** event.