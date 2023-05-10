---
layout: post
title: Candle in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Candle in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Candle 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Candle in ##Platform_Name## Chart control

## Candle

Candle series is similar to Hilo Open Close series, are used to represent the low, high, open and closing price over time. To render a candle series, use series [`type`](../api/chart/seriesModel/#type-string) as `Candle` and inject `CandleSeries` module using `Chart.Inject(CandleSeries)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs87/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs87/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs87" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs87/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs87/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs87" %}
{% endif %}

## Hollow Candles

Candle charts allow to visually compare the current price with previous price by coloring them.

Candles are filled/left as hollow based on the following criteria.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>States</b></td>
<td><b>Description </b></td>
</tr>
<tr>
<td>Filled</td>
<td>candle sticks are filled when the close value is lesser than the open value</td>
</tr>
<tr>
<td>Unfilled</td>
<td>candle sticks are unfilled when the close value is greater than the open value</td>
</tr>
</table>

The color of the candle will be defined by comparing with previous values. Bear color will be applied when the current closing value is greater than the previous closing value. Bull color will be applied when the current closing value is less than the previous closing value.

By default, bullFillColor is set as red and bearFillColor is set as green.

## Solid Candles

[`enableSolidCandles`](../api/chart/seriesModel/#enableSolidCandles-string) is used to enable/disable the solid candles. By default is set to be false. The fill color of the candle will be defined by its opening and closing values.

[`bearFillColor`](../api/chart/seriesModel/#bearFillColor-string) will be applied when the opening value is less than the closing value.
[`bullFillColor`](../api/chart/seriesModel/#bullFillColor-string) will be applied when the opening value is greater than closing value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-types-cs88/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs88/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs88" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-types-cs88/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-types-cs88/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-types-cs88" %}
{% endif %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)