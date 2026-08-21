---
layout: post
title: How to align multiple Sidebar in the same position in ##Platform_Name## Sidebar | Syncfusion
description: Learn how to manage multiple sidebars in the same position with the Syncfusion ##Platform_Name## Sidebar control for layered navigation patterns.
platform: ej2-javascript
control: Multiple sidebar in the same position 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to align multiple Sidebar in the same position in ##Platform_Name## Sidebar

You can initialize a Sidebar at the left position using the [`position`](../../api/sidebar/#position) property. This will automatically adjust the width of the main content.

You can also initialize another Sidebar in the same position by adjusting the width of the first Sidebar.

The following example demonstrates how to align multiple Sidebars in the same position.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-same-position-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-same-position-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-same-position-cs1" %}
{% endif %}