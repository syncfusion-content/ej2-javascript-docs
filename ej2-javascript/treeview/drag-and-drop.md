---
layout: post
title: Drag and drop in ##Platform_Name## TreeView control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## TreeView control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## TreeView control

The TreeView control allows you to drag and drop any node by setting [allowDragAndDrop](../api/treeview#allowdraganddrop) to **true**. Nodes can be dragged and dropped at all levels of the same TreeView.

The dragged nodes can be dropped at any level by indicator lines with **line**, **plus/minus**, and **restrict** icons. These icons represent the exact position where the node is to be dropped as a sibling or child.

The following table explains the usage of indicator icons:

| Icons | Description |
|------|-------------|
| Plus icon | Indicates that the dragged node is to be added as a child of the target node. |
| Minus or restrict icon | Indicates that the dragged node is not to be dropped at the hovered region. |
| In between icon | Indicates that the dragged node is to be added as a sibling of the hovered region. |

* If you need to prevent dragging action for a particular node, the [`nodeDragStart`](../api/treeview#nodedragstart) event can be used, which is triggered when the node drag starts. If you need to prevent dropping action for a particular node, the [`nodeDragStop`](../api/treeview#nodedragstop) event can be used, which is triggered when the drag stops.

* The [`nodeDragging`](../api/treeview#nodedragging) event is triggered when the TreeView node is being dragged. You can customize the cloned element in this event.

* The [`nodeDropped`](../api/treeview#nodedropped) event is triggered when the TreeView node is successfully dropped on the target element.

In the following sample, the [allowDragAndDrop](../api/treeview#allowdraganddrop) property is enabled.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/single-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/drag-and-drop/single-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/single-cs1" %}
{% endif %}

## Multiple-node drag and drop

To drag and drop more than one node, you should enable the [allowMultiSelection](../api/treeview#allowmultiselection) property along with the `allowDragAndDrop` property.

To perform multi-selection, press and hold the **CTRL** key and click the desired nodes. To select a range of nodes, press and hold the **SHIFT** key and click the nodes.

In the following sample, the `allowMultiSelection` property is enabled along with the `allowDragAndDrop` property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/multiple-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/treeview/drag-and-drop/multiple-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treeview/drag-and-drop/multiple-cs1" %}
{% endif %}

## See Also

* [How to restrict the drag-and-drop for particular tree nodes](./how-to/restrict-the-drag-and-drop-for-particular-tree-nodes)
