---
title: "Frozen"
component: "Grid"
description: "Learn how to freeze the grid columns at left or right side and how to freeze the grid rows at top."
---

# Frozen rows and columns

Frozen rows and columns provides an option to make rows and columns always visible in the top and left side of the grid while scrolling.

To use frozen rows and columns support, inject the `Freeze` module in the grid.

In this demo, the [`frozenColumns`](../api/grid/#frozencolumns) is set as '2' and the [`frozenRows`](../api/grid/#frozenrows)
is set as '3'. Hence, the left two columns and top three rows are frozen.

{% tab template="grid/scroller", sourceFiles="index.ts,index.html",es5Template="frozen" %}

```typescript
import { Grid, Freeze, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Freeze, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    allowSelection: false,
    enableHover: false,
    frozenRows: 3,
    frozenColumns: 2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 120 }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

> * Frozen rows and columns should not be set outside the grid view port.
> * Frozen Grid will support row and column virtualization feature, which helps to improve the Grid performance while loading a large dataset.

## Limitations of Frozen Grid

The following features are not supported in frozen rows and columns:

* Grouping
* Row Template
* Detail Template
* Hierarchy Grid

## Freeze particular columns

You can use [`isFrozen`](../api/grid/column/#isfrozen) property to freeze selected columns in grid.

In this demo, the columns with field name `OrderID` and `EmployeeID` is frozen using
the `isFrozen` property.

{% tab template="grid/scroller", sourceFiles="index.ts,index.html",es5Template="is-frozen" %}

```typescript

import { Grid, Freeze, Selection } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Freeze, Selection);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    allowSelection: false,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isFrozen: true },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120, isFrozen: true },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 150 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 120 }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

> * [`isFrozen`](../api/grid/column/#isfrozen) is not compatible with the Freeze direction feature.

## Freeze Direction

You can freeze the Grid columns on the left or right side by using the [`column.freeze`](../api/grid/column/#freeze) property and the remaining columns will be movable. The grid will automatically move the columns to the left or right position based on the [`column.freeze`](../api/grid/column/#freeze) value.

Types of the [`column.freeze`](../api/grid/column/#freeze) directions:

* **`Left`**: Allows you to freeze the columns at the left.
* **`Right`**: Allows you to freeze the columns at the right.

In this demo, the **ShipCountry** column is frozen at the left and the **CustomerID** column is frozen at the right side of the content table.

{% tab template="grid/scroller", sourceFiles="index.ts,index.html",es5Template="column-level-frozen" %}

```typescript

import { Grid, Freeze } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Freeze);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    enableHover: false,
    frozenRows: 2,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'Freight', headerText: 'Freight', format: 'C2', width: 120 }
        { field: 'CustomerID', headerText: 'Customer ID', width: 150, freeze: 'Right' },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, freeze: 'Left' }
    ]
});
grid.appendTo('#Grid');

```

{% endtab %}

> * Freeze Direction is not compatible with the [`isFrozen`](../api/grid/column/#isfrozen) and [`frozenColumns`](../api/grid/#frozencolumns) properties.

## Limitations of Freeze Direction

This feature has the below limitations, along with the above mentioned Frozen Grid limitations.

* Column virtualization
* Infinite scroll cache mode
* Freeze direction in the stacked header is not compatible with column reordering.

## Add validation rule for frozen Grid

In a frozen column enabled Grid, Grid content will be separated into frozen and movable parts. The following code can be used to dynamically add validation to input fields that are placed in the movable part. In the [actionComplete](../api/grid/#actioncomplete) event args, you can find the movableform instance as an argument. Here, you can add validation rules dynamically.

```typescript
  actionComplete: (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 }); // Here, 'Freight' is the column name.
        }
    }

```

Validation rules for the 'EmployeeID' and 'Freight' columns can be added in the sample below.

{% tab template="grid/scroller", sourceFiles="index.ts,index.html",es5Template="validation-rule" %}

```typescript

import { Grid, Freeze, Selection, Edit, Toolbar, DialogEditEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Freeze, Selection, Edit, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    height: 315,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
    },
    allowSelection: false,
    enableHover: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 120,
          isFrozen: true },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120,
        validationRules: { required: true }},
        { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 170 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150, isFrozen: true },
        { field: 'Freight', headerText: 'Freight', width: 120, validationRules: { required: true } }
    ],
    actionComplete: (args: DialogEditEventArgs) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
        }
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

> This is applicable when a frozen column is enabled and the edit mode is set as "**Normal**" in the Grid.