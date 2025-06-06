---
layout: post
title: Filter in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Filter in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Filtering helps you to view specific rows in the spreadsheet by hiding the other rows. You can use the [`allowFiltering`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property to enable or disable filtering functionality.

{% elsif page.publishingplatform == "javascript" %}

Filtering helps you to view specific rows in the spreadsheet by hiding the other rows. You can use the [`allowFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property to enable or disable filtering functionality.

{% endif %}

> * The default value for `allowFiltering` property is `true`.

By default, the `Filter` module is injected internally into Spreadsheet to perform filtering.

## Apply filter on UI

In the active sheet, select a range of cells to filter by value of the cell. The filtering can be done by any of the following ways:

* Select the filter item in the Ribbon toolbar.
* Right-click the sheet, select the filter item in the context menu.
{% if page.publishingplatform == "typescript" %}

* Use the [`applyFilter()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter) method programmatically.

{% elsif page.publishingplatform == "javascript" %}

* Use the [`applyFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method programmatically.

{% endif %}

* Use `Ctrl + Shift + L` keyboard shortcut to apply the filter.

> * Use `Alt + Up/Down` keyboard shortcut to open the filter dialog.

## Filter by criteria

{% if page.publishingplatform == "typescript" %}

The [`applyFilter()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter) method will apply the filter UI, based on the predicate and range given in the arguments.

> * The [`beforeFilter`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#beforefilter) event will be triggered before filtering the specified range.
> * The [`filterComplete`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#filtercomplete) event will be triggered after the filter action is completed successfully.

{% elsif page.publishingplatform == "javascript" %}

The [`applyFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method will apply the filter UI, based on the predicate and range given in the arguments.

> * The [`beforeFilter`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#beforefilter) event will be triggered before filtering the specified range.
> * The [`filterComplete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#filtercomplete) event will be triggered after the filter action is completed successfully.

{% endif %}

The following code example shows `filter` functionality in the Spreadsheet control.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs1" %}
{% endif %}

## Filter by cell value

To apply a filter for a cell value, right-click the cell and choose filter -> `Filter By Selected Cell's Value` option from the menu. It applies the filter based on the value of the selected cell in the current sheet.

## Clear filter

After applying filter to a certain column, you may want to clear it to make all filtered rows visible again. It can be done in the following ways,

* Choose `Clear` option in ribbon toolbar under `Filter and Sort`. It clears the filters applied in the spreadsheet for all fields.

{% if page.publishingplatform == "typescript" %}

* Use the [`clearFilter()`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#clearfilter) method programmatically, to clear the applied filters in spreadsheet for all fields.

{% elsif page.publishingplatform == "javascript" %}

* Use the [`clearFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#clearfilter) method programmatically, to clear the applied filters in spreadsheet for all fields.

{% endif %}

## Clear filter on a field

After filtering, you can clear/reset the filter for a field alone. It can be done in the following ways,

* Click filter icon in the column’s header and then choose `Clear Filter` option from the filter dialog.
* You can right-click on a filtered column cell and choose `Clear Filter from <Column Name>.` option from the context menu.

{% if page.publishingplatform == "typescript" %}

* Use the [`clearFilter(field)`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#clearfilter) method programmatically, to clear the filter in a particular column.

{% elsif page.publishingplatform == "javascript" %}

* Use the [`clearFilter(field)`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#clearfilter) method programmatically, to clear the filter in a particular column.

{% endif %}

## Reapply filter

When you want to reapply the filter after some changes happened in the rows. It can be done in the following ways,

* You can choose `Reapply` option in ribbon toolbar under `Filter and Sort` to reapply the filtered columns again.
* You can right-click on a filtered cell and choose `Reapply` option from the context menu. It reapplies the filters again in the Spreadsheet for all the fields.

## Known error validations

The following errors have been handled for filtering,
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No filter will be performed if the range is invalid.

## Get data from filtered rows

{% if page.publishingplatform == "typescript" %}

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [allowFiltering](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowfiltering) property and [applyFilter](https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

{% elsif page.publishingplatform == "javascript" %}

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property and [applyFilter](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

{% endif %}

The following code example shows how to get the filtered rows.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/filter-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/filter-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/filter-cs2" %}
{% endif %}

## Limitations

The following features have some limitations in Filter:

* Insert/delete row/column between the filter applied cells.
* Merge cells with filter.
* Copy/cut paste the filter applied cells.

## See Also

* [Sorting](./sort)
* [Hyperlink](./link)
* [Undo Redo](./undo-redo)