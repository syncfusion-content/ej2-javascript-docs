# Footer Aggregate

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](../../api/grid/aggregateColumn/#footertemplate) property to render the aggregate value in footer cells.

{% tab template="grid/aggregates", es5Template="footer" %}

```typescript
import { Grid, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 210,
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            footerTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Max',
            field: 'Freight',
            footerTemplate: 'Max: ${Max}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumn/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](../../api/grid/aggregateColumn/#format) property.

{% tab template="grid/aggregates",es5Template="format" %}

```typescript
import { Grid, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 230,
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Max',
            field: 'Freight',
            format: 'C2',
            footerTemplate: 'Max: ${Max}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}