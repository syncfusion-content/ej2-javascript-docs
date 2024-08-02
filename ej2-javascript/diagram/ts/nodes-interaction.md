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

A node can be selected at runtime by using the [`select`](../api/diagram/#select) method and the selection can be cleared in the diagram by using the [`clearSelection`](../api/diagram/#clearSelection) or [`unSelect`](../api/diagram/#unselect) method. The following code explains how to select and clear selection in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-select/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-select/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-select" %}

|Method | Parameter | Description|
|----|----|----|
|[`unSelect`](../api/diagram/#unselect)| NodeModel/ConnectorModel | The object to remove from the selection.|
|[`clearSelection`](../api/diagram/#clearSelection)| - | Clears all the selection in the diargam.|

## Drag

You can simply mousedown on a node and drag it anywhere on the diagram canvas like below.

![Drag node](images/drag-single-node.gif)

### To drag node programatically

A node can be dragged at runtime by using the [`drag`](../api/diagram/#drag) method. The following code explains how to drag the node by using the drag method.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-drag/index.ts %}
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
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-resize/index.ts %}
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
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-rotate/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-rotate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-rotate" %}

## Flip

The diagram Provides support to flip the node. [`flip`](../api/diagram/node#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

| Flip direction | Description |
| -------- | ----------- |
|HorizontalFlip |[`Horizontal`](../api/diagram/flipDirection) is used to flip the node to be mirrored across the horizontal axis.|
|VerticalFlip|[`Vertical`](../api/diagram/flipDirection) is used to flip the node to be mirrored across the vertical axis.|
|Both|[`Both`](../api/diagram/flipDirection) is used to flip the node to be mirrored across the horizontal and vertical axes.|
|None|It is used to disable all the flip behavior.|

The following code illustrates how to provide the mirror image of the original element.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-cs4" %}

### Flip modes

The [`flipMode`](../api/diagram/flipMode/) is used to control the behavior of the flip object whether to flip the object along with the port and label.

| FlipMode | Description | 
| -------- | -------- |
|Label| It enables or disables the flip for an object’s label.|
|Port| It enables or disables the flip for an object’s port.|
|All| It enables or disables the flip for both the object’s label and port.|
|None| It is used to disable all the flip mode behavior.|


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-flipMode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-flipMode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-flipMode" %}