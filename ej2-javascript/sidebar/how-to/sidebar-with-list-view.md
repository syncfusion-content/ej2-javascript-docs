---
layout: post
title: How to initialize Sidebar with ListView in ##Platform_Name## Sidebar | Syncfusion
description: Learn how to combine the Syncfusion ##Platform_Name## Sidebar control with list views for rich navigation and data organization.
platform: ej2-javascript
control: Sidebar with list view
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to initialize Sidebar with ListView in ##Platform_Name## Sidebar

Any HTML element can be placed in the Sidebar content area. The Sidebar supports all types of HTML structures like `TreeView`, `ListView`, etc.

In the following example, the Sidebar is rendered with the ListView control in its content area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-list-cs1/styles.css%}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-list-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-list-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-list-cs1" %}
{% endif %}