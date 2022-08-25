# Column Template

## Render image in a column

The column [`template`](../../api/grid/column/#template) has options to display custom element instead of a field value in the column.

{% tab template="grid/column-template", sourceFiles="index.ts,index.html", es5Template="template" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#template', width: 150
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 125 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}
> Grid actions such as editing, grouping, filtering and sorting etc. will depend upon the column [`field`](../../api/grid/column/#field). If the [`field`](../../api/grid/column/#field) is not specified in the
template column, the grid actions cannot be performed.

## Render other components in a column

You can render any component in a grid column using the [`template`](../../api/grid/column/#template) property.

To render other components in the grid, ensure the following steps:

**Step 1**:

Initialize the column template for your custom component.

```typescript
template:`<div>
            <select class="e-control e-dropdownlist">
                <option value="1" selected="selected">Order Placed</option>
                <option value="2">Processing</option>
                <option value="3">Delivered</option>
            </select>
        </div>`

```

**Step 2**:

Using the [`queryCellInfo`](../../api/grid/#querycellinfo) event, you can render the DropDown component with the following code.

```typescript
    function dropdown(args: QueryCellInfoEventArgs) {
        let ele=args.cell.querySelector('select');
        let drop = new DropDownList({popupHeight: 150, popupWidth: 150});
        drop.appendTo(ele);
    }

```

{% tab template="grid/column-sync-comp",es5Template="othercomp" %}

```typescript
import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        {
            headerText: 'Order Status',
            template:
            `<div>
                <select class="e-control e-dropdownlist">
                    <option value="1" selected="selected">Order Placed</option>
                    <option value="2">Processing</option>
                    <option value="3">Delivered</option>
                </select>
            </div>`, width: 140
        },
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd' },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315,
    queryCellInfo: dropdown
});
grid.appendTo('#Grid');

function dropdown(args: QueryCellInfoEventArgs): void {
    let ele: HTMLSelectElement = args.cell.querySelector('select');
    let drop: DropDownList = new DropDownList({ popupHeight: 150, popupWidth: 150 });
    drop.appendTo(ele);
}

```

{% endtab %}

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Discontinued** field value.

```html
  <script id="template" type="text/x-template">
            <div class="template_checkbox">
                ${if(Discontinued)}
                <input type="checkbox" checked> ${else}
                <input type="checkbox"> ${/if}
            </div>
        </script>
```

{% tab template="grid/condition-inside-template", sourceFiles="index.ts,index.html", es5Template="condition-template" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { productData } from './datasource.ts';

let grid: Grid = new Grid({
        dataSource: productData,
        columns: [
            {
                headerText: 'Discontinued', textAlign: 'Center',
                template: '#template', width: 120
            },
            { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 80 },
            { field: 'ProductName', headerText: 'Name', width: 160 },
            { field: 'SupplierID', headerText: 'SupplierID', width: 80 },
            { field: 'UnitsInStock', headerText: 'Stock', width: 80, textAlign: 'Right' }
        ],
        height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% tab template="grid/row-object", sourceFiles="index.ts,index.html", es5Template="column-template" %}

```typescript
import { Grid, RecordClickEventArgs } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';
import { closest } from '@syncfusion/ej2-base';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Data', textAlign: 'Right',
            template: '#template', width: 150, isPrimaryKey: true
        },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 130 },
        { field: 'FirstName', headerText: 'Name', width: 120 },
        { field: 'Title', headerText: 'Title', width: 170 }
    ],
    height: 315,
    recordClick: (args: RecordClickEventArgs) => {
        if (args.target.classList.contains('empData')) {
            var rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
});
grid.appendTo('#Grid');

```

{% endtab %}