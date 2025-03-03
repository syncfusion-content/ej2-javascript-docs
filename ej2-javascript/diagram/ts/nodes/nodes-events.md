---
layout: post
title: Events of node interaction in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Nodes in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Events of node 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Node events in ##Platform_Name## Diagram control

Diagram provides some events support for node that triggers when interacting with the node.

## Click event

Triggers when the node is clicked. The following code example explains how to get the [`click`](../api/diagram/iClickEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-clickEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-clickEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-clickEvent" %}

## Selection change event

Triggers when the node is selected in diagram.
The following code example explains how to get the [`selectionChange`](../api/diagram/iSelectionChangeEventArgs/) event in the diagram.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-selectionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-selectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-selectionEvent" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](../api/diagram/iSelectionChangeEventArgs/) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args: ISelectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

While dragging the node through interaction, the position change event can be used to do the customization.
The following code example explains how to get the [`positionChange`](../api/diagram/iDraggingEventArgs/) event in the diagram.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-positionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-positionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-positionEvent" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](../api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args: IDraggingEventArgs) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](../api/diagram/iSizeChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-resizeEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-resizeEvent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/nodes-resizeEvent" %}

 You can prevent resizing by setting the `cancel` property of [`SizeChangeEventArgs`](../api/diagram/iSizeChangeEventArgs/) to true, as shown in the code snippet below.

 ```ts
    sizeChange: function (args: ISizeChangeEventArgs) {
    if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
    }
  },

```

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](../api/diagram/iRotationEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-rotateEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-rotateEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-rotateEvent" %}

 You can prevent rotation by setting the `cancel` property of [`RotationEventArgs`](../api/diagram/iRotationEventArgs/) to true, as shown in the code snippet below.

 ```ts
  rotateChange: function (args: IRotationEventArgs) {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property change event

Triggers when there is any property change occurred for the node. The following code example explains how to get the [`propertyChange`](../api/diagram/iPropertyChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-propertyChange/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-propertyChange/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-propertyChange" %}

## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](../api/diagram/iCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-collectionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-collectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-collectionEvent" %}

You can prevent changes to the diagram collection, such as adding or deleting nodes, by setting the `cancel` property of [`CollectionChangeEventArgs`](../api/diagram/iCollectionChangeEventArgs/) to true, as shown in the code snippet below.

 ```ts
    collectionChange: function (args: ICollectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
    }
  },

```

## Mouse Events

### Mouse enter event

The [`mouseEnter`](../api/diagram/iMouseEventArgs/) is triggered when the mouse enters the node surface.

### Mouse over event

The [`mouseOver`](../api/diagram/iMouseEventArgs/) is triggered when the mouse hover over the node surface.

### Mouse leave event

The [`mouseLeave`](../api/diagram/iMouseEventArgs/) is triggered when the mouse leaves the node surface.

The following code example shows how to handle these events in the diagram and change the color of a node based on these events:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-mouseEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-mouseEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-mouseEvent" %}



