---
layout: post
title: Chart appearance in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about chart appearance in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Chart appearance in ##Platform_Name## 3D Chart control

## Custom color palette

The default color of series or points can be customized by providing a custom color palette of your choice by using the [`palettes`](../api/chart3d/chart3DModel/#palettes) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs1" %}
{% endif %}

## Data point customization

The color of an individual data point can be customized using the options below.

### Point color mapping

The color for the points can be bound from the [`dataSource`](../api/chart3d/series3D/#datasource) for the series by utilizing the [`pointColorMapping`](../api/chart3d/series3D/#pointcolormapping) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs2" %}
{% endif %}

## Point level customization

The data label and fill color of each data point can be customized using the [`pointRender`](../api/chart3d/i3DPointRenderEventArgs/) and [`textRender`](../api/chart3d/i3dtextrendereventargs/) events.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs3" %}
{% endif %}

<!-- markdownlint-disable MD036 -->

## Chart area customization

<!-- markdownlint-disable MD036 -->

**Customize the chart background**

The background color and border of the chart can be customized using the [`background`](../api/chart3d/chart3DModel/#background) and [`border`](../api/chart3d/chart3DModel/#border) properties.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs4" %}
{% endif %}

**Chart margin**

The chart's margin can be set from its container using the [`margin`](../api/chart3d/chart3DModel/#margin) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs5" %}
{% endif %}

## Animation

To customize the animation for a particular series, the [`animation`](../api/chart3d/series3D/#animation) property can be used. It can be enabled or disabled by using [`enable`](../api/chart3d/animationModel/#enable) property. The [`duration`](../api/chart3d/animationModel/#duration) property specifies the duration of an animation and [`delay`](../api/chart3d/animationModel/#delay) property allows us to start the animation at desire time.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs6" %}
{% endif %}

## Chart rotation

Chart can be rotated by using the [`enableRotation`](../api/chart3d/chart3DModel/#enablerotation) property in the chart.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs12" %}
{% endif %}

## Chart title

Chart can be given a title by using [`title`](../api/chart3d/chart3DModel/#title) property, to show the information about the data plotted.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs7" %}
{% endif %}

### Title position

By using the [`position`](../api/chart3d/titleSettingsModel/#position) property in [`titleStyle`](../api/chart3d/chart3DModel/#titlestyle), the [`title`](../api/chart/#title-string) can be positioned at left, right, top or bottom of the chart. The title is positioned at the top of the chart, by default.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs8 %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs8 %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs8" %}
{% endif %}

The custom option is used to position the title anywhere in the chart using [`x`](../api/chart3d/titleSettingsModel/#x) and [`y`](../api/chart3d/titleSettingsModel/#y) coordinates.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs9index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs9" %}
{% endif %}

### Title alignment

The title can be aligned to the near, far, or center of the chart by using the [`textAlignment`](../api/chart3d/titleSettingsModel/#textalignment) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs10" %}
{% endif %}

### Title customization

The [`titleStyle`](../api/chart3d/chart3DModel/#titlestyle) property of chart title provides options to customize the title by using the following properties.

* [`size`](../api/chart3d/titleSettingsModel/#size) - Specifies the size of the title.
* [`color`](../api/chart3d/titleSettingsModel/#color) - Specifies the color for the title. 
* [`fontFamily`](../api/chart3d/titleSettingsModel/#fontfamily) - Specifies the font family for the title.
* [`fontWeight`](../api/chart3d/titleSettingsModel/#fontweight) - Specifies the font weight of the title.
* [`fontStyle`](../api/chart3d/titleSettingsModel/#fontstyle) - Specifies the font style for the title.
* [`opacity`](../api/chart3d/titleSettingsModel/#opacity) - Specifies the opacity for the color of the title.
* [`textAlignment`](../api/chart3d/titleSettingsModel/#textalignment) - Specifies the alignment of the title.
* [`textOverflow`](../api/chart3d/titleSettingsModel/#textoverflow) - Specifies the overflow of the title.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/appearance-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/appearance-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/appearance-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/appearance-cs11" %}
{% endif %}
