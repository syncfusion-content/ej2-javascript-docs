---
layout: post
title: How to sort TreeView nodes level wise in ##Platform_Name## TreeView | Syncfusion
description: Learn how to sort TreeView nodes level by level in the Syncfusion ##Platform_Name## TreeView control for structured organization.
platform: ej2-javascript
control: Sorting treeview level wise
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to sort TreeView nodes level wise in ##Platform_Name## TreeView

You can sort the TreeView nodes based on their level. When using the [`sortOrder`](../../api/treeview#sortorder) property, the entire TreeView is sorted. If you want to sort a particular level, refer to the following code sample, which demonstrates how to sort only the parent node in the TreeView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/sort-tree-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/sort-tree-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/sort-tree-cs1" %}
{% endif %}