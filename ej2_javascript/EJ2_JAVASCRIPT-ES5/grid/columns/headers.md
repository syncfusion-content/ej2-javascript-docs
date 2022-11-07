# Headers

## Header text

By default, column header title is displayed from column [`field`](../../api/grid/column/#field) value. To override the default header title, you have to define the [`headerText`](../../api/grid/column/#headertext) value.

{% tab template="grid/grid", es5Template="headertext" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');

```

{% endtab %}

> * If both the [`field`](../../api/grid/column/#field) and [`headerText`](../../api/grid/column/#headertext)
are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](../../api/grid/column/#headerTemplate) property. In this demo, the custom element is rendered for both EmployeeID and BirthDate column headers.

{% tab template="grid/headertemplate", sourceFiles="index.ts,index.html", es5Template="headertemplate" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { employeeData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: employeeData,
    columns: [
         { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right', headerTemplate: '#employeetemplate' },
                { field: 'FirstName', headerText: 'First Name', width: 140 },
                {
                    field: 'BirthDate', headerText: 'Birth Date', width: 130, format: 'yMd',
                    textAlign: 'Right', headerTemplate: '#datetemplate'
                },
                { field: 'City', width: 120 },
                { field: 'Country', headerText: 'Country', width: 140, format: 'yMd', textAlign: 'Right' },
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Change header text dynamically

You can change the column [`headerText`](../../api/grid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](../../api/grid/#getcolumnbyfield) method.
Then, change the header text value.

```typescript
let column = grid.getColumnByField("ShipCity"); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshHeader`](../../api/grid/#refreshheader) method.

```typescript
grid.refreshHeader();

```

{% tab template="grid/change-header-text", sourceFiles="index.ts,index.css,index.html",es5Template="dynamic" %}

```typescript
import { Grid, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let btn: Button = new Button({ cssClass: 'e-flat' }, '#change-text');

document.getElementById('change-text').addEventListener('click', () => { // changing the header text for ShipCity column.
    let column: Column = grid.getColumnByField("ShipCity"); // get the JSON object of the column corresponding to the field name.
    column.headerText = "Changed Text"; // assign a new header text to the column.
    grid.refreshHeader();
});

```

{% endtab %}

## Change the orientation of header text

You can change the orientation of the header text by using the [`customAttributes`](../../api/grid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a CSS class with orientation style for the grid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom CSS class to a particular column by using the [`customAttributes`](../../api/grid/column/#customattributes) property.

```typescript
    { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Center', customAttributes: {class: 'orientationcss'}, width: 80 },

```

**Step 3**:

Resize the header cell height by using the following code.

```typescript
function setHeaderHeight(args) {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% tab template="grid/orientation", sourceFiles="index.ts,index.css",es5Template="headertext" %}

```typescript
import { Grid, ActionEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', textAlign: 'Center', customAttributes: { class: 'orientationcss' }, width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    created: setHeaderHeight,
    height: 240
});
grid.appendTo('#Grid');

function setHeaderHeight(args: ActionEventArgs): void {
    let textWidth: number = document.querySelector(".orientationcss > div").scrollWidth; // obtain the width of the headerText content.
    let headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
        (<HTMLElement>headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}

```

{% endtab %}