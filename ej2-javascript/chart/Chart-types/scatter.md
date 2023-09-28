---
layout: post
title: Scatter in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Scatter in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Scatter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Scatter Chart in ##Platform_Name## control

## Scatter Charts

To render a scatter series, use series [`type`](../../api/chart/seriesModel/#type-string) as `Scatter` and inject `ScatterSeries` module using `Chart.Inject(ScatterSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs127/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs127/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs127" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs127/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs127/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs127" %}
{% endif %}

## Series customization

The following properties can be used to customize the `scatter` series.

* [fill](../../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../../api/chart/seriesModel/#fill).
* [shape](../../api/chart/chartShape/) - Specifies the shape of the scatter series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs128/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs128/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs128" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs128/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs128/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs128" %}
{% endif %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)
