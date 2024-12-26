---
layout: post
title: Customize selected tab styles in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Customize selected tab styles in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize selected tab styles 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize selected tab styles in ##Platform_Name## Tab control

You can customize the Tab style by overriding its header and active tab CSS classes. To do this, follow these steps:

1. Define an HTML string to add animation and customize the Tab header.
2. Pass this HTML string to the [`text`](../../api/tab/header#text) property.
3. Override the style using custom CSS classes added to the Tab elements.

> You can add a custom class to the Tab component using the [`cssClass`](../../api/toolbar/item#cssclass) property, which is used to customize the Tab component along with the respective CSS selectors.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/active-tab-style-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/active-tab-style-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/active-tab-style-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/active-tab-style-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/active-tab-style-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/active-tab-style-cs1" %}
{% endif %}
