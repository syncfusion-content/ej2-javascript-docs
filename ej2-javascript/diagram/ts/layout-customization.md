---
layout: post
title: Customizing layout in ##Platform_Name## Diagram control | Syncfusion
description: Learn here all about Automatic layout in Syncfusion ##Platform_Name## Diagram control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing layout
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing layout in ##Platform_Name## Diagram control

Orientation, spacings, and alignment of the layout can be customized with a set of properties.

To explore layout properties, refer to [`Layout Properties`](../api/diagram/layout).

## Layout bounds


Diagram provides support to align the layout within any custom rectangular area. 

The following example shows how to align the layout within the given layout bounds.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cust2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cust2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cust2" %}

For more information about bounds, refer to [`bounds`](../api/diagram/layoutModel/#bounds).


## Layout alignment

The layout can be aligned anywhere over the layout bounds/viewport using the [`horizontalAlignment`](../api/diagram/horizontalAlignment/) and [`verticalAlignment`](../api/diagram/verticalalignment/) properties of the layout.

The following code illustrates how to align the layout and how to change layout horizontal and vertical alignment at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs11" %}

## Layout spacing

Layout provides support to add space horizontally and vertically between the nodes. The [`horizontalSpacing`](../api/diagram/layoutModel/#horizontalspacing) and [`verticalSpacing`](../api/diagram/layoutModel/#verticalspacing) properties of the layout allows you to set the space between the nodes in horizontally and vertically.

The following code illustrates how to set the initial horizontal and vertical spacing for the layout, as well as how to change these spacing values at runtime


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cust1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cust1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cust1" %}

## Layout margin

Layout provides support to add some blank space between the layout bounds/viewport and the layout. The [`margin`](../api/diagram/layout) property of the layout allows you to set the blank space.

The following code demonstrates how to set the initial layout margin and how to modify the layout margin dynamically at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs12" %}

## Layout orientation

The layout orientation can used to arrange the layout based on the direction. there are different orientation types that are defined in the following table.

|Orientation|Description|
| -------- | ----------- |
|TopToBottom|Aligns the layout from top to bottom. All the roots are placed at top of diagram.|
|LeftToRight|Aligns the layout from left to right. All the roots are placed at left of diagram.|
|BottomToTop|Aligns the layout from bottom to top. All the roots are placed at bottom of the diagram.|
|RightToLeft|Aligns the layout from right to left. All the roots are placed at right of the diagram.|

Diagram provides support to customize the  [`orientation`](../api/diagram/layoutOrientation/) of layout. You can set the desired orientation using layout.orientation.

N> In the diagram the default orientation is `TopToBottom`.

The following code demonstrates how to set the initial orientation for the layout and how to change it dynamically at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs13" %}

## Exclude from layout

In some cases, you may need one or two nodes not to be arranged based on the layout algorithm but instead positioned manually. You can exclude these nodes from the layout algorithm by setting the [`excludeFromLayout`](../api/diagram/nodeModel/#excludefromlayout) property to true.

The following code example demonstrates how to exclude a node from the layout and position it manually:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-exclude/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-exclude/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-exclude" %}


## Fixed node

Layout provides support to arrange the nodes with reference to the position of a fixed node and set it to the [`fixedNode`](../api/diagram/layoutModel/#fixednode) of the layout property. This is helpful when you try to expand/collapse a node. It might be expected that the position of the double-clicked node should not be changed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs14" %}

## Expand and collapse

Diagram allows to expand/collapse the subtrees of a layout. The node’s isExpanded property allows you to expand/collapse its children. The following code example shows how to expand/collapse the children of a node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs15" %}

For more details about customizing the expand and collapse icon refer [`expand Collapse`](./expandAndCollapse)

## Layout animation

While performing expand and collapse operations, the layout can be animated by applying a small delay. This can be achieved by setting the [`enableAnimation`](../api/diagram/layoutModel/#enableanimation) property of the layout. By default, `enableAnimation` is set to true.

In the following example, the enableAnimation property ensures that the layout changes are animated, enhancing the visual experience during expand and collapse operations.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cust3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cust3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cust3" %}

N> To enable layout animation, you need to inject LayoutAnimation module in diagram.

## Parent - child relation with dropped nodes from symbol palette

You can create a layout with dropped nodes from symbol palette using the [`drop`](../api/diagram/#drop) event. In `drop` event, you have to create a connection between the source and target item.

Find the code example to create parent - child relation between source and target nodes in drop event.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs17" %}

![Layout drag and drop](images/drag-drop-layout.gif)

## setNodeTemplate

 The [`setNodeTemplate`](../api/diagram/#setnodetemplate) function is provided for the purpose of customizing nodes. It will be called for each node on node initialization. In this function, the node style and its properties can be customized and can bind the custom JSON with node.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/AutomaticLayout-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/AutomaticLayout-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/AutomaticLayout-cs16" %}

## Refresh layout

Diagram allows refreshing the layout at runtime. To refresh the layout, you need to call the [`doLayout`](../api/diagram/#dolayout) method.


```javascript
//To refresh layout
diagram.doLayout();

```

