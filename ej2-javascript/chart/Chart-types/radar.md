---
layout: post
title: Radar in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Radar in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Radar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Radar in ##Platform_Name## Chart control

## Radar Chart

To render a radar series, use series [`type`](../api/chart/seriesModel/#type-string) as `Radar` and inject `PolarSeries` module using `Chart.Inject(RadarSeries)` method.

### Draw Type

similar to Polar drawType, Radar draw property is used to change the series plotting type to line, column, area, range column, spline, scatter, stacking area and stacking column. The default value of drawType is `Line`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs118/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs118/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs118" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs118/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs118/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs118" %}
{% endif %}

## Customization

### Start Angle

You can customize the start angle of the polar series using [`startAngle`](../api/chart/axis/#startangle-number) property. By default, `startAngle` is 0 degree.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs119/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs119/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs119" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs119/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs119/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs119" %}
{% endif %}

### Radius

You can customize the radius of the polar series using [`coefficient`](../api/chart/axis/#coefficient-number) property. By default, `coefficient` is 100.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs120/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs120/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs120" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs120/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs120/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs120" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
