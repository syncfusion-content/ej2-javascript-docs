---
layout: post
title: Range area in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Range area in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Range area 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Range area in ##Platform_Name## Chart control

## Range area

To render a range area series, use series [`type`](../api/chart/seriesModel/#type-string) as `RangeArea` and inject `RangeAreaSeries` module using `Chart.Inject(RangeAreaSeries)` method.

Since the RangeArea series requires two y values for a point, you have to add the high and low value. High and Low value specifies the maximum and minimum range of the points.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs121/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs121/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs121" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs121/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs121/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs121" %}
{% endif %}

## Series customization

The following properties can be used to customize the `range area` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs122/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs122/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs122" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs122/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs122/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs122" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
