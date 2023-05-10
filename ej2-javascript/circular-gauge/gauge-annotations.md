---
layout: post
title: Gauge annotations in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Gauge annotations in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Gauge annotations 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gauge annotations in ##Platform_Name## Circular gauge control

Annotations are used to mark a specific area of interest in the gauge with texts, shapes or images.

## Content

You can place any custom element on the axis area by assigning the id of the element to [`content`](../api/circular-gauge/annotation#content-string) property of [`annotation`](../api/circular-gauge/annotation) object.

>Note: To use annotation feature, we need to inject `Annotations` module using `CircularGauge.Inject(Annotations)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs1" %}
{% endif %}

## Position

Annotation can be placed around the axis by using [`radius`](../api/circular-gauge/annotation#radius-string) and [`angle`](../api/circular-gauge/annotation#angle-number) property.
For example, if the angle is 90 degree and the radius is 110%, then the annotation, will be placed at the right side of the axis.

Radius of the annotation takes value either in pixel or percentage. By setting value in percentage, annotation gets its position with respect to its axis radius.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs2" %}
{% endif %}

## Sub Gauge

As the annotation allows you to place any custom element, we can initialize a gauge to the element and can be used to place that in another gauge.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-annotations-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-annotations-cs3" %}
{% endif %}

## See also

* [Tooltip for Annotation](https://ej2.syncfusion.com/documentation/circular-gauge/gauge-user-interaction/tooltip-for-ranges-and-annotations/)