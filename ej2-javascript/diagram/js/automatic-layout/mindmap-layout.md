---
layout: post
title: Mind Map in ##Platform_Name## Diagram | Syncfusion®
description: Build a Mind Map in the Syncfusion® ##Platform_Name## Diagram by setting the layout type to MindMap, with Horizontal or Vertical orientation options.
platform: ej2-javascript
control: Mind map 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Mind Map in ##Platform_Name## Diagram

A mind map is a diagram that displays the nodes as a spider diagram organizes information around a central concept. To create mind map, the [`type`](../../api/diagram/layout#type) of layout should be set as `MindMap`.

## Mind Map Orientation

An [`Orientation`](../../api/diagram/orientation) of a `MindMapTreeLayout` is used to arrange the tree layout according to a specific direction. By default, the orientation is set to Horizontal. 

The following code example illustrates how to create an mindmap layout.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/AutomaticLayout-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs8" %}


The following table outlines the various orientation types available:

|Orientation Type |Description|
| -------- | ----------- |
|Horizontal|Aligns the tree layout from left to right|
|Vertical|Aligns the tree layout from top to bottom|

N> If you want to use mind map layout in diagram, you need to inject MindMap in the diagram.

## Mind Map branch

You can also decide the branch for mind map using [`getBranch`](../../api/diagram/layoutModel#getbranch) method. The following code demonstrates how to set all branches on the right side for mind map layout using `getBranch` method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/AutomaticLayout-mindmap/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-mindmap/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-mindmap" %}

![Mind map layout](../images/mindmap.png)