---
layout: post
title: Drill through grid cell edit type in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Drill through grid cell edit type in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drill through grid cell edit type 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drill through grid cell edit type in ##Platform_Name## Pivotview control

Using the [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/#drillthrough) event in the pivot table, you can define the edit type of a particular column in the grid present inside the drill-through dialog. To do so, check the column name in the [`drillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/#drillthrough) event and then specify the edit type of that column using the [`gridColumns.editType`](https://ej2.syncfusion.com/documentation/api/grid/column/#edittype) event argument.

> The [`gridColumns.editType`](https://ej2.syncfusion.com/documentation/api/grid/column/#edittype) property must be set based on the column's data type. For example, the string data type will not be applicable for the numeric text box edit type.

* [`NumericTextBox`](https://ej2.syncfusion.com/documentation/numerictextbox/) control for integer, double, and decimal data types.
* [`TextBox`](https://ej2.syncfusion.com/documentation/textbox/) control for string data type.
* [`DropDownList`](https://ej2.syncfusion.com/documentation/drop-down-list/) control to show all unique values related to that field.
* [`CheckBox`](https://ej2.syncfusion.com/documentation/check-box/) control for boolean data type.
* [`DatePicker`](https://ej2.syncfusion.com/documentation/datepicker/) control for date data type.
* [`DateTimePicker`](https://ej2.syncfusion.com/documentation/datetimepicker/) control for date time data type.

In the below example, the data type of the `Country` column is set to `DropDownList`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs79/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs79/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs79" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs79/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs79/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs79" %}
{% endif %}