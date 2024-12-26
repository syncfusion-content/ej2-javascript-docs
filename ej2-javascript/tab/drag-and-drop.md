---
layout: post
title: Drag and drop in ##Platform_Name## Tab control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion ##Platform_Name## Tab control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in ##Platform_Name## Tab control

The Tab component allows you to drag and drop any item by setting [allowDragAndDrop](../api/tab#allowdraganddrop) to **true**. Items can be reordered to any place by dragging and dropping them onto the desired location.

* To prevent dragging action for a particular item, use the [`onDragStart`](../api/tab#ondragstart) event, which triggers when the item drag is started. To prevent dropping action for a particular item, use the [`dragged`](../api/tab#dragged) event, which triggers when the drag action is stopped.

* The [`dragArea`](../api/tab#dragArea) defines the area in which the draggable element movement will occur. Movement outside that area will be restricted for the draggable element.

* The [`onDragStart`](../api/tab#ondragstart) event will be triggered before dragging the item from the Tab.

* The [`dragging`](../api/tab#dragging) event will be triggered when the Tab item is being dragged.

* The [`dragged`](../api/tab#dragged) event will be triggered when the Tab item is dropped on the target element successfully.

In the following sample, the [allowDragAndDrop](../api/tab#allowdraganddrop) property is enabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/default-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/default-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/default-cs1" %}
{% endif %}

## Drag and drop item between tabs

It is possible to drag and drop tab items between two tabs by manually saving the dropped items as new tab item data through the [`addTab`](../api/tab#addtab) method and removing the dragged item through the [`removeTab`](../api/tab#removetab) method of the Tab component.

In this example, we have used one tab control as an external source, and items from this tab component can be dragged and dropped onto another Tab. We use the [`onDragStart`](../api/tab#ondragstart) and [`dragged`](../api/tab#dragged) events of the Tab component to form an event object, save it using the [`addTab`](../api/tab#addtab) method, and remove the dragged item through the [`removeTab`](../api/tab#removetab) method using the dragged item index.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-tab-cs1" %}
{% endif %}

## Drag and drop items to external source

It is possible to drag and drop items from the Tab to any external source by manually saving the dropped items as new node data through the [`addNodes`](../api/treeview#addnodes) method of the external component and removing the dragged item through the [`removeTab`](../api/tab#removetab) method of the Tab component.

In this example, we have used the TreeView control as an external source. Items from the Tab component can be dragged and dropped onto the child nodes of the TreeView component. We use the `dragged` event of the Tab component to form an event object, save it using the [`addNodes`](../api/treeview#addnodes) method of the TreeView, and remove the dragged item through the [`removeTab`](../api/tab#removetab) method of the Tab using the dragged item index.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-treeview-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/tab-to-treeview-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/tab-to-treeview-cs1" %}
{% endif %}

## Drag and drop items from external source

It is possible to drag and drop items from any external source into the Tab by manually saving the dropped items as new item data through the [`addTab`](../api/tab#addtab) method of the Tab component and removing the dragged node through the [`removeNodes`](../api/treeview#removenodes) method of the external component.

In this example, we have used the TreeView control as an external source. Child nodes from the TreeView component can be dragged and dropped onto the Tab. We use the [`nodeDragStop`](../api/treeview#nodedragstop) event of the TreeView component to form an event object, save it using the [`addTab`](../api/tab#addtab) method of the Tab, and remove the dragged node through the [`removeNodes`](../api/treeview#removenodes) method of the TreeView.


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/treeview-to-tab-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/drag-and-drop/treeview-to-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/tab/drag-and-drop/treeview-to-tab-cs1" %}
{% endif %}
