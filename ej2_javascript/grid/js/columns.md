---
layout: post
title: Columns in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Columns in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Coloumns
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Columns in ##Platform_Name## Grid control

The column definitions are used as the [`dataSource`](../api/grid/#datasource) schema in the Grid. This plays a vital role in rendering column values in the required format.
The grid operations such as sorting, filtering and grouping etc. are performed based on column definitions. The [`field`](../api/grid/column/#field) property of the [`columns`](../api/grid/column)
is necessary to map the data source values in Grid columns.

> 1. If the column [`field`](../api/grid/column/#field) is not specified in the dataSource, the column values will be empty.
> 2. If the [`field`](../api/grid/column/#field) name contains “dot” operator, it is considered as complex binding.

## Auto generation

The [`columns`](../api/grid/column) are automatically generated when
[`columns`](../api/grid/column) declaration is empty or undefined while initializing the grid. All the columns in the [`dataSource`](../api/grid/#datasource) are bound as grid columns.

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs1" %}

> When columns are auto-generated, the column [`type`](../api/grid/column/#type) will be determined from the first record of the [`dataSource`](../api/grid/#datasource).

### Set isPrimaryKey for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](../api/grid/column/#isprimarykey) column property as true by any one of the following two ways,

If Primary key "column index" is known then refer the following code example

```ts

ej.grids.Grid.Inject(ej.grids.Edit);

let data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid = new ej.grids.Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = function() {
    var column = grid.columns[0];
    column.isPrimaryKey = 'true';
}

```

If Primary key "column fieldname" is known then refer the following code example

```ts

ej.grids.Grid.Inject(ej.grids.Edit);

let data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid = new ej.grids.Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = function() {
    var column = grid.getColumnByField('OrderID');
    column.isPrimaryKey = 'true';
}

```

### Set column options to auto generated columns

You can set column options such as [`format`](../api/grid/column/#format), [`width`](../api/grid/column/#width) to the auto generated columns by using [`dataBound`](../api/grid/#databound) event of the grid.

In the below example, [`width`](../api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and **numeric** type is set for **Freight** column.

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs2" %}

## Complex data binding

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](../api/grid/column/#field).

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs3" %}

For OData and ODataV4 adaptors, you need to add [`expand`](../api/data/query/#expand) query to the [`query`](../api/grid/#query) property (of Grid), to eager load the complex data.

```ts

 let  data = new ej.data.DataManager({
       adaptor: new ej.data.ODataAdaptor(),
       crossDomain: true,
       url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
     });
 let query = new ej.data.Query().expand('Employee');

 let grid = new ej.grids.Grid({
    dataSource: data,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Employee.City', headerText: 'Employee City', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

## Foreign Key Column

Foreign key column can be enabled by using [`column.dataSource`](../api/grid/column/#datasource), [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs4" %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](../api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../api/grid/column/#field).

## Header Template

You can customize the header element by using the [`headerTemplate`](../api/grid/column/#headerTemplate) property. In this demo, the custom element is rendered for both EmployeeID and BirthDate column headers.

 {% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/row-template-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/row-template-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs5" %}

> By default, the [`number`](../common/internationalization/#number-formatting) and [`date`](../common/internationalization/#date-formatting) values are formatted in **en-US** locale. You can localize the currency and date in different locale as explained [`here`](../common/internationalization/)

### Number formatting

The number or integer values can be formatted using the below format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by integer value as N2, N3. etc which denotes the number of precision to be allowed.
C | Denotes currency type. | The currency format is followed by integer value as C2, C3. etc which denotes the number of precision to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 1. For example the cell value **0.2** is formatted as **20%**. The percentage format is followed by integer value as P2, P3. etc which denotes the number of precision to be allowed.

Please refer to the link to know more about [`Number formatting`](../common/internationalization/#number-formatting).

## See Also

* [How to Change Column Header Text Dynamically](./how-to/change-header-text-dynamically)
* [Customize Column Styles](./how-to/customize-column-styles)
* [Custom Tooltip for Columns](how-to/display-custom-tool-tip-for-columns-in-grid)
* [How to Render Other Component in a Column](how-to/render-other-components-in-column)
* [How to change the Orientation of Header Text](./how-to/change-orientation-of-header-text)
* [Group Column by Format](./grouping#group-by-format)
* [How to Use Edit Template in Foreign Key Column](./how-to/use-edit-template-in-foreign-key-column)
* [How to Create and use custom Filter UI in Foreign Key Column](./how-to/customize-filter-ui-in-foreign-key)
* [How to Use Filter Bar Template in Foreign Key Column](./how-to/use-filter-bar-template-in-foreign-key-column)
* [How to Perform aggregation in Foreign Key Column](./how-to/perform-aggregation-in-foreign-key-column)
* [How to set complex column as Foreignkey column](./how-to/complex-column-as-foreign-key-column)
* [Complex Data Binding with list of Array Of Objects](./how-to/list-of-array-of-objects)