---
layout: post
title: Stacked line in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Stacked line in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Stacked line 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Stacked line in ##Platform_Name## Chart control

## 100% Stacked Line

To render a 100% stacked line series, use series [`type`](../api/chart/seriesModel/#type-string) as `StackingLine100` and inject `StackingLineSeries` module using `Chart.Inject(StackingLineSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs151/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs151/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs151" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs151/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs151/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs151" %}
{% endif %}

## Series customization

The following properties can be used to customize the `100% stacked line` series.

* [fill](../api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../api/chart/seriesModel/#fill-string).
* [dashArray](../api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](/api/chart/seriesModel/#width) – Specifies the width for series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs152/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs152/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs152" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs152/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs152/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs152" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)
