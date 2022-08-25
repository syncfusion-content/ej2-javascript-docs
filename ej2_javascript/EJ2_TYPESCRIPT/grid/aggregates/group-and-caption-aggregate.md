# Group and Caption Aggregate

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](../../api/grid/aggregateColumn/#groupfootertemplate) is provided, the aggregate values are displayed in the group footer cells; and if [`groupCaptionTemplate`](../../api/grid/aggregateColumn/#groupcaptiontemplate)
 is provided, aggregate values are displayed in the group caption cells.

{% tab template="grid/aggregates",es5Template="group" %}

```typescript
import { Grid, Group, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Aggregate);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 290,
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            format: 'C2',
            groupFooterTemplate: 'Sum: ${Sum}'
        }]
    },
    {
        columns: [{
            type: 'Max',
            field: 'Freight',
            format: 'C2',
            groupCaptionTemplate: 'Max: ${Max}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/grid/aggregateColumn/#type)
name.