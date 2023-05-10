---
layout: post
title: Custom context in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Custom context in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Custom context 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom context in ##Platform_Name## Sidebar control

Sidebar has a flexible option to make it initialize, target to any HTML element alongside of the main content of a web page.

By default, Sidebar initializes target to the body element. Using the [`target`](../api/sidebar/#target) property, set target element to initialize the Sidebar inside any HTML element apart from the body element.

> If required , `zIndex` can be set when sidebar act as overlay type.

In the following sample, sidebar is rendered context to a div container element which has the CSS class `e-main-content`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/context-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/context-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/context-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/context-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/context-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/context-cs1" %}
{% endif %}