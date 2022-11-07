# Responsive Columns

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](../../api/grid/column/#hideatmedia).
The [`hideAtMedia`](../../api/grid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for **OrderID** column, [`hideAtMedia`](../../api/grid/column/#hideatmedia) property value is set as **(min-width: 700px)** so that **OrderID** column will gets hidden when the browser screen width is lessthan 700px.

{% tab template="grid/hide-media", sourceFiles="index.ts,index.html", es5Template="responsive" %}

```typescript
import { Grid, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        {
            field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right',
            hideAtMedia: '(min-width: 700px)'
        }, // column hides when browser screen width lessthan 700px;

        {
            field: 'CustomerID', headerText: 'Customer ID', width: 150,
            hideAtMedia: '(max-width: 500px)'
        }, // column shows when browser screen width lessthan or equalto 500px;

        {
            field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd',
            textAlign: 'Right', hideAtMedia: '(min-width:500px)'
        },// column hides when browser screensize lessthan 500px;

        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' } // it always shown

    ],
    height: 315
});

grid.appendTo('#Grid');

```

{% endtab %}