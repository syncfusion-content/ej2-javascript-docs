---
layout: post
title: Tool tip in ##Platform_Name## Stock chart control | Syncfusion
description: Learn here all about Tool tip in Syncfusion ##Platform_Name## Stock chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Tool tip 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in ##Platform_Name## Stock chart control

<!-- markdownlint-disable MD036 -->

StockChart will display details about the points through tooltip, when the mouse is moved over the point.

## Default tooltip

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](../api/chart/tooltipSettings/#enable) property to true and by injecting [`Tooltip`](../api/stock-chart/stockChartModel/#tooltip) module using `StockChart.Inject(Tooltip)`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs28/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs28/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs28" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs28/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs28/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs28" %}
{% endif %}

<!-- markdownlint-disable MD013 -->

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, you can show more information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x value.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs29/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs29" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs29/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs29/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs29" %}
{% endif %}

## Position the tooltip

By default, the tooltip is positioned at the left side of the stock chart. You can move the tooltip along with the mouse by setting **Nearest** to the [`position`](../api/stock-chart/stockTooltipSettings/#position) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs37/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs37/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs37" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs37/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs37/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs37" %}
{% endif %}

## Customize the appearance of the tooltip

The [`fill`](../api/chart/tooltipSettingsModel/#fill) and [`border`](../api/chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](../api/chart/tooltipSettingsModel/#textStyle) property in the tooltip is used to customize the font of the tooltip text.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/stock-chart/getting-started-cs30/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs30/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs30" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/stock-chart/getting-started-cs30/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/stock-chart/getting-started-cs30/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stock-chart/getting-started-cs30" %}
{% endif %}
