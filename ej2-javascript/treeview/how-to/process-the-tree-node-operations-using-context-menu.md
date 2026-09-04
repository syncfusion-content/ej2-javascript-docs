---
layout: post
title: How to process the tree node operations using context menu in ##Platform_Name## TreeView | Syncfusion
description: Learn how to process TreeView node actions with context menus in the Syncfusion ##Platform_Name## TreeView control.
platform: ej2-javascript
control: Process the tree node operations using context menu
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to process the tree node operations using context menu in ##Platform_Name## TreeView

You can integrate the context menu with the TreeView control to perform tree view related operations such as adding, removing, and renaming a node.

The following example demonstrates how to manipulate tree view operations in the [`select`](../../api/context-menu#select) event of the context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/context-menu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/context-menu-cs1" %}
{% endif %}
