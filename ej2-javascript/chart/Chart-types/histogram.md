---
layout: post
title: Histogram in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Histogram in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Histogram 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Histogram Chart in ##Platform_Name## control

## Histogram

Histogram type charts can provide a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet form. To render a histogram chart, use series [`type`](../../api/chart/seriesModel/#type-string) as `Histogram` and inject `HistogramSeries` module using `Chart.Inject(HistogramSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs103/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs103/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs103" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs103/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs103/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs103" %}
{% endif %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)