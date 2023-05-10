---
layout: post
title: Area in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Area in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Area 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Area in ##Platform_Name## Chart control

## Area

To render a [area series](https://www.syncfusion.com/javascript-ui-controls/js-charts/chart-types/area-chart), use series [`type`](../api/chart/seriesModel/#type-string) as `Area` and inject `AreaSeries` module using `Chart.Inject(AreaSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs73/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs73" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs73/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs73/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs73" %}
{% endif %}

## Multicolored area

To render a multicolored area series, use the series type as `MultiColoredArea`, and inject the `MultiColoredAreaSeries` module using `Chart.Inject(MultiColoredAreaSeries)` method. The required `segments` of the series can be customized using the `value`, `color`, and `dashArray`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs74/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs74/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs74" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs74/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs74/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs74" %}
{% endif %}

## Series customization

The following properties can be used to customize the `area` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs75/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs75" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs75/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs75/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs75" %}
{% endif %}

## Area border

The following properties can be used to customize the `area` series.

* [fill](../api/chart/seriesModel/#fill) – Specifies the color of the area series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes of series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs76" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs76/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs76/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs76" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
