---
layout: post
title: Bar Chart in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about bar chart in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Bar Chart in ##Platform_Name## 3D Chart control

## Bar chart

To render a [bar series](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/bar-chart), use series [`type`](../../api/chart3d/series3DModel/#type) as `Bar` and inject `BarSeries3D` module using `Chart3D.Inject(BarSeries3D)` method.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/bar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs1" %}
{% endif %}

## Bar space and width

The [`columnSpacing`](../../api/chart3d/series3DModel/#columnspacing) and [`columnWidth`](../../api/chart3d/series3DModel/#columnwidth) properties are used to customize the space between bars.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/bar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs2" %}
{% endif %}

## Grouped bar

The data points can be grouped in the bar type charts by using the [`groupName`](../../api/chart3d/series3DModel/#groupname) property. Data points with same group name are grouped together.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/bar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs3" %}
{% endif %}

## Cylindrical bar chart

To render a cylindrical bar chart, set the [`columnFacet`](../../api/chart3d/series3DModel/#columnfacet) property to `Cylinder` in the chart series.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/bar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/bar-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs4" %}
{% endif %}

## Series customization

The following properties can be used to customize the `bar` series.

* [fill](../../api/chart3d/series3DModel/#fill) – Specifies the color of the series.
* [opacity](../../api/chart3d/series3DModel/#opacity) – Specifies the opacity of the [fill](../../api/chart3d/series3DModel/#fill) color.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/bar-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/bar-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/bar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/bar-cs5" %}
{% endif %}
