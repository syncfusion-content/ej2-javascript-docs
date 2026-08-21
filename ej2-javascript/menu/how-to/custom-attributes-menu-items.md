---
layout: post
title: How to customize HTML attributes for menu items in ##Platform_Name## Menu | Syncfusion
description: Learn how to customize HTML attributes for menu items with the Syncfusion ##Platform_Name## Menu control for advanced accessibility and data handling.
platform: ej2-javascript
control: Customize HTML Attributes for Menu Items 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize HTML attributes for menu items in ##Platform_Name## Menu

To customize the HTML attributes of the Menu, use the [htmlAttributes](../../api/menu/menuItemModel/#htmlattributes) property to add custom HTML attributes to the root element of the menu. This feature is particularly useful for enhancing accessibility, adding custom data attributes, or including additional properties that can be utilized for styling or functionality.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/menu/html-attributes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/html-attributes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/html-attributes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/menu/html-attributes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/menu/html-attributes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/menu/html-attributes-cs1" %}
{% endif %}