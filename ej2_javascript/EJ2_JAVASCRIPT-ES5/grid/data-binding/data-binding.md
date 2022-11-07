---
title: "Data Binding"
component: "Grid"
description: "Learn how to bind local and remote data in the Essential JS 2 DataGrid control."
---

# Data Binding

The Grid uses [`DataManager`](../../data), which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](../../api/grid/#datasource) property can be assigned either with the instance of [`DataManager`](../../data) or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

## Sending additional parameters to the server

To add a custom parameter to the data request, use the **addParams** method of **Query** class. Assign the **Query** object with additional parameters to the grid [`query`](../../api/grid/#query) property.

{% tab template="grid/grid", es5Template="additional" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
    adaptor: new ODataAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    query: new Query().addParams('ej2grid', 'true'),
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

```

{% endtab %}

> The parameters added using the [`query`](../../api/grid/#query) property will be sent along with the data request for every grid action.

## Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details
in client-side using the [`actionFailure`](../../api/grid/#actionfailure) event.

The argument passed to the [`actionFailure`](../../api/grid/#actionfailure) event contains the error details returned from the server.

{% tab template="grid/grid", es5Template="httperror" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
});

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    actionFailure: (e) => {
       let span: HTMLElement = document.createElement('span');
       grid.element.parentNode.insertBefore(span, grid.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
});

grid.appendTo('#Grid');

```

{% endtab %}

> The [`actionFailure`](../../api/grid/#actionfailure) event will be triggered not only for the server errors, but
also when there is an exception while processing the grid actions.

## Binding with ajax

You can use Grid [`dataSource`](../../api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [`dataSource`](../../api/grid/#datasource) property by using **onSuccess** event of the ajax.

```typescript
import { Grid, Page } from '@syncfusion/ej2-grids';
import { Ajax } from '@syncfusion/ej2-base';

Grid.Inject(Page);
let grid: Grid = new Grid({
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 120 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', textAlign: 'Right', width: 120 }
    ]
});
grid.appendTo('#Grid');

let button = document.getElementById('btn');
button.addEventListener("click", function(e){
    let ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = function (data: string) {
        grid.dataSource = JSON.parse(data);
    };
});
```

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.

## See Also

* [How to bind SQL Server data in TypeScript DataGrid using SqlClient data provider](https://www.syncfusion.com/kb/11452/how-to-bind-sql-server-data-in-typescript-datagrid-using-sqlclient-data-provider)