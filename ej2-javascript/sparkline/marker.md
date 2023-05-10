---
layout: post
title: Marker in ##Platform_Name## Sparkline control | Syncfusion
description: Learn here all about Marker in Syncfusion ##Platform_Name## Sparkline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Marker 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Marker in ##Platform_Name## Sparkline control

This section explains how to add markers to the sparklines.

## Adding marker to the sparkline

To add marker to the sparkline, specify the `visible` of `markerSettings` as following values. The `visible` will accept multiple values too.

* All - Enables markers for all points.
* Start - Enables marker for the start point.
* End - Enables marker for the end point.
* High - Enables marker for the high point.
* Low - Enables marker for the low point.
* Negative - Enables markers for the negative points.

The following code example shows enabling markers for all points.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/marker-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/marker-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs1" %}
{% endif %}

## Adding marker to special point

In sparkline, markers can be enabled for particular points such as the start, end, low, high, or negative. The following code examples shows enabling markers for the high and low points.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/marker-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/marker-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs2" %}
{% endif %}

## Customizing markers

Sparkline markers can be customized in terms of fill color, border color, width, opacity, and size. The following code example shows customizing marker's fill, border, and size.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/marker-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/marker-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/marker-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/marker-cs3" %}
{% endif %}