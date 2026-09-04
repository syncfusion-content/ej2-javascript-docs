---
layout: post
title: How to update content in ##Platform_Name## Badge | Syncfusion
description: Learn how to update ##Platform_Name## Badge content dynamically at runtime by binding a click handler to increment the displayed value.
platform: ej2-javascript
control: Dynamic Badge Content
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to update content in ##Platform_Name## Badge

Badge content often needs to be updated dynamically based on real-time requirements. The following sample demonstrates how to modify the displayed text at runtime through a click event handler. Click the increment button to change the Badge value.

This documentation assumes that the Badge control has been set up as described in the Getting Started section.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/dynamic-badge-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/badge/dynamic-badge-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/badge/dynamic-badge-cs1" %}
{% endif %}
