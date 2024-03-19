---
layout: post
title: Legend in ##Platform_Name## 3D Circular Chart control | Syncfusion
description: Learn here all about legend in Syncfusion ##Platform_Name## 3D Circular Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Legend 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Legend in ##Platform_Name## 3D Circular Chart control

The legend provides information about the data points rendered in the 3D Circular Chart. It can be added by enabling the `visible` option in the `legendSettings` property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/legend/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend" %}
{% endif %}

>To use the legends feature, inject the `CircularChartLegend3D` using the `CircularChart3D.Inject(CircularChartLegend3D)` method.

## Position and alignment

By using the `position` property, the legend can be positioned at the `left`, `right`, `top` or `bottom` of the 3D Circular Chart. By default, the legend will be positioned to the right of the 3D Circular Chart. Additionally, you can align the legend to the `center`, `far` or `near` of the chart using the `alignment` property.
 
{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/position/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/position/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/position" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/position/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/position" %}
{% endif %}

## Legend reverse

You can reverse the order of the legend items by using the `reverse` property in `legendSettings`. By default, the legend for the first series in the collection will be placed first.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/reverse/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/reverse/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/reverse" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/reverse/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/reverse/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/reverse" %}
{% endif %}

## Legend shape

To change the legend shape, use the `legendShape` property in the `series`. By default, the legend shape is set to `seriesType`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-shape" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-shape/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-shape" %}
{% endif %}

## Legend size

The legend size can be changed by using the `width` and `height` properties in `legendSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-size" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-size/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-size" %}
{% endif %}

## Legend item size

The size of the legend items can be customized by using the `shapeHeight` and `shapeWidth` properties in `legendSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-size/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/item-size/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/item-size" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/item-size/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/item-size/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/item-size" %}
{% endif %}

## Legend paging

Paging will be enabled by default when the legend items exceed the legend bounds. Each legend item can be viewed by navigating between the pages using navigation buttons.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/paging/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/paging/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/paging" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/paging/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/paging/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/paging" %}
{% endif %}

## Legend text wrap

When the legend text exceeds the container, the text can be wrapped using the `textWrap` property in `legendSettings`. End users can also wrap the legend text based on the `maximumLabelWidth` property in `legendSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/text-wrap" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/text-wrap/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/text-wrap" %}
{% endif %}

## Legend title

You can set a title for the legend using the `title` property in `legendSettings`. The `size`, `color`, `opacity`, `fontStyle`, `fontWeight`, `fontFamily`, `textAlignment`, and `textOverflow` of the legend title can be customized using the `titleStyle` property in `legendSettings`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-title" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/legend-title/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/legend-title" %}
{% endif %}

## Arrow page navigation

The page number will always be visible when using legend paging. However, it is now possible to disable the page number and enable page navigation with the left and right arrows. To render the arrow page navigation, set the `enablePages` property to **false**.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/arrow-page" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/arrow-page/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/arrow-page" %}
{% endif %}

## Legend item padding

The `itemPadding` property can be used to adjust the space between the legend items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/item-padding" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/circular-chart/user-interaction/item-padding/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/circular-chart/user-interaction/item-padding" %}
{% endif %}
