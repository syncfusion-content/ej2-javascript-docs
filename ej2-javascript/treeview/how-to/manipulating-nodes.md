---
layout: post
title: Nodes Manipulation in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Nodes Manipulation in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: TreeView
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Nodes Manipulation in ##Platform_Name## TreeView control

The TreeView control provides essential methods for dynamically managing nodes, offering the ability to create a highly interactive and customizable tree structure,

* [addNodes](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#addnodes)
* [removeNodes](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#removenodes)
* [updateNode](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#updatenode)
* [refreshNode](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#refreshnode)
* [moveNodes](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#movenodes)

These methods provide the flexibility to add, remove, update, refresh, or relocate nodes as needed, facilitating a fully interactive and customizable TreeView structure.

## Dynamically adding nodes

The [`addNodes`](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#addnodes) method of TreeView allows you to insert new nodes at designated positions within the TreeView by passing the necessary node information. You can add both parent and child nodes by specifying their target ID.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/addNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/addNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/addNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/addNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/addNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/addNodes" %}
{% endif %}

## Dynamically removing nodes

The TreeView [`removeNodes`](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#removenodes) method lets you remove multiple nodes by providing their IDs. You can remove both parent and child nodes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/removeNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/removeNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/removeNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/removeNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/removeNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/removeNodes" %}
{% endif %}

## Dynamically update nodes

The TreeView control has the [`updateNode`](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#updatenode) method, which allows you to change a specific node's text by providing its target (either the node ID or element) and the new text. To enable text editing, set the [`allowEditing`](https://ej2.syncfusion.com/documentation/api/treeview#allowediting) property to true, ensuring correct functionality of the `updateNode` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/updateNode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/updateNode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/updateNode" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/updateNode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/updateNode/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/updateNode" %}
{% endif %}

## Dynamically refresh nodes

The [`refreshNode`](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#refreshnode) method in TreeView allows you to update the content of a specific node by providing its target and the new details. To retrieve the current details of the node, use the [`getTreeData`](https://ej2.syncfusion.com/documentation/api/treeview/#gettreedata) method in conjunction with the node's ID. This method refreshes a designated node within the TreeView.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/refreshNode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/refreshNode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/refreshNode" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/refreshNode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/refreshNode/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/refreshNode" %}
{% endif %}

## Dynamically move nodes

The [`moveNodes`](https://ej2.syncfusion.com/javascript/documentation/api/treeview/#movenodes) method in TreeView allows you to relocate a node by defining the node to be moved, the target location, and the index within that target. It facilitates the repositioning of nodes within the same TreeView based on the specified target.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/moveNodes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/moveNodes/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/moveNodes" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/moveNodes/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/manipulating-nodes/moveNodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/manipulating-nodes/moveNodes" %}
{% endif %}

