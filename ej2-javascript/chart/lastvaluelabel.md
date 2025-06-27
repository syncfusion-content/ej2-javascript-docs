---
layout: post
title: Last value label in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Last value label in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Last value label
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Last value label in ##Platform_Name## Chart control

The `lastValueLabel` in a chart allows you to easily display the value of the last data point in a series. This feature provides an intuitive way to highlight the most recent or last data value in a series on your chart.

## Enable last value label

To show the last value label, make sure the `enable` property inside the `lastValueLabel` settings is set to `true` within the series configuration. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/last-value-label/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/last-value-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/last-value-label/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/last-value-label/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label" %}
{% endif %}

>Note: To use the last value label feature, we need to inject `LastValueLabel` module using Chart.Inject(LastValueLabel).

## Customization

The appearance of the last value label can be customized using style properties such as `font`, `background`, `border`, `dashArray`, `lineWidth`, `lineColor`, `rx`, and `ry` in the lastValueLabel property of the chart series. These settings allow you to tailor the label’s look to align with your desired visual presentation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/last-value-label-customization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/last-value-label-customization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label-customization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/last-value-label-customization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/last-value-label-customization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/last-value-label-customization" %}
{% endif %}

