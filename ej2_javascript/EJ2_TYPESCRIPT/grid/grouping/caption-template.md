# Caption Template

You can customize the group caption by using the [`groupSettings.captionTemplate`](../../api/grid/column/#captionTemplate) property.

{% tab template="grid/captiontemplate", sourceFiles="index.ts,index.html",es5Template="template" %}

```typescript
import { Grid, Group } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(Group);

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowGrouping: true,
    groupSettings: { captionTemplate: '#captiontemplate', columns: ['EmployeeID'] },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID' },
        { field: 'CustomerID', headerText: 'Customer ID' },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Adding custom text in group caption

You can customize the group caption text by using the [`groupSettings.captionTemplate`](../../api/grid/column/#captionTemplate) property.

{% tab template="grid/customText-captiontemplate", sourceFiles="index.ts,index.html",es5Template="template" %}

```typescript
import { Grid, Group } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

Grid.Inject(Group);
let grid: Grid = new Grid({
    dataSource: employeeData,
    allowGrouping: true,
    groupSettings: { captionTemplate: '#captiontemplate', columns: ['EmployeeID'] },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID' },
        { field: 'CustomerID', headerText: 'Customer ID' },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Render custom component in group caption

We can render custom components in the group caption by using the [`groupSettings.captionTemplate`](../../api/grid/column/#captionTemplate) property.

In the below demo, we have rendered the EJ2 [`ButtonComponent`](../../button/getting-started/) in the group caption.

{% tab template="grid/customComponent-captiontemplate", sourceFiles="index.ts,index.html",es5Template="template" %}

```typescript
import { Grid, Group, Page } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Group,Page);
    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true,
            dataBound: ()=> {
                let groupCations: HTMLCollection = document.getElementsByClassName('groupbutton');
                for(var i=0; i<groupCations.length; i++) {
                     var button = new Button({
                        isPrimary: true
                     });
                     button.appendTo(groupCations[i] as HTMLElement);
                }
            },
            height: 315
            allowGrouping: true,
            groupSettings: {columns: ["ShipCountry"], captionTemplate: "#captiontemplate"},
            columns: [
                { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
                { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
                { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
                { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
                { field: 'ShippedDate', headerText: 'Shipped Date', width: 140, format: 'yMd', textAlign: 'Right' },
                { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
            ]
        });
    grid.appendTo('#Grid');

```

{% endtab %}