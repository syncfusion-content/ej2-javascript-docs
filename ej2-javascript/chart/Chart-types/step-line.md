---
layout: post
title: Step line in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Step line in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Step line 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Step line Chart in ##Platform_Name## control

## Step line

To render a step line series, use series [`type`](../../api/chart/seriesModel/#type-string) as `StepLine` and inject `StepLineSeries` module using `Chart.Inject(StepLineSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs157/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs157/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs157" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs157/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs157/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs157" %}
{% endif %}

## Series customization

The following properties can be used to customize the `step line` series.

* [fill](../../api/chart/seriesModel/#fill-string) – Specifies the color of the series.
* [opacity](../../api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](../../api/chart/seriesModel/#fill-string).
* [dashArray](../../api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](../../api/chart/seriesModel/#width) – Specifies the width for series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs158/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs158/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs158" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs158/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs158/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs158" %}
{% endif %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)