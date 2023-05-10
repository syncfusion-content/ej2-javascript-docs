---
layout: post
title: Multiple panes in ##Platform_Name## Chart control | Syncfusion
description: Learn here all about Multiple panes in Syncfusion ##Platform_Name## Chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple panes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple panes in ##Platform_Name## Chart control

Chart area can be divided into multiple panes using [`rows`](../api/chart/row/) and [`columns`](../api/chart/column/).

## Rows

To split the chart area vertically into number of rows, use [`rows`](../api/chart/row/) property of the chart.

* You can allocate space for each row by using the [`height`](../api/chart/row/#height-string) property. The value can be either percentage or in pixel.
* To associate a vertical axis to a particular row, specify its index to [`rowIndex`](../api/chart/axis/#rowindex-number) property of the axis.
* To customize each row’s bottom line, use  [`border`](../api/chart/row/#border-bordermodel) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs78/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs78/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs78" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs78/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs78/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs78" %}
{% endif %}

For spanning the vertical axis along multiple row, you can use [`span`](../api/chart/axis/#span-number) property of an axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs79/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs79/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs79" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs79/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs79/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs79" %}
{% endif %}

## Columns

To split the chart area horizontally into number of columns, use [`columns`](../api/chart/column/) property of the chart.

* You can allocate space for each column by using the [`width`](../api/chart/row/#width-string) property. The given width can be either
 percentage or in pixel.
* To associate a horizontal axis to a particular column, specify its index to [`columnIndex`](../api/chart/axis/#columnindex-number) property of the axis.
* To customize each column’s bottom line, use [[`border`](../api/chart/row/#border-bordermodel) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs80/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs80/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs80" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs80/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs80/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs80" %}
{% endif %}

For spanning the vertical axis along multiple column, you can use [`span`](../api/chart/axis/#span-number) property of an axis.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/chart/axis-cs81/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs81/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis-cs81" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/chart/axis-cs81/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/chart/axis-cs81/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/axis-cs81" %}
{% endif %}