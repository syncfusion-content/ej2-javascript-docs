---
layout: post
title: Apply custom style to pivot cells in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Apply custom style to pivot cells in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Apply custom style to pivot cells 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Apply custom style to pivot cells

The [queryCellInfo](https://ej2.syncfusion.com/documentation/api/grid/#querycellinfo) event in [gridSettings](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings/) can be used to apply custom style to row and value cells, and the [headerCellInfo](https://ej2.syncfusion.com/documentation/api/grid/#headercellinfo) event in `gridSettings` can be used to apply custom styles to column cells.

In the following example, a custom style has been applied to the column header **"Sold Amount"** under **"FY 2015"** via the [headerCellInfo](https://ej2.syncfusion.com/documentation/api/grid/#headercellinfo) event and to the row header **"Germany"** and its aggregated value via the [queryCellInfo](https://ej2.syncfusion.com/documentation/api/grid/#querycellinfo) event by adding the **"e-custom"** class to the cell element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs492/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs492/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs492" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs492/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs492/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs492" %}
{% endif %}

N> The **dot(.)** character in **FY 2016.Sold Amount** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [headerDelimiter](https://helpej2.syncfusion.com/documentation/api/pivotview/valueSortSettingsModel/#headerdelimiter) in the [valueSortSettings](https://helpej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings/#valuesortsettings) property to any other delimiter instead of the default separator.