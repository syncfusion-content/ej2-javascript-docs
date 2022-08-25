# Reordering on Grouped Columns

Grid provides an option to interchange the position of the Grouped Columns by dragging and dropping the grouped headercells in the droparea. So, any new column entering into the droparea can also be dropped in any position.

To enable this feature, you have to set the [`groupSettings.allowReordering`](../../api/grid/groupSettings/#allowReordering) property as **true**.

{% tab template="grid/grouping-animation",es5Template="external" %}

```typescript
import { Grid, Group } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['ShipCity'], allowReordering: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 240
});
grid.appendTo('#Grid');

```

{% endtab %}