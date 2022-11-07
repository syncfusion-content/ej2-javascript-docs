---
title: "Columns"
component: "Grid"
description: "Documentation on column reordering, resizing, header templates (custom header content), and column templates (custom cell content) in the Essential JS 2 DataGrid control."
---

# Columns

The column definitions are used as the [`dataSource`](../../api/grid/#datasource) schema in the Grid. This plays a vital role in rendering column values in the required format.
The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions. The [`field`](../../api/grid/column/#field) property of the [`columns`](../../api/grid/column)
is necessary to map the data source values in Grid columns.

> 1. If the column [`field`](../../api/grid/column/#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](../../api/grid/column/#field) name contains “dot” operator, it is considered as complex binding.

## Column types

Column type can be specified using the [`columns.type`](../../api/grid/column/#type) property. It specifies the type of data the column binds.

If the [`format`](../api/grid/column/#format)  is defined for a column, the column uses [`type`](../../api/grid/column/#type) to select the appropriate format option ([number](../../common/internationalization/#number-formatting)
 or [date](../../common/internationalization/#manipulating-datetime)).

Grid column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the [`type`](../../api/grid/column/#type) is not defined, it will be determined from the first record of the [`dataSource`](../../api/grid/#datasource).
> Incase if the first record of the [`dataSource`](../../api/grid/#datasource) is null/blank value for a column then it is necessary to define the [`type`](../../api/grid/column/#type) for that column.

## ValueAccessor

The [`valueAccessor`](../../api/grid/column/#valueaccessor) is used to access/manipulate the value of display data. You can achieve custom value formatting by using the [`valueAccessor`](../../api/grid/column/#valueaccessor).

{% tab template="grid/value-accessor", sourceFiles="index.ts,index.html,datasource.ts", es5Template="value" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', width: 100, valueAccessor: currencyFormatter },
        { field: 'ShipName', headerText: 'Ship Name', width: 180, valueAccessor: valueAccess }
    ],
    height: 315
});
grid.appendTo('#Grid');

function currencyFormatter(field: string, data: Object, column: Object): string {
    return '€' + data['Freight'];
}

function valueAccess(field: string, data: Object, column: Object): string {
    return data[field] + '-' + data['ShipRegion'];
}

```

{% endtab %}

### Display array type columns

You can bind an array of objects in a column by using the [`valueAccessor`](../../api/grid/column/#valueaccessor) property.
In this example, the name field has an array of two objects, FirstName and LastName. These two objects are joined and bound to a column using the
[`valueAccessor`](../../api/grid/column/#valueaccessor).
{% tab template="grid/array-of-string", sourceFiles="index.ts,index.html,datasource.ts", es5Template="array"%}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { stringData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: stringData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Name', headerText: 'Full Name', width: 120, valueAccessor: valueAccess },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

function valueAccess(field: string, data: Object, column: Object): string {
    return data[field].map(function (s: {LastName: string, FirstName: string}): string {
        return s.LastName || s.FirstName }).join(' ');
}

```

{% endtab %}

### Expression column

You can achieve the expression column by using the [`valueAccessor`](../../api/grid/column/#valueaccessor) property.

{% tab template="grid/expression", es5Template="expression" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { foodInformation } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: foodInformation,
    columns: [
        { field: 'FoodName', headerText: 'FoodName', width: 120 },
        { field: 'Protein', headerText: 'Protein', textAlign: 'Right', width: 100 },
        { field: 'Fat', headerText: 'Fat', textAlign: 'Right', width: 100 },
        { field: 'Carbohydrate', headerText: 'Carbohydrate', textAlign: 'Right', width: 130 },
        { headerText: 'Calories In Take', valueAccessor: totalCalories, textAlign: 'Right', width: 150 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function totalCalories(field: string, data: { Protein: number, Fat: number, Carbohydrate: number }, column: Object): number {
    return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
};

```

{% endtab %}

## Format

To format cell values based on specific culture, use the [`columns.format`](../../api/grid/column/#format) property. The grid uses [Internalization](../common/internationalization/) library to format [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#date-formatting)
values.

{% tab template="grid/grid", es5Template="format" %}

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

> By default, the [`number`](../../common/internationalization/#number-formatting) and [`date`](../../common/internationalization/#date-formatting) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained [`here`](../../common/internationalization/)

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../../common/internationalization/#number-formatting).

### Date formatting

You can format date values either using built-in date format string or custom format string.

For built-in date format you can specify [`columns.format`](../../api/grid/column/#format) property as string   (Example: **yMd**). Please refer to the link to know more about [`Date formatting`](../../common/internationalization/#date-formatting).

You can also use custom format string to format the date values. Some of the custom formats and the formatted date values are given in the below table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/1996
{ type:'date', format:'dd.MM.yyyy' } | 04.07.1996
{ type:'date', skeleton:'short' } | 7/4/96
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/1996 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/1996 12:00:00 AM

{% tab template="grid/pagerdropdown",es5Template="dateformat" %}

```typescript
import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 120 },
        { field: 'OrderDate',format: {type:'date', format:'dd/MM/yyyy'}, headerText:'Order Date', width:150},
        { field: 'OrderDate', format:{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }, headerText: 'Ship Date', width: 180 }
    ],
});
grid.appendTo('#Grid');

```

{% endtab %}

## Render boolean values as checkbox

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](../../api/grid/column/#displayascheckbox) property as **true**.

{% tab template="grid/grid", es5Template="displayascheckbox" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid(
    {
        dataSource: data.slice(0,10),
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            {
                field: 'CustomerID', headerText: 'Customer ID', width: 150
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: 180 },
            { field: 'Verified', headerText: 'Verified', width: 150, displayAsCheckBox: true }
        ],
        height: 315
    });
grid.appendTo('#Grid');

```

{% endtab %}

## Visibility

You can hide any particular column in Grid before rendering by defining [`visible`](../../api/grid/column/#visible) property as false. In the below sample **ShipCity** column is defined as visible false.

{% tab template="grid/grid", es5Template="visibility" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right',  width: 120, format: 'C' },
        { field: 'ShipCity', headerText: 'Ship City', width: 120 ,visible: false},
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 315
});

grid.appendTo('#Grid');

```

{% endtab %}

## Lock columns

You can lock columns by using [`column.lockColumn`](../../api/grid/column/#lockColumn) property. The locked columns will be moved to the first position. Also you can’t reorder its position.

In the below example, **Ship City** column is locked and its reordering functionality is disabled.

{% tab template="grid/lock-column", sourceFiles="index.ts,lock.css", es5Template="lockcolumn" %}

```typescript
import { Grid, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowReordering: true,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City',width: 100, lockColumn: true, customAttributes: {class: 'customcss'}},
        { field: 'ShipName', headerText: 'Ship Name', width: 100 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal code', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

## Controlling Grid actions

You can enable or disable grid action for a particular column by setting the [`allowFiltering`](../../api/grid/#allowfiltering),
[`allowGrouping`](../../api/grid/#allowgrouping), [`allowSorting`](../../api/grid/#allowsorting), [`allowReordering`](../../api/grid/#allowreordering), and [`allowEditing`](../../api/grid/#editsettings) properties.

{% tab template="grid/grouping", es5Template="control" %}

```typescript
import { Grid, Group, Sort, Filter, Edit, Reorder } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Group, Sort, Filter, Edit, Reorder);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowGrouping: true,
    allowSorting: true,
    allowReordering: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', allowGrouping: false, textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', allowFiltering: false, allowReordering: false, allowEditing: false, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', allowSorting: false, width: 100 }
    ],
    height: 220
});
grid.appendTo('#Grid');


```

{% endtab %}

## Show or hide columns by external button

You can show or hide grid columns dynamically using external buttons by invoking the [`showColumns`](../../api/grid/#showcolumns) or [`hideColumns`](../../api/grid/#hidecolumns) method.

{% tab template="grid/show-hide-columns", sourceFiles="index.ts,index.html", es5Template="showhide"%}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 280
});
grid.appendTo('#Grid');

let show: Button = new Button({ cssClass: 'e-flat' }, '#show');
let hide: Button = new Button({ cssClass: 'e-flat' }, '#hide');

document.getElementById('show').onclick = () => {
    grid.showColumns(['Customer ID', 'Ship Name']); //show by HeaderText
};

document.getElementById('hide').onclick = () => {
    grid.hideColumns(['Customer ID', 'Ship Name']); //hide by HeaderText
};

```

{% endtab %}

## Customize column styles

You can customize the appearance of the header and content of a particular column using the [`customAttributes`](../../api/grid/column/#customattributes) property.

To customize the grid column, follow the given steps:

**Step 1**:

Create a CSS class with custom style to override the default style for rowcell and headercell.

```css
.e-grid .e-rowcell.customcss{
    background-color: #ecedee;
    color: 'red';
    font-family: 'Bell MT';
    font-size: 20px;
}

.e-grid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: 20px;
}

```

**Step 2**:

Add the custom CSS class to the specified column by using the [`customAttributes`](../../api/grid/column/#customattributes) property.

```typescript
{ field: 'ShipCity', headerText: 'Ship City', customAttributes: {class: 'customcss'}, width: 100 },

```

{% tab template="grid/custom-column", sourceFiles="index.ts,index.css",es5Template="styles" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    enableHover: false,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', customAttributes: { class: 'customcss' }, width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');


```

{% endtab %}

## Display custom tooltip for columns

To display a custom ToolTip ([`EJ2 Tooltip`](../../../tooltip/getting-started)), you can render the Grid control inside the Tooltip component and set the target as “.e-rowcell”. The tooltip is displayed when hovering the grid cells.

Change the tooltip content for the grid cells by using the following code in the [`beforeRender`](../../../api/tooltip/#beforerender) event.

```typescript
function beforeRender(args) {
  // event triggered before render the tooltip on target element.
  tooltip.content = args.target.closest("td").innerText;
}

```

{% tab template="grid/custom-tooltip",es5Template="tooltip" %}

```typescript
import { Grid, QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { Tooltip } from '@syncfusion/ej2-popups';

let tooltip: Tooltip = new Tooltip({
    target: ".e-rowcell", // set the target element to show the tooltip on hovering it
    beforeRender: beforeRender
  }, "#Tooltip");

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');

function beforeRender(args) {
  // event triggered before render the tooltip on target element.
  tooltip.content = args.target.closest("td").innerText;
}

```

{% endtab %}

## Align the text of Grid content and header

For aligning the text of Grid content and header part, kindly use [textAlign](../../api/grid/column/#textalign) and [headerTextAlign](../../api/grid/column/#headertextalign) properties.

Grid column supports the following alignments:
* Left
* Right
* Center
* Justify

{% tab template="grid/grid", es5Template="textAlign" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', type: 'number', textAlign: 'Right', headerTextAlign: 'Right', width: 120 },
                { field: 'CustomerID', headerText: 'Customer ID', type: 'string', textAlign: 'Left', headerTextAlign: 'Left', width: 90 },
                { field: 'OrderDate', headerText: 'Order Date', type: 'date', textAlign: 'Center', headerTextAlign: 'Center', format: 'yMd', width: 140 },
                { field: 'ShipCountry', headerText: 'Ship Country', type: 'string', textAlign: 'Justify', headerTextAlign: 'Justify', width: 120 }
    ],
    height: 315
});

grid.appendTo('#Grid');

```

{% endtab %}

## See Also

* [Group Column by Format](../grouping#group-by-format)
* [How to set complex column as Foreignkey column](../how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](../how-to/list-of-array-of-objects)
* [Compare columns effortlessly using column pinning feature in Grid](https://www.syncfusion.com/blogs/post/compare-columns-effortlessly-using-column-pinning-data-grid.aspx)
* [How to edit the column in Grid using the uploader control](https://www.syncfusion.com/kb/12693/how-to-edit-the-column-in-grid-using-the-uploader-control)
* [How to add the aggregate option functionalities in the column menu's feature](https://www.syncfusion.com/kb/12692/how-to-add-the-aggregate-option-functionalities-in-the-column-menus-feature)
* [How to render tooltip with custom content on Grid columns](https://www.syncfusion.com/kb/12227/how-to-render-tooltip-with-custom-content-on-grid-columns)
* [How to display the multiplication table of a number accepted from the user](https://www.syncfusion.com/kb/11809/how-to-display-the-multiplication-table-of-a-number-accepted-from-the-user)
* [How to drag and drop within grid and between grids](https://www.syncfusion.com/kb/11022/how-to-drag-and-drop-within-grid-and-between-grids)
* [How to format date values received in JSON data through ajax post](https://www.syncfusion.com/kb/10626/how-to-format-date-values-received-in-json-data-through-ajax-post)