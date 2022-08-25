# Detail Template

The detail template provides additional information about a particular row by expanding or collapsing detail content. The [`detailTemplate`](../../api/grid/#detailtemplate) property accepts either
the [template string](../../common/template-engine) or HTML element ID.

To use detail template, inject the [`DetailRow`](../../api/grid/detailRow)) module in the grid.

{% tab template="grid/detail-template", sourceFiles="index.ts,index.html,index.css",es5Template="detail" %}

```typescript
import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(DetailRow);

let grid: Grid = new Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Rendering custom component

To render the custom component inside the detail row, define the template in the [`detailTemplate`](../../api/grid/#detailtemplate) and render the
component in the [`detailDataBound`](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

For example, to render grid inside the detail row, place an HTML div element as the [`detailTemplate`](../../api/grid/#detailtemplate) and render the DIV element as grid component in the [`detailDataBound`](../../api/grid/#detaildatabound-emittypedetaildataboundeventargs) event.

{% tab template="grid/detail-template-childgrid", sourceFiles="index.ts,index.html",es5Template="custom" %}

```typescript
import { Grid, DetailRow, DetailDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { employeeData, data } from './datasource.ts';

Grid.Inject(DetailRow);

let grid: Grid = new Grid({
    dataSource: employeeData.slice(2, 5),
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    detailDataBound: (e: DetailDataBoundEventArgs) => {
        let detail = new Grid({
            dataSource: data.filter((item: Object) => item['EmployeeID'] === e.data['EmployeeID']).slice(0, 3),
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 110 },
                { field: 'CustomerID', headerText: 'Customer Name', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
        detail.appendTo(<HTMLElement>e.detailElement.querySelector('.custom-grid'));
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

## Expand by external button

By default, detail rows render in collapsed state. You can expand a detail row by invoking the [`expand`](../../api/grid/detailRow/#expand) method using the external button.

{% tab template="grid/detail-template-method", sourceFiles="index.ts,index.html,index.css", es5Template="expand" %}

```typescript
import { Grid, DetailRow } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { employeeData } from './datasource.ts';

Grid.Inject(DetailRow);

let expandBtn: Button = new Button();
expandBtn.appendTo('#expand');

let grid: Grid = new Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 140 },
        { field: 'LastName', headerText: 'Last Name', width: 140 },
        { field: 'Title', headerText: 'Title', width: 150 },
        { field: 'Country', headerText: 'Country', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

document.getElementById('expand').addEventListener('click', () => {
    let inputElem: HTMLInputElement = (document.getElementsByClassName('rowindex')[0] as HTMLInputElement);
    let rowIndex: number = parseInt(inputElem.value, 10);
    grid.detailRowModule.expand(rowIndex);
});

```

{% endtab %}

> * You can expand all the rows by using [`expandAll`](../../api/grid/detailRow/#expandall) method.
> * If you want to expand all the rows at initial Grid rendering, then use [`expandAll`](../../api/grid/detailRow/#expandall) method in [`dataBound`](../../api/grid/#databound) event of the Grid.