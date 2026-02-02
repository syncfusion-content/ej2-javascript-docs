---
layout: post
title: Row Spanning in ##Platform_Name## Gantt Chart Control | Syncfusion
description: Learn here all about row spanning in Syncfusion ##Platform_Name## Gantt Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Row Spanning
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Row Spanning in ##Platform_Name## Gantt Chart Control

The Syncfusion<sup style="font-size:70%">&reg;</sup> ##Platform_Name## Gantt Chart control supports row cell spanning, allowing multiple cells in a row to merge into a single cell. This is useful for displaying shared information across rows without duplication.

To enable row spanning, use the [rowSpan](../api/gantt/queryCellInfoEventArgs#rowspan) attribute inside the [queryCellInfo](../api/gantt#querycellinfo) event. This event is triggered for each grid cell, where you can define the number of rows a cell should span based on its data.

In the example below, the **Soil test approval** cell spans across two rows in the **TaskName** column.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt/rows-span/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-span/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-span" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt/rows-span/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/rows-span/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/rows-span" %}
{% endif %}

> * You can use both [rowSpan](../api/gantt/queryCellInfoEventArgs#rowspan) and [colSpan](../api/gantt/queryCellInfoEventArgs#colspan) together to merge grid cells vertically and horizontally.
