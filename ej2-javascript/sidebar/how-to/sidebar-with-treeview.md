---
layout: post
title: Sidebar with TreeView in ##Platform_Name## Sidebar control | Syncfusion
description: Learn here all about Sidebar with TreeView in Syncfusion ##Platform_Name## Sidebar control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sidebar with TreeView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# ##Platform_Name## Sidebar control with TreeView

The following example demonstrates how to render the TreeView control inside the Sidebar with a dock state and how to achieve simultaneous expand and collapse functionalities in both the Sidebar and TreeView.

Upon collapse, the LI elements of the TreeView display icons only, representing a short sign of the hidden text content. When expanded, the hidden text content is made visible.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-treeview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/sidebar/sidebar-treeview-cs1/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sidebar/sidebar-treeview-cs1" %}
{% endif %}