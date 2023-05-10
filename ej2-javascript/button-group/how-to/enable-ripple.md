---
layout: post
title: Enable ripple in ##Platform_Name## Button group control | Syncfusion
description: Learn here all about Enable ripple in Syncfusion ##Platform_Name## Button group control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Enable ripple 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Enable ripple in ##Platform_Name## Button group control

Ripple can be enabled by importing `rippleEffect` method from `ej2-base` and initialize rippleEffect with `.e-btn-group` element, and selector as `e-btn`.

The following example illustrates how to enable ripple for ButtonGroup.

<!-- markdownlint-disable MD033 -->

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/button-group/ripple-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/ripple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/ripple-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/ripple-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/button-group/ripple-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/button-group/ripple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/button-group/ripple-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/button-group/ripple-cs1" %}
{% endif %}