---
layout: post
title: Classic layout in ##Platform_Name## Pivotview control | Syncfusion
description: Learn here all about Classic layout in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Classic Layout 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in ##Platform_Name## Pivot Table control

N> The classic layout is compatible only with relational data sources and operates in both client-side and server-side engines.

The classic layout in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table offers a structured, tabular presentation of data, improving both readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings/#layout) property in the [gridSettings](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings/) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/classic-layout-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/classic-layout-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/classic-layout-cs2" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.
