---
layout: post
title: Setting dimension in ##Platform_Name## Tooltip control | Syncfusion
description: Learn here all about Setting dimension in Syncfusion ##Platform_Name## Tooltip control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Setting dimension
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Setting dimension in ##Platform_Name## Tooltip control

## Height and Width

The Tooltip can be assigned either auto height and width values or specific pixel values. The [`width`](../api/tooltip#width) and [`height`](../api/tooltip#height) properties are used to set the outer dimensions of the Tooltip element. The default value for both properties is `auto`. They also accept string and number values indicating pixels.
The following sample demonstrates how to set dimensions for the Tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/height-width-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/dimensions/height-width-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/height-width-cs1" %}
{% endif %}

## Scroll mode

When [`height`](../api/tooltip/#height) is specified with a certain pixel value and the Tooltip content overflows, the scroll mode gets enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/scroll-mode-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tooltip/dimensions/scroll-mode-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tooltip/dimensions/scroll-mode-cs1" %}
{% endif %}

> The scroll mode can best be seen when the sticky mode of the Tooltip is enabled. To enable sticky mode, set the [`isSticky`](../api/tooltip#issticky) property to `true`.
