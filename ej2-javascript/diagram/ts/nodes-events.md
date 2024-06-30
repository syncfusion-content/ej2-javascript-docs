---
layout: post
title: Events of node interaction in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Nodes in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events of node 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

## Events

Diagram provides some events support for node that triggers when interacting with the node.

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

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](../api/diagram/isizechangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-resizeEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-resizeEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-resizeEvent" %}

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](../api/diagram/irotationeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-rotateEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-rotateEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-rotateEvent" %}

## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](../api/diagram/icollectionchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/nodes-collectionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/nodes-collectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes-collectionEvent" %}