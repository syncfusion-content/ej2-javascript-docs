---
layout: post
title: Sorting in ##Platform_Name## Grid control | Syncfusion
description: Learn here all about Sorting in Syncfusion ##Platform_Name## Grid control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sorting 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in ##Platform_Name## Grid control

The Grid control provides built-in support for sorting data-bound columns in ascending or descending order. To enable sorting in the grid, set the [allowSorting](../api/grid/#allowsorting) property to **true**.

To sort a particular column in the grid, click on its column header. Each time you click the header, the order of the column will switch between **Ascending** and **Descending**.

To use the sorting feature, you need to inject the [Sort](../api/grid/sort/) module in the grid.

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

> * Grid column sorted in **Ascending** order. If you click on an already sorted column, then toggles the sort direction.
> * You can apply and clear sorting by using the [sortColumn](../api/grid/#sortcolumn) and [clearSorting](../api/grid/#clearsorting) methods.
> * To disable sorting for a specific column, set the [columns.allowSorting](../api/grid/column/#allowsorting) property to **false**.

## Initial sorting

By default, the grid control does not apply any sorting to its records at initial rendering. However, you can apply initial sorting by setting the [sortSettings->columns](../api/grid/sortSettings/#columns) property to the desired [field](../api/grid/sortDescriptorModel/#field) and sort [direction](../api/grid/sortDescriptorModel/#direction). This feature is helpful when you want to display your data in a specific order when the grid is first loaded.

The following example demonstrates how to set [sortSettings->columns](../api/grid/sortSettings/#columns) for **OrderID** and **ShipCity** columns with a specified [direction](../api/grid/sortDescriptorModel/#direction).

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

> The initial sorting defined in [sortSettings->columns](../api/grid/sortSettings/#columns) will override any sorting applied through user interaction.

## Multi-column sorting

The Grid control allows to sort more than one column at a time using multi-column sorting. To enable multi-column sorting in the grid, set the [allowSorting](../api/grid/#allowsorting) property to **true**, and set the [allowMultiSorting](../api/grid/#allowmultisorting) property to **true** which enable the user to sort multiple columns by hold the **CTRL** key and click on the column headers. This feature is useful when you want to sort your data based on multiple criteria to analyze it in various ways.

To clear multi-column sorting for a particular column, press the "Shift + mouse left click".

> * The [allowSorting](../api/grid/#allowsorting) must be true while enabling multi-column sort.
> * Set [allowMultiSorting](../api/grid/#allowmultisorting) property as **false** to disable multi-column sorting.

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

## Prevent sorting for particular column

The Grid control provides the ability to prevent sorting for a particular column. This can be useful when you have certain columns that you do not want to be included in the sorting process. 

It can be achieved by setting the [allowSorting](../api/grid/#allowsorting) property of the particular column to **false**. 

The following example demonstrates, how to disable sorting for **CustomerID** column.

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

## Sort order

By default, the sorting order will be as **ascending -> descending -> none**.

When you click on a column header for the first time, it sorts the column in ascending order. Clicking the same column header again will sort the column in descending order. A repetitive third click on the same column header will clear the sorting.

## Custom sorting 

The Grid control provides a way to customize the default sort action for a column by defining the [column.sortComparer](../api/grid/column/#sortcomparer) property. The sort comparer function works similar to the [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) comparer function, and allows to define custom sorting logic for a specific column.

The following example demonstrates how to define custom sort comparer function for the **Customer ID** column.

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

> The customSortComparer function takes two parameters: a and b. The a and b parameters are the values to be compared. The function returns -1, 0, or 1, depending on the comparison result.

### Display null values always at bottom 

By default, null values in a Syncfusion<sup style="font-size:70%">&reg;</sup> Grid are displayed at the top when sorting in descending order and at the bottom when sorting in ascending order. However, there may be scenarios where you want to always display null values at the bottom of the grid regardless of the sort direction. This can be achieved by utilizing the [column.sortComparer](../api/grid/column/#sortcomparer)  method. This feature is particularly useful when working with data sets where null values might need to be clearly separated from actual data entries.

The example below demonstrates how to display null values at the bottom of the grid while sorting the **OrderDate** column in both ascending and descending order.

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

## Touch interaction

When you tap grid header on touch screen devices, then the selected column header is sorted and display a popup ![Sorting](images/sorting.jpg) for multi-column sorting, tap on the popup to sort multiple columns ![Multi Sorting](images/msorting.jpg) and then tap the desired grid headers.

> The [allowMultiSorting](../api/grid/#allowmultisorting) and [allowSorting](../api/grid/#allowsorting) should be **true** then only the popup will be shown.

The following screenshot represents a grid touch sorting in the device.

![Touch Interaction](images/touch-sorting.jpg)

## Sort foreign key column based on text

To perform sorting based on foreign key column, the foreign key column can be enabled by using [column->dataSource](../api/grid/column/#datasource), [column->foreignKeyField](../api/grid/column/#foreignkeyfield) and [column->foreignKeyValue](../api/grid/column/#foreignkeyvalue) properties.

**Sort foreign key column based on text for local data**

In the case of local data in the grid, the sorting operation will be performed based on the [foreignKeyValue](../api/grid/column/#foreignkeyvalue) property of the column. The `foreignKeyValue` property should be defined in the column definition with the corresponding foreign key value for each row. The grid will sort the foreign key column based on the text representation of the `foreignKeyValue` property.

The following example demonstrates how to perform sorting by enabling a foreign key column, where the **CustomerID** column acts as a foreign column displaying the **ContactName** column from foreign data.

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

> Make sure to inject the **ForeignKey** module in the grid to ensure its availability throughout your application.

**Sort foreign key column based on text for remote data**

In the case of remote data in the grid, the sorting operation will be performed based on the [foreignKeyField](../api/grid/column/#foreignkeyfield) property of the column. The `foreignKeyField` property should be defined in the column definition with the corresponding foreign key field name for each row. The grid will send a request to the server-side with the `foreignKeyField` name, and the server-side should handle the sorting operation and return the sorted data to the grid.

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
## Perform sorting based on its culture

Perform sorting based on culture in the Grid can be achieved by utilizing the [locale](../api/grid/#locale) property. By setting the `locale` property to the desired culture code, you enable sorting based on that specific culture. This allows you to apply locale-specific sorting rules and ensure accurate ordering for different languages and regions.

In the following example, sorting is performed based on the **"ar"** locale using the [column.sortComparer](../api/grid/column/#sortcomparer) property.

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

## How to customize sort icon

To customize the sort icon in the Grid, you can override the default grid classes **.e-icon-ascending** and **.e-icon-descending** with custom content using CSS. Simply specify the desired icons or symbols using the **content** property as mentioned below

```css
.e-grid .e-icon-ascending::before {
  content: '\e822';
}
	
.e-grid .e-icon-descending::before {
  content: '\e7fe';
}
```
In the below sample, grid is rendered with a customized sort icon.

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

## Sort columns externally

The Grid control in Syncfusion's<sup style="font-size:70%">&reg;</sup> ##Platform_Name## suite allows you to customize the sorting of columns and provides flexibility in sorting based on external interactions. You can sort columns, remove a sort column, and clear sorting using an external button click.

### Add sort columns

To sort a column externally, you can utilize the [sortColumn](../api/grid/#sortcolumn) method with parameters **columnName**, **direction** and **isMultiSort** provided by the Grid control. This method allows you to programmatically sort a specific column based on your requirements.

The following example demonstrates how to add sort columns to a grid. It utilizes the **DropDownList** control to select the column and sort direction. When an external button is clicked, the [sortColumn](../api/grid/#sortcolumn) method is called with the specified **columnName**, **direction**, and **isMultiSort** parameters. 

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

To remove a sort column externally, you can use the `removeSortColumn` method provided by the Grid control. This method allows you to remove the sorting applied to a specific column.

The following example demonstrates how to remove sort columns. It utilizes the **DropDownList** control to select the column. When an external button is clicked, the `removeSortColumn` method is called to remove the selected sort column.

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

To clear the sorting on an external button click, you can use the [clearSorting](../api/grid/#clearsorting) method provided by the Grid control. This method clears the sorting applied to all columns in the grid. 

The following example demonstrates how to clear the sorting using `clearSorting` method in the external button click.

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

## Sorting Events

The Grid control provides two events that are triggered during the sorting action such as [actionBegin](../api/grid/#actionbegin) and [actionComplete](../api/grid/#actioncomplete). These events can be used to perform any custom actions before and after the sorting action is completed.

1. **actionBegin**: [actionBegin](../api/grid/#actionbegin) event is triggered before the sorting action begins. It provides a way to perform any necessary operations before the sorting action takes place. This event provides a parameter that contains the current grid state, including the current sorting column, direction, and data.

2. **actionComplete**: [actionComplete](../api/grid/#actioncomplete) event is triggered after the sorting action is completed. It provides a way to perform any necessary operations after the sorting action has taken place. This event provides a parameter that contains the current grid state, including the sorted data and column information.

The following example demonstrates how the [actionBegin](../api/grid/#actionbegin) and [actionComplete](../api/grid/#actioncomplete) events work when sorting is performed. The `actionBegin` event is used to cancel the sorting of the OrderID column. The `actionComplete` event is used to display a message.

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

> [args.requestType](../api/grid/sortEventArgs/#requesttype) refers to the current action being performed. For example in sorting, the `args.requestType` value is **sorting**.