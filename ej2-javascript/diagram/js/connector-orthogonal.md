---
layout: post
title: Orthogonal connector in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Orthogonal 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Orthogonal Connectors in ##Platform_Name## Diagram control

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](../api/diagram/segments) as orthogonal to create a default orthogonal segment and need to specify [`type`](../api/diagram/connector#type-Segments). The following code example illustrates how to create a default orthogonal segment.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](../api/diagram/connector#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The [`length`](../api/diagram/orthogonalSegment) and [`direction`](../api/diagram/orthogonalSegment) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs9" %}


N> You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Orthogonal segment editing

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging them.
* When necessary, some segments are added or removed automatically, while dragging the segment. 
* This is to maintain proper routing of orthogonality between segments.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs9" %}


![Orthogonal Segment edit Gif](images/orthoSegEdit.gif)


## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrates how orthogonal segments are re-routed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs11" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector can have any number of segments in between the source and the target point. Segments are rendered with the circle shape by default. The [`segmentThumbShape`](../api/diagram#segmentThumbShape-SegmentThumbShapes) property allows you to change the default shape of the segment thumb. The following predefined shapes are provided:

| Shape name | Shape |
|-------- | -------- |
|Rhombus| ![Rhombus](images/rhombus.png) |
| Square | ![Square](images/Square.png) |
| Rectangle | ![Rectangle](images/Rectangle.png) |
| Ellipse |![Ellipse](images/Ellipse.png) |
|Arrow| ![Arrow](images/Arrow.png) |
| OpenArrow | ![OpenArrow](images/OpenArrow.png) |
| Circle |![Circle](images/Circle.png) |
| Fletch|![Fletch](images/Fletch.png) |
|OpenFetch| ![OpenFetch](images/OpenFetch.png) |
| IndentedArrow | ![IndentedArrow](images/IndentedArrow.png) |
| OutdentedArrow | ![OutdentedArrow](images/OutdentedArrow.png) |
| DoubleArrow |![DoubleArrow](images/DoubleArrow.png) |

 You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs12" %}

![Segment Thumb Shape](images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

 .e-orthogonal-thumb {

            stroke:#24039e;

            fill:rgb(126, 190, 219);

            stroke-width: 3px;

            }

```

## How to customize Orthogonal Segment Thumb Size

Orthogonal segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](../api/diagram#segmentThumbSize-SegmentThumbSize) property.
To change the thumb size for all Orthogonal connectors, set the [`segmentThumbSize`](../api/diagram#segmentThumbSize-SegmentThumbSize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](../api/diagram/connectorConstraints) constraint, then set the desired [`segmentThumbSize`](../api/diagram#segmentThumbSize-SegmentThumbSize). 


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-cs62/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-cs62/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-cs62" %}