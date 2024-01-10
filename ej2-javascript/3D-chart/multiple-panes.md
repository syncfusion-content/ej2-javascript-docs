---
layout: post
title: Multiple panes in ##Platform_Name## 3D Chart control | Syncfusion
description: Learn here all about multiple panes in Syncfusion ##Platform_Name## 3D Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: 3D Chart 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in ##Platform_Name## 3D Chart control

The chart area can be divided into multiple panes using [`rows`](../api/chart3d/chart3DModel/#rows) and [`columns`](../api/chart3d/chart3DModel/#columns).

## Rows

To split the chart area vertically into number of rows, use [`rows`](../api/chart3d/chart3DModel/#rows) property of the 3D chart.

* The space for each row can be allocated by using the [`height`](../api/chart3d/threeDimensionRowModel/#height) property. The value can be either in percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](../api/chart3d/axis3DModel/#rowindex) property of the axis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/multi-pane-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/multi-pane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs1" %}
{% endif %}

For spanning the vertical axis along multiple rows, use [`span`](../api/chart3d/axis3DModel/#span)  property of an axis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/multi-pane-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/multi-pane-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs2" %}
{% endif %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](../api/chart3d/chart3DModel/#columns) property of the 3D chart.

* The space for each column can be allocated by using the [`width`](../api/chart3d/threeDimensionColumnModel/#width) property. The given width can be either in percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](../api/chart3d/axis3DModel/#columnindex) property of the axis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/multi-pane-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/multi-pane-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs3" %}
{% endif %}

For spanning the vertical axis along multiple column, you can use [`span`](../api/chart3d/axis3DModel/#span) property of an axis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart3d/multi-pane-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart3d/multi-pane-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart3d/multi-pane-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart3d/multi-pane-cs4" %}
{% endif %}
