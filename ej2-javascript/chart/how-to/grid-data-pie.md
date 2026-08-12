---
layout: post
title: How to visualize grid records in pie chart in ##Platform_Name## Chart | Syncfusion
description: Learn here all about Grid data pie in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to visualize grid records in pie chart in ##Platform_Name## Chart

You can visualize the filtered data that returned by grid in pie chart.

To visualize the data in pie chart, follow the given steps:

**Step 1**:

Initialize the grid with datasource.

**Step 2**:

By using the grid’s `actionComplete` event and `getCurrentViewRecords` method, you can get the current page records. By setting `allowFiltering` value as `true`, you can filter the data. By using the grid’s `databound` event, you can update the current page filtered records into the chart’s datasource and display the grid filtered data in chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/grid-visual-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/grid-visual-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/grid-visual-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/grid-visual-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/grid-visual-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/grid-visual-cs3" %}
{% endif %}