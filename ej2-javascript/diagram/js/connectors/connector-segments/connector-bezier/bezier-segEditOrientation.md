---
layout: post
title: Bezier Segment edit orientation in ##Platform_Name## Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® ##Platform_Name## Diagram control of Syncfusion Essential® JS 2 and more.
platform: ej2-javascript
control: Bezier Segment edit orientation
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connector Settings

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](../api/diagram/bezierSegmentEditOrientation/) property of [`bezierSettings`](../api/diagram/bezierSettingsModel/).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](../../../../images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](../../../../images/bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](../api/diagram/bezierSmoothness/) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram/connectors-segEdit/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram/connectors-segEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors-segEdit" %}