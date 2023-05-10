---
layout: post
title: Cross hair in ##Platform_Name## Stock chart control | Syncfusion
description: Learn here all about Cross hair in Syncfusion ##Platform_Name## Stock chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Cross hair 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair in ##Platform_Name## Stock chart control

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](../api/chart/crosshairSettingsModel/#enable) property in the `crosshair`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs12" %}
{% endif %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](../api/chart/crosshairTooltipModel/#enable) property of `crosshairTooltip` in the corresponding axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs13" %}
{% endif %}

## Customization

The [`fill`](../api/chart/crosshairTooltipModel/#fill) and [`textStyle`](../api/chart/crosshairTooltipModel/#textstyle) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](../api/chart/crosshairSettingsModel/#line) property in the crosshair.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs14" %}
{% endif %}

>Note: To use crosshair feature, we need to inject `Crosshair` module `StockChart.Inject(Crosshair)` method.
