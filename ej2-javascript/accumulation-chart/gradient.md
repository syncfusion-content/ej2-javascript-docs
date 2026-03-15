---
layout: post
title: Gradient in ##Platform_Name## Accumulation chart control | Syncfusion
description: Learn here all about Gradient in Syncfusion ##Platform_Name## Accumulation chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Gradient
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Gradient in ##Platform_Name## Accumulation chart control

Gradients add depth and modern styling to charts by smoothly blending multiple colors. The Charts component supports two gradient types:

- Linear gradient
- Radial gradient

## Linear gradient

A linear gradient blends colors along a straight path from a defined start point to an end point. In accumulation charts, a linear gradient can be applied either to the whole series or to each point via the pointRender event. An `linearGradient` is configured with one or more color stops.

The linear gradient properties are:

- `x1` - Horizontal start position of the gradient (0 to 1).
- `y1` - Vertical start position of the gradient (0 to 1).
- `x2` - Horizontal end position of the gradient (0 to 1).
- `y2` - Vertical end position of the gradient (0 to 1).

Properties for `gradientColorStop`:

- `offset` - Position along the gradient (0 to 100).
- `color` - Base color at the stop.
- `opacity` - Transparency (0 to 1).
- `lighten` - Adjusts lightness (positive lightens, negative darkens).
- `brighten` - Adjusts brightness (positive increases, negative decreases).

### Apply gradient to the entire series

A linear gradient may be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-gradient-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-gradient-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs5" %}
{% endif %}

### Apply a gradient per point using the point render event

A diagonal linear gradient can be applied per data point using the pointRender event for a clear light-to-shadow transition.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-gradient-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-gradient-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs6" %}
{% endif %}

## Radial gradient

### Apply a radial gradient to the entire series

A radial gradient can be applied directly at the series level. The same gradient is applied uniformly to all data points, legend symbols and tooltip markers.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-gradient-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-gradient-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs7" %}
{% endif %}

### Apply a radial gradient per point using the point render event

The following example uses a distinct color palette and an off-center radial gradient to create a clear light-to-shadow effect on each data point. The gradient is configured in pointRender, so each data point receives its own radial gradient derived from its base color.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/chart-gradient-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/chart-gradient-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/chart-gradient-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/chart-gradient-cs8" %}
{% endif %}