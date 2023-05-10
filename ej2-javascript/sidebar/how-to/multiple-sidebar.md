---
layout: post
title: Multiple sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Multiple sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Multiple sidebar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Multiple sidebar in ##Platform_Name## Sidebar control

Two Sidebars can be initialized in a web page with same main content.
Sidebars can be initialized on right side or left side of the main content using [`position`](../../api/sidebar/#position) property.

>The HTML element with class name `e-main-content` will be considered as the main content and both the Sidebars will behave as side content to this main content area of a web page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/multiple-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/multiple-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/multiple-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/multiple-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/multiple-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/multiple-cs1" %}
{% endif %}