---
layout: post
title: Strip line in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Strip line in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Strip line 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Strip line in ##Platform_Name## Chart control

<!-- markdownlint-disable MD036 -->

EJ2 chart supports horizontal and vertical strip lines and customization of stripline in both orientation. To use strip line in axis, we need to inject `StripLine` module using `Chart.Inject(StripLine)` method

## Horizontal Strip lines

You can create Horizontal stripline by adding the `stripline` in the vertical axis and set `visible` option to true. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs92/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs92/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs92" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs92/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs92/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs92" %}
{% endif %}

## Vertical Striplines

You can create vertical stripline by adding the`stripline` in the horizontal axis and set `visible` option to true. Striplines are rendered in the specified start to end range and you can add more than one stripline for an axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs93/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs93/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs93" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs93/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs93/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs93" %}
{% endif %}

## Customize the strip line

Starting value in specific strip line can be customized by `start` property in strip line. Similarly, ending value is customized by `end`. It can be also set for starting from the corresponding origin of the axis by `startFromOrigin`. Size of the strip line is customized by `size`. Border for the stripline is customized by `border`. Order of the strip line such that whether it should be rendered in behind or over the series elements is customized by `zIndex`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs94/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs94/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs94" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs94/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs94/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs94" %}
{% endif %}

## Customize the stripline text

You can customize the text rendered in stripline by `textStyle` property. Rotation of the strip line text can be changed by `rotation` property.
Horizontal and Vertical alignment of stripline text can be changed by `horizontalAlignment` and `verticalAlignment` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs95/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs95/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs95" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs95/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs95/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs95" %}
{% endif %}

## See Also

* [Mark the threshold in chart](./how-to/#mark-a-threshold-in-chart)