---
layout: post
title: How to restrict drag and drop for particular tree nodes in ##Platform_Name## TreeView | Syncfusion
description: Learn how to restrict drag-and-drop on selected TreeView nodes in the Syncfusion ##Platform_Name## TreeView control.
platform: ej2-javascript
control: Restrict the drag and drop for particular tree nodes
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to restrict drag and drop for particular tree nodes in ##Platform_Name## TreeView

You can restrict dragging and dropping of nodes to within specific parent nodes (for example, folder-like parents) only. This can be achieved by using the [`nodeDragging`](../../api/treeview#nodedragging) and [`nodeDragStop`](../../api/treeview#nodedragstop) events of the TreeView. The `nodeDragging` event fires while a node is being dragged and can be used to control which drop targets are valid, while the `nodeDragStop` event fires when the drop is about to occur and can be used to cancel the drop.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/how-to/restrict-drag-drop-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/how-to/restrict-drag-drop-cs1" %}
{% endif %}