---
layout: post
title: Pare to in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Pare to in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Pare to 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Pare to in ##Platform_Name## Chart control

## Pareto

Pareto charts are used to find the cumulative values of data in different categories. It is a combination of Column and Line series.
The initial values are represented by column chart and the cumulative values are represented by Line chart. To render a pareto chart, use series [`type`](../api/chart/seriesModel/#type) as `Pareto` and inject `ParetoSeries` `ColumnSeries` and  `LineSeries` module using `Chart.Inject(ParetoSeries, LineSeries, ColumnSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs107/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs107/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs107" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs107/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs107/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs107" %}
{% endif %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)