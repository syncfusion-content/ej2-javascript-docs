---
layout: post
title: Axis labels in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about axis labels in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Axis labels in ##Platform_Name## 3D Chart control

Axis labels are the labels that are positioned adjacent to the y-axis and beneath the x-axis. It provides descriptive information about the axis.

## Smart axis labels

When the axis labels overlap with each other, [`labelIntersectAction`](../api/chart3d/axis3D/#labelintersectaction) property in the axis can be used to place them smartly.

When setting `labelIntersectAction` as `Hide`

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/axis-labels-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/axis-labels-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs1" %}
{% endif %}

When setting `labelIntersectAction` as `Rotate45`

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/axis-labels-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/axis-labels-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs2" %}
{% endif %}

When setting `labelIntersectAction` as `Rotate90`

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/axis-labels-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/axis-labels-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs3" %}
{% endif %}

## Edge label placement

Labels with long text at the edges of an axis may appear partially in the chart. To avoid this,
use [`edgeLabelPlacement`](../api/chart3d/axis3D/#edgelabelplacement) property in axis, which moves the label inside the chart area for better appearance or hides it.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/axis-labels-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/axis-labels-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs4" %}
{% endif %}

## Maximum labels

The labels will be rendered based on the count in the [`maximumLabels`](../api/chart3d/axis3D/#maximumlabels) property per 100 pixel. If the range (minimum, maximum, interval) and maximumLabels are set, then the priority goes to range. If the range is not set, then it gives priority to maximumLabels property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/axis-labels-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/axis-labels-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/axis-labels-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/axis-labels-cs5" %}
{% endif %}