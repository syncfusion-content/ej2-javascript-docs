---
layout: post
title: ##Platform_Name## Grid Sorting | Syncfusion
description: Learn ##Platform_Name## Data Grid sorting with single-column, multi-column, custom, foreign-key, culture-aware and programmatic sorting capabilities.
platform: ej2-javascript
control: Sorting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in ##Platform_Name## Data Grid

The Syncfusion ##Platform_Name## Data Grid provides flexible sorting capabilities that help organize, analyze, and locate information efficiently. Sorting can be applied through column headers or customized to support application-specific ordering requirements.

To enable sorting in the grid, set the [allowSorting](../api/grid#allowsorting) property to `true`.

Sorting a particular column is accomplished by clicking on its column header. Each click on the header toggles the sort order between `Ascending` and `Descending`.

To use the sorting feature, inject the [Sort](../api/grid/sort) module in the grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs166/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs166/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs166" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs166/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs166/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs166" %}
{% endif %}

> * Data Grid column sorted in `Ascending` order. If a click occurs on an already sorted column, the sort direction toggles.
> * Apply and clear sorting by using the [sortColumn](../api/grid#sortcolumn) and [clearSorting](../api/grid#clearsorting) methods.
> * To disable sorting for a specific column, set the [columns.allowSorting](../api/grid/column#allowsorting) property to `false`.

## Sort order

By default, the sorting order is "ascending → descending → none".

The first click on a column header sorts the column in ascending order. A second click sorts the column in descending order. A third click clears the sorting.

> The [allowUnsort](../api/grid/sortsettings#allowunsort) property controls whether sorting can be cleared. When set to `false`, clicking a grid header will only toggle between ascending and descending order, without switching to an unsorted state. The default value is `true`.

## Initial sorting

The Data Grid control provides an option to apply initial sorting by setting the [sortSettings->columns](../api/grid/sortSettings#columns) property to the desired [field](../api/grid/sortDescriptorModel#field) and sort [direction](../api/grid/sortDescriptorModel#direction). This feature is useful for displaying data in a specific order when the grid initially loads.

The following example demonstrates setting [sortSettings->columns](../api/grid/sortSettings#columns) for "Order ID" and "Ship City" columns with a specified [direction](../api/grid/sortDescriptorModel#direction).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs167/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs167/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs167" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs167/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs167/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs167" %}
{% endif %}

> The initial sorting defined in [sortSettings->columns](../api/grid/sortSettings#columns) will override any sorting applied through user interaction.

## Multi-column sorting

The Data Grid supports multi-column sorting, allowing records to be ordered using multiple sorting criteria simultaneously. Multi-column sorting makes it possible to establish hierarchical sort priorities, ensuring that records with identical values in one column can be further organized using additional columns.

To enable multi-column sorting, set the [allowSorting](../api/grid#allowsorting) and the [allowMultiSorting](../api/grid#allowmultisorting) property to `true`. This enables sorting of multiple columns by holding the <kbd>CTRL</kbd> key and clicking the column headers. This feature is useful for datasets that require more than a single sorting dimension.

To clear multi-column sorting for a particular column, press <kbd>Shift</kbd> while clicking the column header.

> * The [allowSorting](../api/grid#allowsorting) must be `true` while enabling multi-column sort.
> * Set [allowMultiSorting](../api/grid#allowmultisorting) property as `false` to disable multi-column sorting.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/grid-cs168/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs168/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/grid-cs168" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/grid-cs168/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/grid-cs168/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/grid-cs168" %}
{% endif %}

## Disable sorting for a specific column

The Data Grid control allows disabling sorting for a column. This is useful when certain columns should not be included in the sorting process.

This is achieved by setting the [allowSorting](../api/grid#allowsorting) property of the particular column to `false`. The following example demonstrates disabling sorting for "Customer ID" column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs1" %}
{% endif %}

## Custom sorting

The Data Grid supports custom sorting through the [sortComparer](../api/grid/column#sortcomparer) property, providing complete control over how values are ordered within a column.

Custom sorting can be used when the required sort order differs from standard alphabetical or numerical sorting. This is useful for scenarios that require custom rankings, status-based ordering, priority sequencing, locale-aware comparisons, display-value sorting, or specialized handling of null values.

The following example demonstrates defining a custom `sortComparer` function for the "Customer ID" column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sort-comparer-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-comparer-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort-comparer-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sort-comparer-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-comparer-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sort-comparer-cs2" %}
{% endif %}

> The "customSortComparer" function takes two parameters: a and b, which are the values being compared. The function returns "-1", "0", or "1", depending on the comparison result.

### Display null values always at bottom 

By default, "null" values in a ##Platform_Name## Data Grid are displayed at the top when sorting in descending order and at the bottom when sorting in ascending order. However, "null" values can be configured to always display at the bottom of the grid regardless of sort direction. This is achieved by utilizing the [column.sortComparer](../api/grid/column#sortcomparer)  method. This feature is particularly useful when working with data sets where "null" values might need to be clearly separated from actual data entries.

The example below demonstrates displaying "null" values at the bottom of the grid while sorting the "Order Date" column in both ascending and descending order.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sort-comparer-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-comparer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort-comparer-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sort-comparer-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sort-comparer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sort-comparer-cs1" %}
{% endif %}

## Foreign key sorting

Foreign-key sorting enables sorting based on displayed values rather than the underlying identifier values stored in the data source.

To sort a foreign key column based on its displayed text, the foreign key column can be enabled by using[column->dataSource](../api/grid/column#datasource), [column->foreignKeyField](../api/grid/column#foreignkeyfield) and [column->foreignKeyValue](../api/grid/column#foreignkeyvalue) properties.

### Sort foreign key column based on text for local data

When working with local data in the grid, sorting is performed based on the[foreignKeyValue](../api/grid/column#foreignkeyvalue) defined in the column. This field should be specified in the column definition with the corresponding foreign key value for each row. The grid then sorts the foreign key column according to the text representation of that value.

The following example demonstrates sorting with a foreign key column enabled, where the "Customer ID" column acts as a foreign column displaying the "Contact Name" column from foreign data.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs2" %}
{% endif %}

> Make sure to inject the `ForeignKey` module in the grid to ensure its availability throughout the application.

### Sort foreign key column based on text for remote data

In the case of remote data in the grid, the sorting operation will be performed based on the [foreignKeyField](../api/grid/column#foreignkeyfield) property of the column. The `foreignKeyField` property should be defined in the column definition with the corresponding foreign key field name for each row. The grid will send a request to the server-side with the `foreignKeyField` name, and the server-side should handle the sorting operation and return the sorted data to the grid.

{% if page.publishingplatform == "typescript" %}
 
```ts
import { Grid, ForeignKey, Sort } from '@syncfusion/ej2-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Grid.Inject(ForeignKey, Sort);

let dataSource: DataManager = new DataManager({
    json: '/OData/Items',
    adaptor: new ODataV4Adaptor
});
let employeeData: DataManager = new DataManager({
    url: '/OData/Brands',
    adaptor: new ODataV4Adaptor
});
let grid: Grid = new Grid(
    {
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');

```

 {% elsif page.publishingplatform == "javascript" %}
 
```js
ej.grids.Grid.Inject(ej.grids.ForeignKey);

var dataSource = new ej.data.DataManager({
    json: '/OData/Items',
    adaptor: new ej.data.ODataV4Adaptor
});
var employeeData = new ej.data.DataManager({
    url: '/OData/Brands',
    adaptor: new ej.data.ODataV4Adaptor
});
var grid = new ej.grids.Grid({
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            { field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');

```
{% endif %}

The following code example describes the handling of sorting operation at the server side.

```cs
    public class ItemsController : ODataController
    {
        [EnableQuery]
        public IQueryable<Item> Get()
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            var queryString = HttpContext.Current.Request.QueryString;
            var allUrlKeyValues = ControllerContext.Request.GetQueryNameValuePairs();
            string key = allUrlKeyValues.LastOrDefault(x => x.Key == "$orderby").Value;
            if (key != null)
            {
                if (key == "EmployeeID") {
                    GridData = SortFor(key); //Only for foreignKey Column ascending
                }
                else if(key == "EmployeeID desc") {
                    GridData = SortFor(key); //Only for foreignKey Column descending
                }
            }
            var count = GridData.Count();
            var data = GridData.AsQueryable();
            return data;
        }

        public List<Item> SortFor(String Sorted)
        {
            List<Item> GridData = JsonConvert.DeserializeObject<Item[]>(Properties.Resources.ItemsJson).AsQueryable().ToList();
            List<Brand> empData = JsonConvert.DeserializeObject<Brand[]>(Properties.Resources.BrandsJson).AsQueryable().ToList();
            if (Sorted == "EmployeeID") //check whether ascending or descending
                empData = empData.OrderBy(e => e.FirstName).ToList();
            else if(Sorted == "EmployeeID desc")
                empData = empData.OrderByDescending(e => e.FirstName).ToList();
            List<Item> or = new List<Item>();
            for (int i = 0; i < empData.Count(); i++) {
                //Select the Field matching records
                IEnumerable<Item> list = GridData.Where(pred => pred.EmployeeID == empData[i].EmployeeID).ToList();
                or.AddRange(list);
            }
            return or;
        }
    }
```
## Culture-based sorting

Culture-based sorting applies locale-specific comparison rules, ensuring accurate sorting behavior for multilingual and internationalized applications.

Culture-specific sorting is achieved by utilizing the [locale](../api/grid#locale) property. By setting the `locale` property to the desired culture code, sorting is enabled based on that specific culture.

In the following example, sorting is performed based on the "ar" locale using the [column.sortComparer](../api/grid/column#sortcomparer) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs7" %}
{% endif %}

## Touch interaction

On touch devices, tapping a grid header sorts that column ![Sorting](images/sorting.jpg). 
For multi‑column sorting, tap the sorting indicator ![Multi Sorting](images/msorting.jpg) and then tap the additional grid headers to include them in the sort order.

> The [allowMultiSorting](../api/grid#allowmultisorting) and [allowSorting](../api/grid#allowsorting) should be `true` then only the popup will be shown.

The following screenshot represents a grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## Programmatic sorting

The Data Grid control in Syncfusion's ##Platform_Name## suite allows customization of column sorting and provides flexibility in sorting based on external interactions. Sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

External column sorting is accomplished using the[sortColumn](../api/grid#sortcolumn) method with parameters `columnName`, `direction`, and `isMultiSort`. This method enables programmatic sorting of a specific column based on specified requirements.

The following example demonstrates adding sort columns to a grid. The `DropDownList` control selects the column and sort direction. When an external button is clicked, the [sortColumn](../api/grid#sortcolumn) method is called with the specified `columnName`, `direction`, and `isMultiSort` parameters. 

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs4" %}
{% endif %}

### Remove sort columns

External removal of sort columns is accomplished using the `removeSortColumn` method provided by the Data Grid control. This method removes the sorting applied to a specific column.

The following example demonstrates removing sort columns. The `DropDownList` control selects the column. When an external button is clicked, the `removeSortColumn` method removes the selected sort column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs5" %}
{% endif %}

### Clear sorting

Sorting is cleared on an external button click using the [clearSorting](../api/grid#clearsorting) method provided by the grid control. This method clears the sorting applied to all columns in the grid. 

The following example demonstrates clearing sorting using the `clearSorting` method in an external button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs6" %}
{% endif %}

## Sorting events

The Data Grid control provides two events related to sorting, such as `actionBegin` and `actionComplete`. These events can be used to perform custom actions before and after the sorting process is completed.

1. **actionBegin**: [actionBegin](../api/grid#actionbegin) event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current grid state, including the current sorting column, direction, and data.

2. **actionComplete**: [actionComplete](../api/grid#actioncomplete) event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current grid state, including the sorted data and column information.

This example demonstrates that the `actionBegin` event is used to cancel sorting for the "Order ID" column, while the `actionComplete` event displays a message after the sorting action finishes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-event-cs1" %}
{% endif %}

> [args.requestType](../api/grid/sortEventArgs#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is `sorting`.

## Customizing the sort icon

Sort icon customization in the grid is accomplished by overriding the default grid classes `.e-icon-ascending` and `.e-icon-descending` with custom content using CSS. The desired icons or symbols are specified using the `content` property as shown below:

```css
.e-grid .e-icon-ascending::before {
  content: '\e822';
}
	
.e-grid .e-icon-descending::before {
  content: '\e7fe';
}
```
The following sample demonstrates a grid rendered with a customized sort icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid/sorting-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sorting-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid/sorting-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid/sorting-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/sorting-cs3" %}
{% endif %}
