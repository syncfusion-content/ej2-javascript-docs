---
layout: post
title: Nodes in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Nodes in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Nodes 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Nodes in ##Platform_Name## Diagram control

Nodes are graphical objects used to visually represent the geometrical information, process flow, internal business procedure, entity, or any other kind of data, and it represents the functions of a complete system regarding to how it interacts with external entities.

![Node](../images/node.png)

<!-- markdownlint-disable MD033 -->

## Create node

A node can be created and added to the diagram either programmatically or interactively. The [`id`](../../api/diagram/nodeModel/#id) property of a node is used to define its unique identifier and can later be used to find the node at runtime for customization. Nodes are stacked on the diagram area from bottom to top in the order they are added.

N> When setting a Node's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

### Add node through nodes collection

To create a node, define the [`node`](../../api/diagram/node) object and add that to [`nodes`](../../api/diagram/nodeModel/) collection of the [`diagram model`](../../api/diagram/). The following code example illustrates how to add a node to the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-cs1" %}

N> Node id should not begin with numbers(should begin with a letter). Node Id should be unique for all the shapes and connectors.

### Add/Remove node at runtime

Nodes can be added at runtime by using public method, [`add`](../../api/diagram/#add) and can be removed at runtime by using public method, [`remove`](../../api/diagram/#remove). On adding/removing node at runtime, the nodes collection is changed and the [`collectionChange`](../../api/diagram/iCollectionChangeEventArgs/) event will trigger.


The following code illustrates how to add a node and remove a selected node.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-cs2" %}

### Add collection of nodes at runtime

The collection of nodes can be dynamically added using [`addElements`](../../api/diagram/#addelements) method. Each time an element is added to the diagram canvas, the [`collectionChange`](../../api/diagram/iCollectionChangeEventArgs/) event will be triggered.

The following code illustrates how to add a nodes collection at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-cs21/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/nodes-cs21" %}

### Add node from palette

Nodes can be predefined and added to the palette, and can be dropped into the diagram when needed. For more information about adding nodes from symbol palette, refer to [`Symbol Palette`](./symbol-palette).


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-palette/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-palette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-palette" %}

### Create node through data source

Nodes can be generated automatically with the information provided through dataSource property. The default properties for these nodes are fetched from default settings ([`getNodeDefaults`](../../api/diagram/#getnodedefaults)). For more information about data source, refer to  [`DataBinding`](./data-binding).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-dataBind/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-dataBind/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/nodes-dataBind" %}

### Draw nodes

Nodes can be interactively drawn by clicking and dragging the diagram surface.

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](../../api/diagram/#tool) property and you need to set the `node` object by using the [`drawingObject`](../../api/diagram/#drawingobject) property. The following code example illustrates how to draw a rectangle at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/Tools-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/Tools-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools-cs1" %}

## Update node at runtime

You can modify any node properties at runtime, and the changes will be instantly reflected. For example, here you can change the size and color of the node.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-update/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-update/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-update" %}

N> Once the property is updated, you should call the [`dataBind`](../../api/diagram/#databind) to reflect the changes instantly.

## Clone node at runtime

Cloning a node creates a new node instance with identical properties and attributes. You can clone a node using the [`copy`](../../api/diagram/#copy) and [`paste`](../../api/diagram/#paste) public methods of the diagram model.

 
The following code example illustrates how to clone node at runtime

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-clone/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-clone/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-clone" %}

## Add nodes from tree view

By customizing the [`dragEnter`](../../api/diagram/iDragEnterEventArgs/) functionality, you can allow elements from other components, such as the tree view, to be converted into nodes based on the data of the dragged element.

The following code example demonstrates how to convert a tree view element into a node while dragging it onto the diagram canvas 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/nodes-treeView/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-treeView/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-treeView" %}

## See Also

* [How to add annotations to the node](./node-labels.md)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints#node-constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to edit the node visual interface](./interaction#selection)
* [How to create diagram nodes using drawing tools](./tools#draw-nodes)
