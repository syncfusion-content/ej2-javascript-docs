---
layout: post
title: Gauge appearance in ##Platform_Name## Circular gauge control | Syncfusion
description: Learn here all about Gauge appearance in Syncfusion ##Platform_Name## Circular gauge control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Gauge appearance 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gauge appearance in ##Platform_Name## Circular gauge control

## Gauge Title

Circular gauge can be given a title by using [`title`](../api/circular-gauge/#title-string) property, to show the information about the gauge.
Title can be customized by using [`titleStyle`](../api/circular-gauge/#titlestyle-fontmodel) property in gauge.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs1" %}
{% endif %}

## Gauge Position

Gauge can be positioned anywhere in the container with the help of [`centerX`](../api/circular-gauge/#centerx-string) and [`centerY`](../api/circular-gauge/#centery-string) property and it accepts values either in percentage or in pixels.
The default value of the [`centerX`](../api/circular-gauge/#centerx-string) and
[`centerY`](../api/circular-gauge/#centery-string) property is 50%, which means gauge will get rendered to the centre of the container.

**In Pixel**

You can set the mid point of the gauge in pixel as demonstrated below,

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs2" %}
{% endif %}

**In Percentage**

By setting the value in percentage, gauge gets its mid point with respect to its plot area.
For example, when the [`centerX`](../api/circular-gauge/#centerx-string) value as '0%' and [`centerY`](../api/circular-gauge/#centery-string) value is ‘50%’, gauge will get positioned at the top left corner of the plot area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs3" %}
{% endif %}

## Area Customization

**Customize the gauge background**

Using [`background`](../api/circular-gauge/#background-string) and [`border`](../api/circular-gauge/#border-bordermodel) properties, you can change the background color and border of the circular gauge.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs4" %}
{% endif %}

**Gauge Margin**

You can set margin for gauge from its container through [`margin`](../api/circular-gauge/#margin-marginmodel) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs5" %}
{% endif %}

## Radius calculation based on angles

Render semi or quarter circular gauges by modifying the start and end angles. By enabling the radius based on angle option, the radius of circular gauge will be calculated based on the start and end angles to avoid excess white space.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-gauge/gauge-appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-gauge/gauge-appearance-cs6" %}
{% endif %}