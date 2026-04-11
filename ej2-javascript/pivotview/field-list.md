---
layout: post
title: Field list in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Field list in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Field list 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Field list in ##Platform_Name## Pivotview control

The pivot table provides a built-in Field List similar to Microsoft Excel. It allows to add or remove fields and also rearrange them between different axes, including column, row, value, and filter along with sort and filter options dynamically at runtime.

The field list can be displayed in two different formats to interact with pivot table. They are:

* **In-built Field List (Popup)**: To display the field list icon in pivot table UI to invoke the built-in dialog.
* **Stand-alone Field List (Fixed)**: To display the field list in a static position within a web page.

## In-built Field List (Popup)

To enable the field list in pivot table UI, set the [`showFieldList`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#showfieldlist) property in pivot table to **true**. A small icon will appear on the top left corner of the pivot table and clicking on this icon, field list dialog will appear.

> The field list icon will be displayed at the top right corner of the pivot table, when grouping bar is enabled.

To use field list, you need to inject the `FieldList` module in pivot table.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs37" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs37/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs37" %}
{% endif %}

## Stand-alone Field List (Fixed)

The field list can be rendered in a static position, anywhere in web page layout, like a separate component. To do so, you need to set [`renderMode`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#rendermode) property to **Fixed** in [`pivotFieldList`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default).

> To make field list interact with pivot table, you need to use the [**updateView**](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#updateview) and [**update**](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#update) methods for data source update in both field list and pivot table simultaneously.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/field-list-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/field-list-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/field-list-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/field-list-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/field-list-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/field-list-cs2" %}
{% endif %}

## Add or remove fields

Using check box besides each field, end user can select or unselect to add or remove fields respectively from the report at runtime.

![output](images/fieldlist_treeview.webp)

## Remove specific field(s) from displaying

When a data source is bound to the component, fields will be automatically populated inside the Field List. In such case, user can also restrict specific field(s) from displaying. To do so, set the appropriate field name(s) in [`excludeFields`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/datasourcesettings#excludefields) property belonging to [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/datasourcesettings).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs38/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs38/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs38" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs38/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs38/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs38" %}
{% endif %}

## Re-arranging fields

In-order to re-arrange, drag any field from the field list and drop it into the column, row, value, or filter axis using the drag-and-drop holder. It helps end user to alter the report at runtime.

![output](images/fieldlist_axes.webp)

## Filtering members

Using the filter icon besides each field in row, column and filter axes, members can be either included or excluded at runtime. To know more about member filtering, [`refer`](./filtering) here.

![Filter icon besides each field](images/fieldlist_filtericon.webp)
<br/>
![Filter dialog to either include or exclude members](images/fieldlist_editor.webp)
<br/>
![Resultant pivot table on filtering members](images/fieldlist_filteringgrid.webp)

## Sorting members

Using the sort icon besides each field in row and column axes, members can be arranged either in ascending or descending order at runtime. To know more about member sorting, [`refer`](./sorting) here.

![Sort icon besides each field](images/fieldlist_sorticon.webp)
<br/>
![Resultant pivot table showing countries in descending order](images/fieldlist_sortgrid.webp)

## Calculated fields

The calculated field support allows end user to add a new calculated field based on the available fields from the bound data source using basic arithmetic operators. To enable this support in Field List UI, set the [`allowCalculatedField`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowcalculatedfield) property to **true** in pivot table. Now a button will be seen automatically inside the field list UI which will invoke the calculated field dialog on click. To know more about calculated field, [`refer`](./calculated-field) here.

![Enabling calculated field in field list UI](images/gs_calc_button.webp)
<br/>
![Creating new calculated field](images/gs_calc_dialog.webp)
<br/>
![New calculated field Total Amount added in pivot table](images/gs_calc_grid.webp)

## Changing aggregation type of value fields at runtime

End user can perform calculations over a group of values using the aggregation option. The value fields bound to the field list, appears with a dropdown icon, helps to select an appropriate aggregation type at runtime. On selection, the values in the Pivot Table will be changed dynamically. To know more about aggregation, [`refer`](./aggregation) here.

![Icon to change aggregation type](images/aggregation_fl_icon.webp)
<br/>
<br/>
![List of pre-defined aggregation types](images/fieldlist_aggregation_avg.webp)
<br/>
![Resultant pivot table showing average aggregation type applied in Unit Sold value field](images/fieldlist_aggregation_grid.webp)

## Defer layout update

Defer layout update support to update the pivot table only on demand and not during every user action. To enable this support in Field List UI, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowdeferlayoutupdate) property to **true** in pivot table. Now a check box inside Field List UI will be seen in checked state, allowing pivot table to update only on demand. To know more about defer layout, [`refer`](./defer-update) here.

![output](images/fieldlist_deferupdate.webp)

## Show field list using toolbar

It can also be viewed in toolbar by setting [`showFieldList`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowdeferlayoutupdate) and [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowdeferlayoutupdate) properties in pivot table to **true**. Also, include the item **FieldList** within the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowdeferlayoutupdate) property in pivot table. When toolbar is enabled, field list icon will be automatically added into the toolbar and the icon won't appear on top left corner in the pivot table component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs39/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs39/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs39" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs39/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs39/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs39" %}
{% endif %}

## Invoking dynamic Field List (Customized)

Also, you can display the field list dialog independently through other means. For example, you can invoke the field list dialog on an external button click. To do so, set `renderMode` property to `Popup` and  since on button click, field list dialog will be invoked.

> * Meanwhile, you can display the field list dialog over specific target element within a webpage using `target` property. By default, the `target` value is "null", which by default refers the `document.body` element.
> * To make field list interact with pivot table, you need to use the **updateView** and **update** methods for data source update in both field list and pivot table simultaneously.

The below sample code illustrates the field list dialog invoked on an external button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/popup-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/popup-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/popup-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/popup-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/popup-cs1" %}
{% endif %}

## Set caption to fields which isn’t bound to the report

One can set the caption to all fields from the data source even if it is not bound to the actual report. It can be achieved using the [`enginePopulated`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#enginepopulated) event. On doing so, caption of the respective field will be displayed in both grouping bar and field list.

In the sample, we have set caption to the fields `Year` and `Quarter` dynamically.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/popup-field-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/popup-field-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/popup-field-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/popup-field-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/popup-field-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/popup-field-list-cs1" %}
{% endif %}

## Events

### EnginePopulated

The [`EnginePopulated`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#enginepopulated) event is available in both Pivot Table and Field List.

* The event [`EnginePopulated`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#enginepopulated) is triggered in field list whenever the report gets modified. The updated report is passed to the pivot table via [`UpdateView`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#updateview) method written within this event to refresh the same.

* Likewise, [`EnginePopulated`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#enginepopulated) event is triggered in pivot table whenever the report gets modified. The updated report is passed to the field list via [`Update`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#update) method written within this event to refresh the same.

The event [`EnginePopulated`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#enginepopulated) is triggered after engine is populated. It has following parameters - `dataSourceSettings`, `pivotFieldList` and `pivotValues`.

>Note: This event is not required for Popup field list since it is a in built one.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/field-list-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/field-list-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/field-list-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/field-list-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/field-list-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/field-list-cs3" %}
{% endif %}

### FieldListRefreshed

The event [`FieldListRefreshed`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#fieldlistrefreshed) is triggered whenever there is any change done in the field list UI. It has following parameter - `dataSourceSettings` and `pivotValues`. It allows user to identify each field list update. This event is applicable only for static field list.

For example, if we perform a sort operation within the field list, the field list will be refreshed. The [`fieldListRefreshed`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#fieldlistrefreshed) event will be triggered at that time and the user can perform custom operation inside that event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs40/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs40/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs40" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs40/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs40/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs40" %}
{% endif %}

### FieldDropped

The event [`onFieldDropped`](https://ej2.syncfusion.com/javascript/documentation/api/pivotfieldlist/index-default#onfielddropped) fires whenever a field is dropped in an axis. It has following parameters - `droppedAxis`, `DroppedField` and `DataSourceSettings`. In this illustration, we have modified the `DroppedField` caption through this event at runtime.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs41/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs41/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs41" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs41/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs41/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs41" %}
{% endif %}

## See Also

* [Improve filter dialog performance when handling large data](./how-to/improve-filter-dialog-performance-when-handling-large-data)
* [Customize the icons for pivot table](./how-to/customize-the-icons-for-pivot-table)