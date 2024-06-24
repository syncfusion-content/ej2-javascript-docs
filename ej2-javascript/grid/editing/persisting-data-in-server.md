---
layout: post
title: Persisting data in server in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Persisting data in server in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Persisting data in server 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Persisting data in server in ##Platform_Name## Grid control

Edited data can be persisted in the database using the RESTful web services.

All the CRUD operations in the grid are done through [DataManager](../../data). The `DataManager` has an option to bind all the CRUD related data in server-side.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

In the below section, we have explained how to get the edited data details on the server-side using the [UrlAdaptor](../../data/adaptors/#url-adaptor).

## Using URL adaptor

You can use the [UrlAdaptor](../../data/adaptors/#url-adaptor) of [DataManager](../../data) when binding data source from remote data. In the initial load of grid, data are fetched from remote data and bound to the grid using **url** property of `DataManager`.

You can map The CRUD operation in grid can be mapped to server-side Controller actions using the properties **insertUrl**, **removeUrl**, **updateUrl**, **crudUrl** and **batchUrl**.

The following code example describes the above behavior.

{% if page.publishingplatform == "typescript" %}
 
```ts
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
Grid.Inject(Edit, Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    adaptor: new UrlAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 }},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```
 {% elsif page.publishingplatform == "javascript" %}
 
```js
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);

var data = new ej.data.DataManager({
    url: "Home/DataSource",
    updateUrl: "Home/Update",
    insertUrl: "Home/Insert",
    removeUrl: "Home/Delete",
    adaptor: new ej.data.UrlAdaptor
});

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 }},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');
``` 
{% endif %}

Also, when using the **UrlAdaptor**, you need to return the data as JSON from the controller action and the JSON object must contain a property as **result** with dataSource as its value and one more property **count** with the dataSource total records count as its value.

The following code example describes the above behavior.

```ts
public ActionResult DataSource(DataManager dm)
{
        IEnumerable DataSource = OrdersDetails.GetAllRecords();
        DataOperations operation = new DataOperations();
        int count = DataSource.Cast<OrdersDetails>().Count();
            if (dm.Skip != 0)
            {
                DataSource = operation.PerformSkip(DataSource, dm.Skip);   //Paging
            }
            if (dm.Take != 0)
            {
                DataSource = operation.PerformTake(DataSource, dm.Take);
            }
            return dm.RequiresCounts ? Json(new { result = DataSource, count = count }) : Json(DataSource);
}

```

### Insert record

Using the **insertUrl** property, you can specify the controller action mapping URL to perform insert operation on the server-side.

The following code example describes the above behavior.

```typescript
public ActionResult Insert([FromBody]CRUDModel<OrdersDetails> value)
{
    OrdersDetails.GetAllRecords().Insert(0, value.value);
    return Json(value.value);
}

```

The newly added record details are bound to the **value** parameter. Please refer to the following screenshot.

![Insert](../images/insert.jpg)

### Update record

Using the **updateUrl** property, the controller action mapping URL can be specified to perform save/update operation on the server-side.

The following code example describes the previous behavior.

```typescript
public ActionResult Update([FromBody]CRUDModel<OrdersDetails> value)
{
    var ord = value.value;
    OrdersDetails val = OrdersDetails.GetAllRecords().Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
    val.OrderID = ord.OrderID;
    val.EmployeeID = ord.EmployeeID;
    val.CustomerID = ord.CustomerID;
    val.Freight = ord.Freight;
    val.OrderDate = ord.OrderDate;
    val.ShipCity = ord.ShipCity;

    return Json(value.value);
}

```

The updated record details are bound to the **value** parameter. Please refer to the following screenshot.

![Update](../images/update.jpg)

### Delete record

Using the **removeUrl** property, the controller action mapping URL can be specified to perform delete operation on the server-side.

The following code example describes the previous behavior.

```typescript
public ActionResult Delete([FromBody]CRUDModel<OrdersDetails> value)
{
    OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == int.Parse(value.key.ToString())).FirstOrDefault());
    return Json(value);
}

```

The deleted record primary key value is bound to the **key** parameter. Please refer to the following screenshot.

![Delete](../images/delete.jpg)

### CRUD URL

Using the **crudUrl** property, the controller action mapping URL can be specified to perform all the CRUD operation at server-side using a single method instead of specifying separate controller action method for CRUD (insert, update and delete) operations.

The action parameter of **crudUrl** is used to get the corresponding CRUD action.

The following code example describes the above behavior.

{% if page.publishingplatform == "typescript" %}
 
```ts
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
Grid.Inject(Edit, Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    crudUrl: "Home/CrudUpdate",
    adaptor: new UrlAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 }},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```
 {% elsif page.publishingplatform == "javascript" %}
 
```js
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);

var data = new ej.data.DataManager({
    url: "Home/DataSource",
    crudUrl: "Home/CrudUpdate",
    adaptor: new ej.data.UrlAdaptor
});

var grid = new ej.grids.Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 }},
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');
``` 
{% endif %}

```typescript
public ActionResult CrudUpdate([FromBody]CRUDModel<OrdersDetails> value, string action)
{
    if (value.action == "update")
    {
        var ord = value.value;
        OrdersDetails val = OrdersDetails.GetAllRecords().Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
        val.OrderID = ord.OrderID;
        val.EmployeeID = ord.EmployeeID;
        val.CustomerID = ord.CustomerID;
        val.Freight = ord.Freight;
        val.OrderDate = ord.OrderDate;
        val.ShipCity = ord.ShipCity;
    }
    else if (value.action == "insert")
    {
        OrdersDetails.GetAllRecords().Insert(0, value.value);
    }
    else if (value.action == "remove")
    {
        OrdersDetails.GetAllRecords().Remove(OrdersDetails.GetAllRecords().Where(or => or.OrderID == int.Parse(value.key.ToString())).FirstOrDefault());
        return Json(value);
    }
    return Json(value.value);
}


```

Please refer to the following screenshot to know about the action parameter.

![CRUD update](../images/crudupdate.jpg)

> If you specify `insertUrl` along with `crudUrl`, then while adding `insertUrl` only will be invoked.

### Batch URL

The **batchUrl** property supports only for batch editing mode. You can specify the controller action mapping URL to perform batch operation on the server-side.

The following code example describes the above behavior.

{% if page.publishingplatform == "typescript" %}
 
```ts
import { Grid, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
Grid.Inject(Edit, Toolbar);

let data: DataManager = new DataManager({
    url: "Home/DataSource",
    batchUrl: "Home/BatchUpdate",
    adaptor: new UrlAdaptor
});

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');

```
 {% elsif page.publishingplatform == "javascript" %}
 
```js
ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit);

var data = new ej.data.DataManager({
    url: "Home/DataSource",
    batchUrl: "Home/BatchUpdate",
    adaptor: new ej.data.UrlAdaptor
});

var grid = new ej.grids.Grid({
      dataSource: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true, validationRules: { required: true } },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120, validationRules: { required: true, minLength: 3 } },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit', width: 120, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 }
    ],
    height: 265
});
grid.appendTo('#Grid');
``` 
{% endif %}

```typescript
public IActionResult BatchUpdate([FromBody]CRUDModel batchmodel)
{
    if (batchmodel.Changed != null)
    {
        for (var i = 0; i < batchmodel.Changed.Count(); i++)
        {
            var ord = batchmodel.Changed[i];
            Orders val = order.Where(or => or.OrderID == ord.OrderID).FirstOrDefault();
            val.OrderID = ord.OrderID;
            val.EmployeeID = ord.EmployeeID;
            val.CustomerID = ord.CustomerID;
            val.ShipCity = ord.ShipCity;
        }
    }
    if (batchmodel.Deleted != null)
    {
        for (var i = 0; i < batchmodel.Deleted.Count(); i++)
        {
            order.Remove(order.Where(or => or.OrderID == batchmodel.Deleted[i].OrderID).FirstOrDefault());
        }
    }
    if (batchmodel.Added != null)
    {
        for (var i = 0; i < batchmodel.Added.Count(); i++)
        {
            order.Insert(0, batchmodel.Added[i]);
        }
    }
    var data = order.ToList();
    return Json(data);
}

```

![Batch Update](../images/batch.jpg)