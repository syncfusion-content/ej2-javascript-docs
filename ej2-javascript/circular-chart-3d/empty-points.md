---
layout: post
title: Empty points in ##Platform_Name## 3D Circular Chart control | Syncfusion
description: Learn here all about Empty points in Syncfusion ##Platform_Name## 3D Circular Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Empty points 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Empty points in ##Platform_Name## 3D Circular Chart control

Data points containing `null` or `undefined` values are considered empty points. These empty data points are ignored and not plotted in the 3D Circular Chart. You can customize the handling of empty points using the `emptyPointSettings` property in the series. The default mode for empty points is `Gap`. Other supported modes include `Average`, `Drop` and `Zero`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-points" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-points/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-points" %}
{% endif %}

## Customization

Specific color for an empty point can be set by using the `fill` property in `emptyPointSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-point-custom" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/pie-donut/empty-point-custom/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/pie-donut/empty-point-custom" %}
{% endif %}