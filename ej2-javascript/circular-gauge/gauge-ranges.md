---
layout: post
title: Gauge ranges in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Gauge ranges in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Gauge ranges 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---


# Gauge ranges in ##Platform_Name## Circular gauge control

You can categories certain interval on gauge axis using [`ranges`](../api/circular-gauge/range#properties) property.

## Start and End

Start and end value of a range in an axis can be customized by using [`start`](../api/circular-gauge/range#start-number) and [`end`](../api/circular-gauge/range#end-number) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs1" %}
{% endif %}

## Customization

Color and thickness of the range can be customized by using [`color`](../api/circular-gauge/range#color-string),[`startWidth`](../api/circular-gauge/range#startwidth-number) and [`endWidth`](../api/circular-gauge/range#endwidth-number) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs2" %}
{% endif %}

## Radius

You can place the range inside or outside of the axis by using [`radius`](../api/circular-gauge/range#radius-string) property. The radius of the range can takes value either in percentage or in pixels. By default, ranges
take 100% of the axis radius.

**In Pixel**

You can set the radius of the range in pixel as demonstrated below,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs3" %}
{% endif %}

**In Percentage**

By setting value in percentage, range gets its dimension with respect to its axis radius.For example, when the radius is ‘50%’, range renders to half of the axis radius.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs4" %}
{% endif %}

## Dragging Range

The ranges can be dragged over the axis line by clicking and dragging the same. To enable or disable the range drag, use the [`enableRangeDrag`](../api/circular-gauge/circularGaugeModel/#enablerangedrag) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-pointers-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-pointers-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-pointers-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-pointers-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-pointers-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-pointers-cs15" %}
{% endif %}

## Multiple Ranges

You can add multiple ranges to an axis with the above customization as demonstrated below.

>Note: You can set the range color to axis ticks and labels by enabling `useRangeColor` property in [`majorTicks`](../api/circular-gauge/tick),
[`minorTicks`](../api/circular-gauge/tick) and [`labelStyle`](../api/circular-gauge/label) object.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs5" %}
{% endif %}

## Rounded corner radius

You can customize the corner radius using the `roundedCornerRadius` property in `ranges`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs6" %}
{% endif %}

## Gradient Color

Gradient support allows to add multiple colors in the ranges and pointers of the circular gauge. The following gradient types are supported in the circular gauge.

* Linear Gradient
* Radial Gradient

### Linear Gradient

Using linear gradient, colors will be applied in a linear progression. The start value of the linear gradient will be set using the [`startValue`](../api/circular-gauge/linearGradient/#startvalue) property. The end value of the linear gradient will be set using the [`endValue`](../api/circular-gauge/linearGradient/#endvalue) property. The color stop values such as color, opacity and offset are set using [`colorStop`](../api/circular-gauge/linearGradient/#colorstop) property.

To apply linear gradient to the range, follow the below code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs7" %}
{% endif %}

### Radial Gradient

Using radial gradient, colors will be applied in circular progression. The inner circle position of the radial gradient will be set using the [`innerPosition`](../api/circular-gauge/radialGradient/#innerposition) property. The outer circle position of the radial gradient can be set using the [`outerPosition`](../api/circular-gauge/radialGradient/#outerposition) property. The color stop values such as color, opacity and offset are set using [`colorStop`](../api/circular-gauge/radialGradient/#colorstop) property.

To apply radial gradient to the range, follow the below code sample.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-ranges-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-ranges-cs8" %}
{% endif %}

## See also

* [Tooltip for Ranges](https://ej2.syncfusion.com/documentation/circular-gauge/gauge-user-interaction/tooltip-for-ranges-and-annotations/)