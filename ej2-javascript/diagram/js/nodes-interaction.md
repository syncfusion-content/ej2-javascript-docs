---
layout: post
title: Interaction of nodes in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Nodes in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Nodes interaction 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Node Interaction in ##Platform_Name## Diagram control

The diagram provides support for selecting, dragging, resizing, and rotating nodes interactively. A node can be selected by simply clicking on it, dragged by dragging it on diagram canvas, resized using the resize handle, and rotated using the rotate handle. Additionally, interactions can be performed using some public methods, which are explained below:

## Select

You can simply click on the node to select it and click on diagram canvas to unselect it like below.

![Select/UnSelect Node](images/Single-node-select.gif)


### To select node programatically

A node can be selected at runtime by using the [`select`](../api/diagram/#select) method and the selection can be cleared in the diagram by using the [`clearSelection`](../api/diagram/#clearSelection) method. The following code explains how to select and clear selection in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-select/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-select/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-select" %}

## Drag

You can simply mousedown on a node and drag it anywhere on the diagram canvas like below.

![Drag node](images/drag-single-node.gif)

### To drag node programatically

A node can be dragged at runtime by using the [`drag`](../api/diagram/#drag) method. The following code explains how to drag the node by using the drag method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-drag/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-drag/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-drag" %}

## Resize

When we select a node a resize handle will appear on all the sides of the node. We can resize the node by clicking and dragging the resize handle.

![Resize Node](images/resize-Single-node.gif)

### To resize node programatically

A node can be resized at runtime by using the [`scale`](../api/diagram/#scale) method. The following code explains how to resize the node by using the scale method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-resize/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-resize/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-resize" %}

## Rotate

A node can be rotated interactively by clicking and dragging the rotate handle of the node.

![Rotate Node](images/rotate-single-node.gif)

### To rotate node programatically

A node can be rotated at runtime by using the [`rotate`](../api/diagram/#rotate) method. The following code explains how to rotate the node by using the rotate method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-rotate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-rotate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-rotate" %}