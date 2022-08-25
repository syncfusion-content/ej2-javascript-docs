# Remote Data

To bind remote data to grid component, assign service data as an instance of [`DataManager`](../../data) to the [`dataSource`](../../api/grid/#datasource) property. To interact with remote data source,  provide the endpoint **url**.

{% tab template="grid/grid", es5Template="remotedata" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
    adaptor: new ODataAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
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

> By default, [`DataManager`](../../data) uses **ODataAdaptor** for remote data-binding.

## OData adaptor - Binding OData service

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tab template="grid/grid", es5Template="bindodata" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
    adaptor: new ODataAdaptor,
    crossDomain: true
});

let grid: Grid = new Grid({
    dataSource: data,
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

## OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the [`DataManager`](../../data) can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the **ODataV4Adaptor**.

{% tab template="grid/grid", es5Template="v4service" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7',
    adaptor: new ODataV4Adaptor
});

let grid: Grid = new Grid({
    dataSource: data,
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

## Web API adaptor

You can use **WebApiAdaptor** to bind grid with Web API created using OData endpoint.

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: '/api/OrderAPI',
    adaptor: new WebApiAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

```

The response object should contain properties, **Items** and **Count**, whose values are a collection of entities and total count of the entities, respectively.

The sample response object should look like this:

```json
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Remote save adaptor

You may need to perform all Grid Actions in client-side except the CRUD operations, that should be interacted with server-side to persist data. It can be achieved in Grid by using **RemoteSaveAdaptor**.

Datasource must be set to **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to server-side using **updateUrl**, **insertUrl**, **removeUrl**, **batchUrl**, **crudUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Grid.

```typescript
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, RemoteSaveAdaptor } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Edit, Toolbar);

let dataSource: DataManager = new DataManager({
    json: data,
    adaptor: new RemoteSaveAdaptor,
    insertUrl: '/Home/Insert',
    updateUrl: '/Home/Update',
    removeUrl: '/Home/Delete'
});

let grid: Grid = new Grid({
    dataSource: dataSource,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    columns: [
                { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

```

The following code example describes the CRUD operations handled at server-side.

```json
    public ActionResult Update(OrdersDetails value)
    {
        ...
        return Json(value);
    }
    public ActionResult Insert(OrdersDetails value)
    {
        ...
       return Json(value);
    }
    public ActionResult Delete(int key)
    {
        ...
        return Json(data);
    }
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates custom adaptor approach and how to add a serial number for the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tab template="grid/grid", es5Template="customadopter" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class SerialNoAdaptor extends ODataAdaptor {
    processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: {result: Object[], count: number} = super.processResponse.apply(this, arguments);
        // adding serial number
        original.result.forEach((item: Object) => item['Sno'] = ++i);
        return { result: original.result, count: original.count };
    }
}

let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
    adaptor: new SerialNoAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'Sno', width: 120, headerText: 'SNO', textAlign: 'Right' },
        { field: 'CustomerID', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ]
});

grid.appendTo('#Grid');

```

{% endtab %}

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid postback for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the **offline** property of [`DataManager`](../../data).

{% tab template="grid/grid", es5Template="offline" %}

```typescript
import { Grid, Page, Sort, Group } from '@syncfusion/ej2-grids';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

Grid.Inject(Page, Sort, Group);

let data: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/',
    adaptor: new ODataAdaptor,
    offline: true
});

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
                { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
                { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' }
    ],
    allowPaging: true,
    pageSettings: { pageSize: 7 },
    allowSorting: true,
    allowGrouping: true
});

grid.appendTo('#Grid');

```

{% endtab %}