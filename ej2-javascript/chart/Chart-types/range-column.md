---
layout: post
title: Range column in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Range column in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Range column 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Range column in ##Platform_Name## Chart control

## Range Column

To render a range column series, use series [`type`](../api/chart/seriesModel/#type-string) as `RangeColumn` and inject `RangeColumnSeries` module using `Chart.Inject(RangeColumnSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs123/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs123/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs123" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs123/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs123/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs123" %}
{% endif %}

## Series customization

The following properties can be used to customize the `range column` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.
* [border](../api/chart/borderModel/#properties) – Specifies the [color](../api/chart/borderModel/#color) and [width](../api/chart/borderModel/#width) of series border.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs124/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs124/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs124" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs124/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs124/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs124" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
