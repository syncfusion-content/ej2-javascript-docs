---
layout: post
title: User interaction in ##Platform_Name## Sparkline control | Syncfusion
description: Learn here all about User interaction in Syncfusion ##Platform_Name## Sparkline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: User interaction 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in ##Platform_Name## Sparkline control

Sparkline has two user interaction features: tooltip and tracker line.

## Tooltip

The sparkline provides options to display details about values of data points through tooltips when hovering the mouse over data point. To use tooltip in sparkline, inject the `SparklineTooltip` module to sparkline using the inject method.

The following code example shows enabling tooltip for sparkline with format.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/user-interaction-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/user-interaction-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs1" %}
{% endif %}

### Tooltip customization

The fill color, text styles, format, and border of the tooltip can be customized. The following code example shows customization of tooltip's fill color and text style.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/user-interaction-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/user-interaction-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs2" %}
{% endif %}

### Tooltip template

Sparkline tooltip has template support. By using tooltip template, you can customize tooltips. The following code example shows more customization options provided to  `sparktooltip` css class that is used in tooltip template div. Using this template, images also can be added to tooltip.

```
.sparktooltip {
  border-radius: 5px;
  background: #008cff;
  color: #FFFFFF !important;
  font-size: 16px;
  font-style: italic;
  padding: 8px;
}
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/user-interaction-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/user-interaction-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs3" %}
{% endif %}

## Track line

The track line tracks data points that are closer to the mouse position or touch contact.

To enable track lines for sparkline, specify the `visible` option of  `trackLineSettings` to true. Based on theme, tracker color will be changed. The default value of tracker color is black.

To use track line in sparkline, inject the `SparklineTooltip` module to sparkline using the inject method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/user-interaction-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/user-interaction-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/user-interaction-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/user-interaction-cs4" %}
{% endif %}