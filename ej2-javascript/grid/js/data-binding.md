---
layout: post
title: Data binding in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Data binding in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in ##Platform_Name## Grid control

The Grid uses [`DataManager`](../data), which supports both RESTful JSON data services binding and local JavaScript object array binding. The [`dataSource`](../api/grid/#datasource) property can be assigned either with the instance of [`DataManager`](../data) or JavaScript object array collection.
It supports two kinds of data binding method:
* Local data
* Remote data

## Local Data

To bind local data to the grid, you can assign a JavaScript object array to the [`dataSource`](../api/grid/#datasource) property. The local data source can also be provided as an instance of the [`DataManager`](../data).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs120/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs120/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs120" %}

> By default, [`DataManager`](../data) uses **JsonAdaptor** for local data-binding.

## Remote data

To bind remote data to grid component, assign service data as an instance of [`DataManager`](../data) to the [`dataSource`](../api/grid/#datasource) property. To interact with remote data source,  provide the endpoint **url**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs121/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs121/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs121" %}

> By default, [`DataManager`](../data) uses **ODataAdaptor** for remote data-binding.

### Binding with OData services

[`OData`](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from OData service using the DataManager. Refer to the following code example for remote Data binding using OData service.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs122/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs122/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs122" %}

### Binding with OData v4 services

The ODataV4 is an improved version of OData protocols, and the [`DataManager`](../data) can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [`odata documentation`](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the **ODataV4Adaptor**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs123/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs123/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs123" %}

### Web API

You can use **WebApiAdaptor** to bind grid with Web API created using OData endpoint.

```ts

var data = new ej.data.DataManager({
    url: '/api/OrderAPI',
    adaptor: new ej.data.WebApiAdaptor()
});

var grid = new ej.grids.Grid({
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

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

### Remote Save Adaptor

You may need to perform all Grid Actions in client-side except the CRUD operations, that should be interacted with server-side to persist data. It can be achieved in Grid by using **RemoteSaveAdaptor**.

Datasource must be set to **json** property and set **RemoteSaveAdaptor** to the **adaptor** property. CRUD operations can be mapped to server-side using **updateUrl**, **insertUrl**, **removeUrl**, **batchUrl**, **crudUrl** properties.

You can use the following code example to use **RemoteSaveAdaptor** in Grid.

```ts
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar);

var dataSource = new ej.data.DataManager({
    json: data,
    adaptor: new ej.data.RemoteSaveAdaptor(),
    insertUrl: '/Home/Insert',
    updateUrl: '/Home/Update',
    removeUrl: '/Home/Delete'
});

var grid = new ej.grids.Grid({
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

```
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

### Custom adaptor

You can create your own adaptor by extending the built-in adaptors. The following demonstrates custom adaptor approach and how to add a serial number for the records by overriding the built-in response processing using the **processResponse** method of the **ODataAdaptor**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs124/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs124/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs124" %}

### Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid postback for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the **offline** property of [`DataManager`](../data).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs125/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs125/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs125" %}

### Sending additional parameters to the server

To add a custom parameter to the data request, use the **addParams** method of **Query** class. Assign the **Query** object with additional parameters to the grid [`query`](../api/grid/#query) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs126/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs126/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs126" %}

> The parameters added using the [`query`](../api/grid/#query) property will be sent along with the data request for every grid action.

### Handling HTTP error

During server interaction from the grid, some server-side exceptions may occur, and you can acquire those error messages or exception details
in client-side using the [`actionFailure`](../api/grid/#actionfailure) event.

The argument passed to the [`actionFailure`](../api/grid/#actionfailure) event contains the error details returned from the server.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs127/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs127/index.html %}
{% endhighlight %}
{% endtabs %}

> The [`actionFailure`](../api/grid/#actionfailure) event will be triggered not only for the server errors, but also when there is an exception while processing the grid actions.

## Binding with ajax

You can use Grid [`dataSource`](../api/grid/#datasource) property to bind the datasource to Grid from external ajax request. In the below code we have fetched the datasource from the server with the help of ajax request and provided that to [`dataSource`](../api/grid/#datasource) property by using **onSuccess** event of the ajax.

```ts
ej.grids.Grid.Inject(ej.grids.Page);

let grid = new ej.grids.Grid({
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
    let ajax = new ej.base.Ajax("https://services.syncfusion.com/js/production/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = function (data) {
        grid.dataSource = JSON.parse(data);
    };
});

```

> * If you bind the dataSource from this way, then it acts like a local dataSource. So you cannot perform any server side crud actions.