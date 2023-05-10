---
layout: post
title: Chart dimensions in ##Platform_Name## Stock chart control | Syncfusion
description: Learn here all about Chart dimensions in Syncfusion ##Platform_Name## Stock chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Chart dimensions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Chart dimensions in ##Platform_Name## Stock chart control

## Size for Container

Stock Chart can render to its container size. You can set the size via inline or CSS as demonstrated below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs1" %}
{% endif %}

<!-- markdownlint-disable MD036 -->

## Size for Stock Chart

<!-- markdownlint-disable MD036 -->

You can also set size for chart directly through [`width`](../api/stock-chart/#width) and [`height`](../api/stock-chart/#height) properties.

**In Pixel**

You can set the size of chart in pixel as demonstrated below.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs2" %}
{% endif %}

**In Percentage**

By setting value in percentage, Stock Chart gets its dimension with respect to its container. For example, when the height is ‘50%’, Stock Chart renders to half of the container height.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/chart-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/chart-dimensions-cs3" %}
{% endif %}

>Note: When you do not specify the size, it takes `450px` as the height and window size as its width.