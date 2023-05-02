---
layout: post
title: Position in ##Platform_Name## Appbar control | Syncfusion
description: Learn here all about Position in Syncfusion ##Platform_Name## Appbar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Position in ##Platform_Name## Appbar control

The position of the AppBar can be set using the [position](../api/appbar#position) and [isSticky](../api/appbar#issticky) property. The AppBar provides the following options for setting its position:

* Top AppBar
* Bottom AppBar
* Sticky AppBar

## Top AppBar

The top AppBar is the default one in which it positions the AppBar at the top of the content.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/appbar/top-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/top-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/top-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/appbar/top-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/top-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/appbar/top-cs1" %}
{% endif %}

## Bottom AppBar

This position can be set to the AppBar by setting `Bottom` to the property [position](../api/appbar#position). The bottom AppBar positions the AppBar at the bottom of the content.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/appbar/bottom-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/bottom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/bottom-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/appbar/bottom-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/bottom-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/appbar/bottom-cs1" %}
{% endif %}

## Sticky AppBar

This position can be set to the AppBar by setting `true` to the property [isSticky](../api/appbar#issticky). AppBar will be sticky while scrolling the AppBar content.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/appbar/sticky-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/sticky-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/appbar/sticky-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/appbar/sticky-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/appbar/sticky-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/appbar/sticky-cs1" %}
{% endif %}