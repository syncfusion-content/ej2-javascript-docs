---
layout: post
title: Top and bottom Sidebar in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Top and bottom Sidebar in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Top and bottom Sidebar
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Top and bottom Sidebar in ##Platform_Name## Sidebar control

You can initialize the Sidebar at the left and right positions using the [`position`](../../api/sidebar/#position) property. This will automatically adjust the width of the main content.

Additionally, you can initialize the Sidebar at the top and bottom positions at the application level. When initializing the Sidebar in these positions, you will need to manually adjust the height of the main content.

In the following sample, the [`toggle`](../../api/sidebar/#toggle) method is used to show or hide the top and bottom Sidebar on a button click.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/styles.css %}
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
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/top-bottom-positions-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/top-bottom-positions-cs1" %}
{% endif %}