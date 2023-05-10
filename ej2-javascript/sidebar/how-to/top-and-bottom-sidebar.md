---
layout: post
title: Top and bottom sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Top and bottom sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Top and bottom sidebar 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Top and bottom sidebar in ##Platform_Name## Sidebar control

You can initialize Sidebar at the left and right positions by using the [`position`](../../api/sidebar/#position) property. It will automatically adjust the width of the main content.

You can also initialize Sidebar at the top and bottom positions in application level. For initializing Sidebar, you need to manually adjust the height of the main content.

In the following sample, the [`toggle`](../../api/sidebar/#toggle) method has been used to show or hide the top and bottom sidebar on button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/top-bottom-positions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/top-bottom-positions-cs1" %}
{% endif %}
