---
title: "State Persistence"
component: "Grid"
description: "Learn how to persist the DataGrid state and model in the browser’s local storage."
---

# State Persistence

State persistence refers to the Grid's state maintained in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.
State persistence stores grid’s model object in the local storage when the [enablePersistence](../../api/grid/#enablepersistence) is defined as true.

## Restore initial Grid state

When the [enablePersistence](../../api/grid/#enablepersistence) property is set to **true**, the Grid will keep its state even if the page is reloaded. In some cases, you may be required to retain the Grid in its initial state. The Grid will not retain its initial state now since the [`enablePersistence`](../../api/grid/#enablepersistence) property has been enabled.

You can achieve this by destroying the grid after disabling the `enablePersistence` property and clearing the local storage data, as shown in the sample below.

{% tab template="grid/initial-grid", es5Template="initialgrid" %}

```typescript

import { Grid, Filter, ActionEventArgs, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    allowFiltering: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('restore').onclick = () => {
    grid.enablePersistence = false;
    window.localStorage.setItem("gridGrid", "");
    grid.destroy();
    //reloads the page
    location.reload();
}

```

{% endtab %}

## Maintaining custom query in a persistent state

The grid does not maintain the query params after page load event when the [enablePersistence](../../api/grid/#enablepersistence) is set to true. This is because the grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [addParams](../../api/data/query/#addparams) method in the [actionBegin](../../api/grid/#actionbegin) event.

{% tab template="grid/grouping-event", es5Template="persistent" %}

```typescript
import { Grid, Filter, ActionEventArgs, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    enablePersistence: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    actionBegin: actionHandler,
    height: 230
});
grid.appendTo('#Grid');

function actionHandler(args: ActionEventArgs) {
    this.query.addParams('$filter', 'EmployeeID eq 1');
}

```

{% endtab %}

## Add a new column in persisted columns list

The Grid columns can be persisted when the [enablePersistence](../../api/grid/#enablepersistence) property is set to true. If you want to add the new columns with the existing persist state, you can use the Grid inbuilt method such as `column.push` and call the [refreshColumns()](../../api/grid/#refreshcolumns) method for UI changes. Please refer to the following sample for more information.

{% tab template="grid/add-column", es5Template="addcolumn" %}

```typescript

import { Grid, Page } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page);

let grid: Grid = new Grid({
    dataSource: data,
    enablePersistence: true,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 230
});
grid.appendTo('#Grid');

document.getElementById('add').onclick = () => {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 }
    grid.columns.push(obj as any); //you can add the columns by using the Grid columns method
    grid.refreshColumns();
};

```

{% endtab %}