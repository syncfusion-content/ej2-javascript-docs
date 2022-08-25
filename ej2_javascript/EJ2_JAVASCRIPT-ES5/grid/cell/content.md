# Displaying the HTML content

The HTML tags can be displayed in the Grid header and content by enabling the [`disableHtmlEncode`](../../api/grid/column/#disablehtmlencode) property.

{% tab template="grid/cell-html", sourceFiles="index.ts,index.html,datasource.ts",es5Template="htmlcontent" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: '<span> Order ID </span>', disableHtmlEncode: true, textAlign: 'Right', width: 140 },
        { field: 'CustomerID', headerText: '<span> Customer ID </span>', disableHtmlEncode: false, width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}