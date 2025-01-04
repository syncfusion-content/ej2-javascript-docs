---
layout: post
title: Add nested tabs in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Add nested tabs in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add nested tabs 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add nested tabs in ##Platform_Name## Tab control

The Tab control supports rendering nested levels of tabs using the [`content`](../../api/tab/tabItemModel/#content) property. You can add nested Tab elements inside the parent Tab's `content` property. To render the nested Tab, initialize the component using the id of the Tab from a [`selected`](../../api/tab#selected) event handler.

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
