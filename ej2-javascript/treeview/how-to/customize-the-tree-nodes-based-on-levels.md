---
layout: post
title: How to customize the tree nodes based on levels in ##Platform_Name## TreeView | Syncfusion
description: Learn how to customize TreeView nodes by level in the Syncfusion ##Platform_Name## TreeView control for hierarchy-aware styling.
platform: ej2-javascript
control: Customize the tree nodes based on levels
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to customize the tree nodes based on levels in ##Platform_Name## TreeView

You can customize the tree nodes at each level by adding a custom [`cssClass`](../../api/treeview#cssclass) to the TreeView control and applying level-specific styles in CSS. Each node element is rendered with a level-based class (for example, `.e-level-1`, `.e-level-2`) that you can target to style nodes differently by hierarchy.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/customize-tree-nodes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/customize-tree-nodes-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/customize-tree-nodes-cs1" %}
{% endif %}
