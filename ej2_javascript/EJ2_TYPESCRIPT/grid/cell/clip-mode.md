# Clip Mode

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](../../api/grid/column/#clipmode) property.

There are three types of [`clipMode`](../../api/grid/column/#clipmode). They are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

{% tab template="grid/clipmode", es5Template="clipmode" %}

```typescript
import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'RoolNo', headerText: 'Rool No', width: 100 },
        { field: 'Name', headerText: 'Name of the inventor', clipMode: 'Clip', width: 100 },
        { field: 'patentfamilies', headerText: 'No of patent families', clipMode: 'Ellipsis', width: 100 },
        { field: 'Country', headerText: 'Country', width: 80 },
        { field: 'mainfields', headerText: 'Main fields of Invention', clipMode: 'EllipsisWithTooltip', width: 100 },
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

>By default, [`columns.clipMode`](../../api/grid/column/#clipmode) value is **Ellipsis**.