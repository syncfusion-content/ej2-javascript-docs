---
layout: post
title: 100% Stacked Bar Chart in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about 100% stacked bar chart in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# 100% Stacked bar chart in ##Platform_Name## 3D Chart control

## 100% Stacked bar chart

To render a [100% stacked bar](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/100-stacked-bar-chart) series, use series [`type`](../../api/chart3d/series3DModel/#type) as `StackingBar100` and inject `StackingBarSeries3D` module using `Chart3D.Inject(StackingBarSeries3D)` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/stacked-bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/stacked-bar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs1" %}
{% endif %}

## 100% Cylindrical stacked bar chart

To render a cylindrical 100% stacked bar chart, set the [`columnFacet`](../../api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/stacked-bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/stacked-bar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs2" %}
{% endif %}

## Series customization

The following properties can be used to customize the `100% stacked bar` series.

* [fill](../../api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](../../api/chart3d/series3DModel/#fill) color.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/stacked-bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/stacked-bar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/stacked-bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/stacked-bar-cs3" %}
{% endif %}
