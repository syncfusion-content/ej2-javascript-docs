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

Data binding is a fundamental technique that empowers the Grid control to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely. 

The Syncfusion Grid utilizes the **DataManager**, which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](../../api/grid/#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

It supports two kinds of data binding methods:

* Local data
* Remote data

## Loading indicator

The Syncfusion ##Platform_Name##  Grid offers a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, you can utilize the [loadingIndicator.indicatorType](../../api/grid/loadingIndicatorModel/) property of the grid, which supports two types of indicators:

* Spinner (default indicator)
* Shimmer

The following example demonstrates how to set the `loadingIndicator.indicatorType` property based on changing the dropdown value using the [change](../../api/drop-down-list/#change) event of the `DropDownList` control. The [refreshColumns](../../api/grid/#refreshcolumns) method is used to apply the changes and display the updated loading indicator type. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/data-binding-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/data-binding-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs1" %}
{% endif %}

## Refresh the datasource using property

Refreshing the data source in a Syncfusion Grid involves updating the data that the grid displays dynamically. This operation is essential when you need to reflect changes in the underlying data without reloading the entire page or control.

To achieve this, you can make use of the [datasource](../../api/grid/#datasource) property in conjunction with the [setProperties](../../api/grid/#refresh) method. This ensures that the grid reflects the changes in the data source without requiring a complete page or control reload.

For example, if you add or delete data source records, follow these steps:

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
grid.dataSource.unshift(data); // Add a new record.
grid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:  Refresh the datasource after changes by invoking the `setProperties` method.

```typescript
(grid as Grid).setProperties({ dataSource:  (grid as Grid).dataSource as object[] });

```
The following example demonstrates adding a new record to the data source through an external button:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/data-binding-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/data-binding-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs2" %}
{% endif %}

## Dynamically change the datasource or columns or both

The Grid control in Syncfusion allows dynamic modification of the data source, columns, or both . This feature is particularly valuable when you need to refresh the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, you can utilize the [changeDataSource](../../api/grid/#changedatasource) method. This method enables you to update the data source, columns, or both, based on your application's requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

**1. Change both data source and columns:**

To modify both the existing columns and the data source, you need to pass the both arguments to the `changeDataSource` method. The following example demonstrates how to change both the data source and columns.

You can assign a JavaScript object array to the [dataSource](../../api/grid/#datasource) property to bind local data to the grid. The code below provides an example of how to create a data source for the grid.

```typescript
    export let data: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', Freight: 32.38,
        ShipCity: 'Reims'
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61,
        ShipCity: 'Münster'
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Freight: 61.34,
        ShipCity: 'Rio de Janeiro'
    }];
```

The following code demonstrates how to create the [columns](../../grid/columns/columns) for the grid, which are based on the provided grid data source.

```typescript
    public newColumn: ColumnModel[] = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 125 },
    ];
```

The following code demonstrates updating the data source and columns defined above using the `changeDataSource` method.

```typescript
    gridInstance.changeDataSource(data, newColumn);
```

**2. Modify only the existing columns:**

To modify the existing columns in a grid, you can either add or remove columns or change the entire set of columns using the [changeDataSource](../../api/grid/#changedatasource) method. To use this method, you should set the first parameter to null and provide the new columns as the second parameter. However, please note that if a column field is not specified in the data source, its corresponding column values will be empty. The following example illustrates how to modify existing columns.

The following code demonstrates how to add new columns with existing grid columns ('newColumn') by using `changeDataSource` method.

```typescript
    public newColumn1: ColumnModel[] = [
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
    ];
    let column: any = newColumn.push(newColumn1);
    gridInstance.changeDataSource(null, column);
```

**3. Modify only the data source:**

You can change the entire data source in the grid using the `changeDataSource` method. To use this method, you should provide the data source as the first argument, and  the second argument which is optional can be used to specify new columns for the grid. If you are not specifying the columns, the grid will generate the columns automatically based on the data source. The following example demonstrates how to modify the data source.

You can assign a JavaScript object array to the `dataSource` property to bind local data to the grid. The code below provides an example of how to create a new data source for the grid.

```typescript
     export let employeeData: Object[] = [
    {
        FirstName: 'Nancy', City: 'Seattle', Region: 'WA',
        Country: 'USA'
    },
    {
        FirstName: 'Andrew', City: 'London', Region: null,
        Country: 'UK',
    },
    {
        FirstName: 'Janet', City: 'Kirkland', Region: 'WA',
        Country: 'USA'
    }];
```

The following code demonstrates, how to use the `changeDataSource` method to bind the new **employeeData** to the grid.

```typescript
    gridInstance.changeDataSource(employeeData);
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/data-binding-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/data-binding-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/data-binding-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/data-binding-cs3" %}
{% endif %}

>* The Grid state persistence feature does not support the  `changeDataSource` method.
>* In this document, the above sample uses the local data for `changeDataSource` method. For those using a remote data source, refer to the [FlexibleData](https://ej2.syncfusion.com/demos/#/bootstrap5/grid/flexible-data.html) resource.

## See Also

* [How to bind SQL Server data in TypeScript DataGrid using SqlClient data provider](https://support.syncfusion.com/kb/article/9963/how-to-bind-sql-server-data-in-typescript-datagrid-using-sqlclient-data-provider)