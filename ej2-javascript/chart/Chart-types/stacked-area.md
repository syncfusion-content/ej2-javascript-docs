---
layout: post
title: Stacked area in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Stacked area in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stacked area 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Stacked area in ##Platform_Name## Chart control

## 100% Stacked Area

To render a [100% stacked area](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/100-stacked-area-chart) series, use series [`type`](../api/chart/seriesModel/#type-string) as `StackingArea100` and inject `StackingAreaSeries` module using `Chart.Inject(StackingAreaSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs145/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs145/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs145" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs145/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs145/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs145" %}
{% endif %}

## Series customization

The following properties can be used to customize the `100% stacked area` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs146/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs146/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs146" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs146/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs146/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs146" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
