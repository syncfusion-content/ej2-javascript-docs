---
layout: post
title: ##Platform_Name## Grid Data Binding | Syncfusion
description: Learn how to bind local and remote data sources in ##Platform_Name## Data Grid, enable dynamic updates, and manage data flow efficiently.
platform: ej2-javascript
control: Data binding 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in ##Platform_Name## Data Grid

Data binding is a fundamental technique that empowers the Data Grid component to integrate data into its interface, enabling the creation of dynamic and interactive grid views. This feature is particularly valuable when working with large datasets or when data needs to be fetched remotely.  

The Data Grid utilizes the `DataManager`, which supports both local binding with JavaScript object arrays and remote binding with RESTful JSON data services. The key property, [dataSource](../../api/grid#datasource), can be assigned to a DataManager instance or a collection of JavaScript object arrays.

The Data Grid enables data binding through the following approaches:

* [Local data](./local-data)
* [Remote data](./remote-data)
* [Custom API](./custom-binding)

## Loading indicator

The Data Grid provides a loading animation feature, which makes it easy to identify when data is being loaded or refreshed. This feature provides a clear understanding of the grid's current state and actions, such as sorting, filtering, grouping, and more.

To achieve this, the [loadingIndicator.indicatorType](../../api/grid/loadingIndicatorModel) property of the grid can be utilized, which supports two types of indicators:

- `Spinner` (default)
- `Shimmer`

The following example demonstrates setting the `loadingIndicator.indicatorType` property based on changing the dropdown value using the [change](../../api/drop-down-list#change) event of the `DropDownList` control. The [refreshColumns](../../api/grid#refreshcolumns) method is used to apply the changes and display the updated loading indicator type.

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

## Refresh the data source using the dataSource property

Refreshing the data shown in an Data Grid involves updating the data that the grid displays dynamically. This operation reflects changes in the underlying data without reloading the entire page or component.

To achieve this, use the  [datasource](../../api/grid#datasource) property in conjunction with the `setProperties` method. This ensures the grid reflects changes in the `dataSource` without requiring a complete page or component reload.

For example, when data source records are added or deleted, follow these steps:

**Step 1**: Add/delete the datasource record by using the following code.

```typescript
grid.dataSource.unshift(data); // Add a new record.
grid.dataSource.splice(selectedRow, 1); // Delete a record.
```

**Step 2**:  Refresh the datasource after changes by invoking the `setProperties` method.

{% if page.publishingplatform == "typescript" %}
 
```ts
(grid as Grid).setProperties({ dataSource:  (grid as Grid).dataSource as object[] });

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js
grid.setProperties({dataSource: grid.dataSource});

```

{% endif %}

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

The Data Grid component supports dynamic modification of the data source, columns, or both. This feature refreshes the grid's content and structure without requiring a complete page reload.

To achieve dynamic changes, the [changeDataSource](../../api/grid#changedatasource) method allows updating the grid's data source dynamically. This method enables updating the data source, columns, or both, based on application requirements. However, it is important to note that during the changing process for the data source and columns, the grid's existing actions such as sorting, filtering, grouping, aggregation, and searching will be reset. The `changeDataSource` method has two optional arguments: the first argument represents the data source, and the second argument represents the columns. The various uses of the `changeDataSource` method are explained in the following topic.

### Change both data source and columns

To modify both the existing columns and the data source, pass both arguments to the `changeDataSource` method. The following example demonstrates changing both the data source and columns.

Assign a JavaScript object array to the [dataSource](../../api/grid#datasource) property to bind local data to the grid. The code below provides an example of creating a data source for the grid.

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

### Change only columns

To modify existing columns in a grid, add or remove columns or replace the entire set of columns using the [changeDataSource](../../api/grid#changedatasource) method. To use this method, set the first parameter to `null` and provide the new columns as the second parameter. Note that if a column field is not specified in the `dataSource`, its corresponding column values will be empty. The following example illustrates modifying existing columns.

The following code demonstrates adding new columns with existing grid columns "newColumn" using the `changeDataSource` method:

```typescript
    public newColumn1: ColumnModel[] = [
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 125 },
        { field: 'ShipCity', headerText: 'ShipCity', width: 125 },
    ];
    let column: any = newColumn.push(newColumn1);
    gridInstance.changeDataSource(null, column);
```

### Change only the data source

The `changeDataSource` method provides an option to change the entire data source in the grid by passing the new data source as the first argument. The optional second argument can specify new columns for the grid. If columns are not specified, the grid auto-generates columns based on the data source.

The following code demonstrates creating a new data source for the `changeDataSource` method:

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

The following code demonstrates the use of `changeDataSource` method to bind the new "employeeData" to the grid.

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

{% if page.publishingplatform == "typescript" %}
> * The Data Grid state persistence feature does not support the `changeDataSource` method.
> * The sample above uses local data for the `changeDataSource` method. For remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/demos/#/bootstrap5/grid/flexible-data.html) resource.
 
{% elsif page.publishingplatform == "javascript" %}
> * The Data Grid state persistence feature does not support the `changeDataSource` method.
> * The sample above uses local data for the `changeDataSource` method. For remote data sources, refer to the [FlexibleData](https://ej2.syncfusion.com/javascript/demos/#/bootstrap5/grid/flexible-data.html) resource.
 
{% endif %}

## Add custom HTTP headers using a custom adaptor

Custom headers in HTTP requests are used to send additional information such as authentication tokens, API keys, or metadata required by the server. These headers improve security and enable better control over data communication. In the grid, custom headers can be added when making API requests, ensuring that each request carries the necessary information for server-side validation and processing.

This method is particularly useful when integrating the grid with authenticated APIs, where requests must include authorization tokens or other security credentials to ensure secure access.

To achieve this, extend the `WebApiAdaptor` to create a custom adaptor. The `beforeSend` method in the custom adaptor enables modification of request headers before sending them to the server, ensuring that every request from the grid includes the required headers.

The following example demonstrates setting custom headers using the custom adaptor in grid.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/custom-headers-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-headers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/custom-headers-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/custom-headers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/custom-headers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/custom-headers-cs1" %}
{% endif %}

## Prevent local time zone conversion for date columns

By default, the Data Grid automatically converts date values to the local time zone of the client system. However, in some scenarios, it may be necessary to display the original date as received from the server without timezone conversion.

To prevent timezone conversion for date columns, use the `serverTimezoneOffset` property from `DataUtil`. Setting this property to "0" ensures dates remain in the original format received from the server without conversion to the local timezone.

The following example demonstrates preventing local time zone conversion for date columns in the grid using the `DataUtil.serverTimezoneOffset` property

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/prevent-timezone-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/prevent-timezone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/prevent-timezone-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/prevent-timezone-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/prevent-timezone-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/prevent-timezone-cs1" %}
{% endif %}

## See Also

* [Local data binding](./local-data)
* [Remote data binding](./remote-data)
* [Custom data binding](./custom-binding)
* [How to bind SQL Server data in TypeScript DataGrid using SqlClient data provider](https://support.syncfusion.com/kb/article/9963/how-to-bind-sql-server-data-in-typescript-datagrid-using-sqlclient-data-provider)