---
layout: post
title: How to add nested tabs in ##Platform_Name## Tab | Syncfusion
description: Learn how to use the Syncfusion ##Platform_Name## Tab control to add nested tabs and organize layered content clearly.
platform: ej2-javascript
control: Add nested tabs
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to add nested tabs in ##Platform_Name## Tab

The Tab control supports rendering nested levels of tabs using the [`content`](../../api/tab/tabItemModel#content) property. You can add nested Tab elements inside the parent Tab's `content` property. To render the nested Tab, initialize the component within the [`selected`](../../api/tab#selected) event handler using the Tab element ID.

Here's an example of how to create nested tabs:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/tab/tab-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/tab-cs1" %}
{% endif %}
