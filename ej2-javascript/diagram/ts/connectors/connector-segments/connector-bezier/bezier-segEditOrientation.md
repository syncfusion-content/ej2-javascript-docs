---
layout: post
title: Bezier Segment Edit Orientation in ##Platform_Name## Diagram | Syncfusion®
description: Edit bezier ##Platform_Name## Diagram segment intermediate points in bidirectional or freeform drag orientation.
platform: ej2-javascript
control: Bezier Segment edit orientation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---
# Bezier Segment Edit Orientation in ##Platform_Name## Diagram

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](../../../../api/diagram/bezierSegmentEditOrientation) property of [`bezierSettings`](../../../../api/diagram/bezierSettingsModel).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](../../../images//bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](../../../images//bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](../../../../api/diagram/bezierSmoothness) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram/connectors-segEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-segEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-segEdit" %}