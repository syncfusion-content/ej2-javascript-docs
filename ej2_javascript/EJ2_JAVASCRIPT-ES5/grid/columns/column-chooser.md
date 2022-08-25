# Column Chooser

The column chooser has options to show or hide columns dynamically. It can be enabled by defining the
[`showColumnChooser`](../../api/grid/#showcolumnchooser) as true.

To use the column chooser, inject the **ColumnChooser** module in the grid.

{% tab template="grid/columnchooser", es5Template="chooser" %}

```typescript
import { Grid, Selection, Toolbar, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Selection, Toolbar, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    showColumnChooser: true,
    toolbar: ['ColumnChooser'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }
    ],
    height: 235
});

grid.appendTo('#Grid');

```

{% endtab %}

> You can hide the column names in column chooser by defining the [`columns.showInColumnChooser`](../../api/grid/column/#showincolumnchooser) as false.

## Open column chooser by external button

The Column chooser can be displayed on a page through external button by invoking
the [`openColumnChooser`](../../api/grid/columnChooser) method with **X** and **Y** axis positions.

{% tab template="grid/columnchooser-method", sourceFiles="index.ts,index.html", es5Template="columnchooser"%}

```typescript
import { Grid, Selection, ColumnChooser } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

Grid.Inject(Selection, ColumnChooser);

let grid: Grid = new Grid({
    dataSource: data,
    showColumnChooser: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, showInColumnChooser: false },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 150 }

    ],
    height: 235
});

grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');

document.getElementById('show').onclick = () => {
    grid.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
};

```

{% endtab %}