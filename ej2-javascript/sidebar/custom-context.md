---
layout: post
title: Custom context in ##Platform_Name## Sidebar | Syncfusion
description: Learn how to customize the context and behavior of the Syncfusion ##Platform_Name## Sidebar control for application-specific navigation.
platform: ej2-javascript
control: Custom context
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Custom context in ##Platform_Name## Sidebar

The Sidebar has a flexible option that allows it to be initialized and targeted to any HTML element alongside the main content of a web page.

By default, the Sidebar targets the body element. Using the [`target`](../api/sidebar/#target) property, you can set the target element to initialize the Sidebar inside any HTML element apart from the body element.

> If required, `zIndex` can be set when the Sidebar acts as an overlay type.

In the following sample, the Sidebar is rendered in context to a div container element that has the CSS class `e-main-content`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/context-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/context-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/context-cs1/styles.css %}
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/context-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/context-cs1" %}
{% endif %}