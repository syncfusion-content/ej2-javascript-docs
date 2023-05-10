---
layout: post
title: Logarithmic axis in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Logarithmic axis in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Logarithmic axis 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in ##Platform_Name## Chart control

<!-- markdownlint-disable MD033 -->

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs74/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs74/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs74" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs74/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs74/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs74" %}
{% endif %}

>Note: To use log axis, we need to inject `Logarithmic` using method `Chart.Inject(Logarithmic)` and set the [`valueType`](../api/chart/axis/#valuetype-string) of axis to `Logarithmic`.

## Range

Range of an axis, will be calculated automatically based on the provided data, you can also customize the range of an axis using [`minimum`](../api/chart/axis/#minimum-object),[`maximum`](../api/chart/axis/#maximum-object) and [`interval`](../api/chart/axis/#interval-number) property of the axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs75/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs75" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs75/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs75/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs75" %}
{% endif %}

## Logarithmic Base

Logarithmic base can be customized by using the [`logBase`](../api/chart/axis/#logbase-number) property of the axis. For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup> etc.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs76" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs76/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs76/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs76" %}
{% endif %}

## Logarithmic Interval

Logarithmic axis interval can be customized by using the [`interval`](../api/chart/axis/#interval-number) property of the axis. When the logarithmic base is 10 and logarithmic interval is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the interval is 1.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs77/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs77/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs77" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs77/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs77/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs77" %}
{% endif %}
