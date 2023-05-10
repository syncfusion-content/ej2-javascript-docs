---
layout: post
title: Grouping bar in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Grouping bar in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Grouping bar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Grouping bar in ##Platform_Name## Pivotview control

The Grouping Bar option in pivot table automatically populates fields from the bound data source and allows end users to drag fields between different axes such as columns, rows, values, and filters, and create pivot table at runtime. It can be enabled by setting the [`showGroupingBar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#showgroupingbar) property in pivot to **true**.

Similar to Field List, Grouping Bar UI also comes with basic interactions like,

* Re-arranging fields through drag-and-drop operation between row, column, value and filter axes.
* Remove fields from the existing report using remove icon.
* Filtering members of specific fields using filter icon.
* Sorting members of specific fields using sort icon.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs161/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs161/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs161" %}

The grouping bar provides some additional options to customize it's UI using [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) property.

## Show or hide fields panel

The fields panel, which is positioned above the grouping bar, displays the fields that are available in the data source but are not bound in the report. The fields can be dragged and dropped into the appropriate axis. In addition, any field removed from any axes will be automatically added to the fields panel. The fields panel can be displayed by setting the [`showFieldsPanel`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/#showfieldspanel) property in the [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs162/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs162/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs162" %}

## Show or hide all filter icon

The Grouping Bar has an option to filter members of particular fields at runtime in pivot table. In-order to filter members in a field, click the filter icon and check/uncheck members that needs to be displayed. By default, filter icon besides each field is enabled in the grouping bar. To disable the filter icon, set the property [`showFilterIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/#showfiltericon) in [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) to **false**.

> By default, the filter icon is enabled in the grouping bar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs163/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs163/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs163" %}

## Show or hide specific filter icon

To disable the filter icon for a specific field, set the property [`showFilterIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showfiltericon) to **false** to the corresponding field in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

In the below sample, the filter icon of "Quarter" and "Products" fields have been hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs164/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs164/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs164" %}

## Show or hide all sort icon

The Grouping Bar has an option to order members of a particular fields either in ascending or descending at runtime. In order to sort a field, click the sort icon and to reverse its sort direction, once again click the same sort icon. By default, the sort icon besides each field is enabled in the grouping bar and members will be arranged in ascending order. To disable the sort option, set the property [`showSortIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/#showsorticon) in [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) to **false**.

> By default, the sort icon is enabled in the grouping bar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs165/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs165/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs165" %}

## Show or hide specific sort icon

To disable the sort icon for a specific button, set the property [`showSortIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showsorticon) to **false** to the corresponding field in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

In the below sample, the sort icon of "Quarter" and "Country" fields have been hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs166/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs166/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs166" %}

## Show or hide all remove icon

The Grouping Bar has an option to remove any field at runtime. To remove a field, just click the remove icon. By default, the remove icon besides each field is enabled in the grouping bar. To disable the remove icon, set the property [`showRemoveIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/#showremoveicon) in [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) to **false**.

> By default, the remove icon is enabled in the grouping bar.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs167/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs167/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs167" %}

## Show or hide specific remove icon

To disable the remove icon for a specific button, set the property [`showRemoveIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showremoveicon) to **false** to the corresponding field in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

In the below sample, the remove icon of fields "Year", "Sold" and "Products" have been hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs168/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs168/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs168" %}

## Disable all fields from dragging

The Grouping Bar has an option to drag-and-drop fields between row, column, value and filter axes in-order to change report at runtime. By default, all fields are available for drag-and-drop operation in the grouping bar. To disable these fields, set the property [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/#allowdraganddrop) in [`groupingBarSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/groupingBarSettings/) to false. This will prevent end user from changing the current report.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs169/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs169/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs169" %}

## Disable specific field from dragging

To disable dragging for a specific button, set the property [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#allowdraganddrop) to **false** to the corresponding  field in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

In the below sample, the drag and drop of the fields "Year" and "Products" have been restricted.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs170/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs170/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs170" %}

## Remove specific field(s) from displaying

When a report is bound to the pivot table, fields will be automatically populated within the Grouping Bar. In this case, you can also prevent specific fields from being displayed. To do so, set the appropriate field name(s) in the [`excludeFields`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/#excludefields) property of [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

> The `excludeFields` property setting will be reflected in the field list UI as well, and for more information, see this [link](https://ej2.syncfusion.com/javascript/documentation/pivotview/field-list/#remove-specific-fields-from-displaying).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs171/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs171/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs171" %}

## Show or hide specific dropdown icon

To disable the dropdown icon for a specific button, set the property [`showValueTypeIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showValueTypeIcon) to **false** to the corresponding field in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/).

In the below sample, the dropdown icon of field "Sold" is hidden.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs172/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs172/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs172" %}

 >The property [`showFilterIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showfiltericon), [`showSortIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showsorticon), [`showValueTypeIcon`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#showvaluetypeicon) and [`allowDragAndDrop`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/fieldOptions/#allowdraganddrop) in fields of [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/) are applicable for both grouping bar and field list.

## Show values button

During runtime, the **Values** button in the grouping bar can be moved to a different position (i.e., different index) among other fields in the column or row axis. To enable the **Values** button, set the [`showValuesButton`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#showvaluesbutton) property to **true**.

> This support is only available for relational data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs173/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs173/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs173" %}

## Event

### OnFieldDropped

The event `onFieldDropped` fires on whenever a field is dropped over an axis.

It has following parameters - droppedAxis, droppedField and dataSourceSettings. In this sample we have modified the droppedField caption based on the droppedAxis.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs174/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs174/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs174" %}

### FieldDragStart

The event [`fieldDragStart`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fielddragstart) fires whenever a field drag starts from its axis. It allows the user to restrict the drag operation based on its parameters. It has the following parameters  

* `fieldName`: It holds the name of the appropriate field.

* `fieldItem`: It holds the complete definition of the appropriate field mentioned in data source settings.

* `axis`: It holds the axis name where the draggable field lies.

* `cancel`: It is a boolean property and by setting this to true, user can restrict the field from dragging.

In the below sample, the drag operation for the fields in row axis alone is restricted.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs175/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs175/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs175" %}

### FieldDrop

The event  [`fieldDrop`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fielddrop) fires whenever a field is dropped into an axis. It allows the user to restrict the drop operation based on its parameters. It has the following parameters  

* `fieldName`: It holds the name of the appropriate field.

* `fieldItem`: It holds the complete definition of the appropriate field mentioned in data source settings.

* `draggedAxis`: It holds the axis name from where dragging was started.

* `dropAxis`: It holds the axis name where the field is dropped.

* `dropPosition`: It holds the dropped index among other existing fields in the axis.

* [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/): It holds complete pivot report.

* `cancel`: It is a boolean property and by setting this to true, user can restrict the field from being dropped.

In the below sample, dropping of any fields in value axis alone is restricted.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs176/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs176/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs176" %}

### FieldRemove

The event [`fieldRemove`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fieldremove) fires when removing any field from their axis. It helps the user to limit the elimination of a field based on its parameters. It has the following parameters  

* `fieldName`: It holds the name of the field to be removed.

* `fieldItem`: It holds the complete definition of the appropriate field mentioned in data source settings.

* `axis`: It holds the name of the axis from where it is to remove the field.

* [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings/): It holds complete pivot report.

* `cancel`: It is a boolean property and by setting this to true, user can restrict the field from removing.

In the below sample, the field "Country" could not be removed from report by any UI operations.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs177/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs177/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs177" %}

### AggregateMenuOpen

The event [`aggregateMenuOpen`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#aggregatemenuopen) fires while clicking dropdown icon of the value field button UI. It allows to customize the aggregate types to be displayed in the dropdown menu. It has the following parameters

* `fieldName`: It holds the name of the field that opens the aggregate menu.

* [`aggregateTypes`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#aggregatetypes): It holds the aggregation types set for a field.

* `displayMenuCount`: It allows to set the menu count to be displayed initially. By default, its count is 7.

* `cancel`: It is a boolean property and by setting this to true, dropdown menu won’t be displayed.

In the below sample, the aggregate types of the field "Amount" has been customized in it's dropdown menu.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs178/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs178/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs178" %}

 >The events [`aggregateMenuOpen`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#aggregatemenuopen), [`fieldRemove`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fieldremove), [`fieldDrop`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fielddrop), [`fieldDragStart`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#fielddragstart) and [`onFieldDropped`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview#onfielddropped) are applicable for both grouping bar and field list.

### ActionBegin

The event [`actionBegin`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#actionbegin) triggers when the UI action such as sorting, filtering, aggregation or edit calculated field, that are present in the grouping bar UI begin. This allows user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action began. The following are the UI actions and their names:

| Action | Action Name|
|------|-------------|
| Sort icon| Sort field|
| Filter icon| Filter field|
| Aggregation (Value type drop down and menu)| Aggregate field|
| Remove icon| Remove field|
| Edit icon| Edit calculated field|

* `fieldInfo`: It holds the selected field information.

>Note: This option is applicable only when the field based UI actions are performed such as filtering, sorting, removing field from grouping bar, editing and aggregation type change.

* `cancel`: It allows user to restrict the current action.

In the below sample, grouping bar UI actions such as sorting and filtering can be restricted by setting the **args.cancel** option to **true** in the `actionBegin` event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/action-events-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/action-events-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/action-events-cs19" %}

### ActionComplete

The event [`actionComplete`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#actioncomplete) triggers when the UI action such as as sorting, filtering, aggregation or edit calculated field, that are present in the grouping bar UI, is completed. This allows user to identify the current UI actions being completed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action completed. The following are the UI actions and their names:

| Action | Action Name|
|------|-------------|
| Sort icon| Field sorted|
| Filter icon| Field filtered|
| Aggregation (Value type drop down and menu)| Field aggregated|
| Remove icon| Field removed|
| Edit icon| Calculated field edited|

* `fieldInfo`: It holds the selected field information.

>Note: This option is applicable only when the field based UI actions are performed such as filtering, sorting, removing field from grouping bar, editing and aggregation type change.

* `actionInfo`: It holds the unique information about the current UI action. For example, if sorting is completed, the event argument contains information such as sort order and the field name.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/action-events-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/action-events-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/action-events-cs20" %}

### ActionFailure

The event [`actionFailure`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/#actionfailure) triggers when the current UI action fails to achieve the desired result. It has the following parameters:

* `actionName`: It holds the name of the current action failed. The following are the UI actions and their names:

| Action | Action Name|
|------|-------------|
| Sort icon| Sort field|
| Filter icon| Filter field|
| Aggregation (Value type drop down and menu)| Aggregate field|
| Remove icon| Remove field|
| Edit icon| Edit calculated field|

* `errorInfo`: It holds the error information of the current UI action.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/action-events-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/action-events-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/action-events-cs21" %}

## See Also

* [Customize the icons for pivot table](./how-to/customize-the-icons-for-pivot-table)